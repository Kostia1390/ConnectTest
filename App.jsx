import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';

import { Navigation } from './screens/Navigation';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <Navigation />
    </NativeBaseProvider>
  );
}
