import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: "100%" }}>
      <Button title="Clique" onPress={() => alert('Oi!')} />
      <TouchableOpacity onPress={() => alert('Toque!')}>
        <Text>Botão personalizado</Text>
      </TouchableOpacity>
    </View>
  );
}

