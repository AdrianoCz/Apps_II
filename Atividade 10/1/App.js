import { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Exercicio01() {
  const [numero, setNumero] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 40, marginBottom: 20 }}>{numero}</Text>
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Button title="-" onPress={() => setNumero(numero - 1)} />
        <Button title="+" onPress={() => setNumero(numero + 1)} />
      </View>
    </View>
  );
}
