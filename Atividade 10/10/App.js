import { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

// Versão 1: usando useEffect e um segundo estado (forma NÃO recomendada)
export function ContadorComEffect() {
  const [valor, setValor] = useState(0);
  const [titulo, setTitulo] = useState('Valor: 0');

  useEffect(() => {
    console.log('Novo valor:', valor);
    setTitulo('Valor: ' + valor);
  }, [valor]);

  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>{titulo}</Text>
      <Button title="Somar 1" onPress={() => setValor(valor + 1)} />
    </View>
  );
}

// Versão 2: refatorada, apenas um estado.
// O título é calculado direto no render.
export default function Exercicio10() {
  const [valor, setValor] = useState(0);

  const titulo = 'Valor: ' + valor;

  useEffect(() => {
    console.log('Novo valor:', valor);
  }, [valor]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>{titulo}</Text>
      <Button title="Somar 1" onPress={() => setValor(valor + 1)} />
    </View>
  );
}
