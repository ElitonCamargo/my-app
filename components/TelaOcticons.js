import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Octicons } from '@expo/vector-icons'; 

export default function TelaOcticons() {
  return (
    <View style={styles.container}>
      <Text>Octicons</Text>
      <Octicons name="arrow-switch" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
