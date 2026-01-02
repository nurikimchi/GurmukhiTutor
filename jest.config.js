module.exports = {
    preset: 'jest-expo',
    transformIgnorePatterns: [
      'node_modules/(?!(jest-)?react-native|@react-native(-community)?|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|@benjeau/react-native-draw|firebase|@firebase)',
    ],
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  };