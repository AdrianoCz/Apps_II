import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

export default function Exercicio02() {
  const [nome, setNome] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
        style={{ borderWidth: 1, padding: 10, marginBottom: 20 }}
      />
      <Text style={{ fontSize: 24 }}>Olá, {nome}!</Text>
    </View>
  );
}
