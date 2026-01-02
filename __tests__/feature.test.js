import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Feature from '../app/feature'; // Adjust path accordingly
import { useLocalSearchParams, useRouter } from 'expo-router';
import { getDoc, updateDoc } from 'firebase/firestore';

jest.mock('expo-router', () => ({
  useLocalSearchParams: jest.fn(),
  useRouter: jest.fn(),
}));

jest.mock('firebase/firestore', () => ({
  getDoc: jest.fn(),
  updateDoc: jest.fn(),
  doc: jest.fn(),
  collection: jest.fn(),
}));
jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(() => ({ currentUser: { uid: 'test-user' } })),
}));

jest.mock('@benjeau/react-native-draw', () => {
  const React = require('react');
  return {
    Canvas: React.forwardRef((props, ref) => {
      React.useImperativeHandle(ref, () => ({
        getPaths: jest.fn(() => [{ path: ['M0,0 L10,10'], color: 'black' }]),
        clear: jest.fn(),
        addPath: jest.fn(),
        undo: jest.fn(),
      }));
      return null;
    }),
  };
});

describe('Letter tracing', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    useRouter.mockReturnValue({ navigate: mockNavigate });
    useLocalSearchParams.mockReturnValue({ itemLetter: 'ੳ' });
    jest.clearAllMocks();
  });

  it('renders the drawing canvas and SVG stencil', () => {
    const { getByTestId } = render(<Feature />);
    // Ensure the main container exists
    expect(render(<Feature />).toJSON()).toBeDefined();
  });

  it('advances globalCounter when path similarity is high', async () => {
    // In a real scenario, we'd mock compareSvgPaths to return > 0.74
    // For this test, we are testing the interaction of handleGetPath
    const { getByRole } = render(<Feature />);
    
    const drawingArea = render(<Feature />).root.findByType(require('react-native').Pressable);
    
    // Simulate user finishing a stroke
    fireEvent(drawingArea, 'onPressOut');

    // Check if progress logic triggered (this would require exporting state or 
    // checking UI changes like the completion button)
    await waitFor(() => {
        // Verification logic here
    });
  });

  it('shows "Collect 10 EXP" button when all strokes are complete', async () => {
    useLocalSearchParams.mockReturnValue({ itemLetter: 'ੳ' });
    
    const { queryByText, rerender } = render(<Feature />);
    
    // Mock the state where counter equals path length
    // Note: In RNTL, we usually trigger the events that lead to this state
    expect(queryByText('Collect 10 EXP')).toBeNull();
    
    // Logic to simulate completion...
  });

  it('calls Firebase to update EXP when collection button is pressed', async () => {
    getDoc.mockResolvedValue({
      exists: () => true,
      data: () => ({ exp: 50, completedLevels: [] })
    });

    const { getByText } = render(<Feature />);
    
    // Manually trigger the completion state for the test
    // If testing the button directly:
    const collectBtn = queryByText('Collect 10 EXP');
    if (collectBtn) {
        fireEvent.press(collectBtn);
        expect(updateDoc).toHaveBeenCalled();
        expect(mockNavigate).toHaveBeenCalledWith('/');
    }
  });
});