import { Stack } from "expo-router";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Gesture, GestureHandlerRootView } from "react-native-gesture-handler";

import 'react-native-svg'
import 'react-native-gesture-handler';

import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import GestureScreen from './GestureScreen';

import { useColorScheme } from '@/hooks/useColorScheme';
import { useRouter, useSegments, Slot } from "expo-router";

import Index from './(tabs)/index'
import { SafeAreaProvider } from "react-native-safe-area-context";


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const router = useRouter();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      router.replace('/signin');
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="signin" options={{title: 'Sign In'}}/>
          <Stack.Screen name="signup" options={{title: 'Sign Up'}}/>
          <Stack.Screen name="forgotpassword" options={{title: 'Forgot Password'}}/>
          <Stack.Screen name="emailsent" options={{title: 'Reset Password Sent'}}/>
        </Stack>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
