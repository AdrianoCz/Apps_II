import { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Exercicio03() {
  const [visivel, setVisivel] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Mostrar / Esconder" onPress={() => setVisivel(!visivel)} />
      {visivel && (
        <Text style={{ fontSize: 20, marginTop: 20 }}>
          Você encontrou o segredo!
        </Text>
      )}
    </View>
  );
}
