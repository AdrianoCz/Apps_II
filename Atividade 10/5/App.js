import { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Exercicio05() {
  const [jogo, setJogo] = useState({ pontos: 0, vidas: 3 });

  function acertar() {
    setJogo({ ...jogo, pontos: jogo.pontos + 1 });
  }

  function errar() {
    if (jogo.vidas > 0) {
      setJogo({ ...jogo, vidas: jogo.vidas - 1 });
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Pontos: {jogo.pontos}</Text>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Vidas: {jogo.vidas}</Text>
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Button title="Acertar" onPress={acertar} />
        <Button title="Errar" onPress={errar} />
      </View>
    </View>
  );
}
