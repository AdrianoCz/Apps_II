import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [texto, setTexto] = useState(false);
  
  return (
    <View>
      <Text>{texto ? "Achou" : ""}</Text>
      <Button title='Mostrar' onPress={() => {setTexto(!texto)}}/>
    </View>
  );
}


