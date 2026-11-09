import { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

export default function Exercicio07() {
  const [segundos, setSegundos] = useState(0);
  const [rodando, setRodando] = useState(true);

  useEffect(() => {
    if (!rodando) return;

    const timer = setInterval(() => {
      setSegundos((s) => s + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [rodando]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 40, marginBottom: 20 }}>{segundos}s</Text>
      <Button
        title={rodando ? 'Pausar' : 'Retomar'}
        onPress={() => setRodando(!rodando)}
      />
    </View>
  );
}
