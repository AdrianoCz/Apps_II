import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput} from 'react-native';


export default function App() {
  const [nome, setNome] = useState(''); 
  return (
    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: "100%" }}>
<TextInput
value={nome}
onChangeText={setNome}
placeholder="Digite seu nome"
/>
    </View>
  );
}

