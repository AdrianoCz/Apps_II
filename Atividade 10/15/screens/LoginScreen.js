import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useAuth } from '../contexts/AuthContext';

export default function LoginScreen() {
  const { login } = useAuth();
  const [nome, setNome] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Login</Text>
      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button
        title="Entrar"
        onPress={() => {
          if (nome.trim() !== '') login(nome);
        }}
      />
    </View>
  );
}
