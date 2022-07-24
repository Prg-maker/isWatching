import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { IsWatching } from './components/IsWathing';

export default function App() {
  return (
    <View>

      <IsWatching/>
      
      <StatusBar style="dark" />
    </View>
  );
}

