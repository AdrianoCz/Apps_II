import { useEffect } from 'react';
import { View, Text } from 'react-native';

export default function Exercicio06() {
  useEffect(() => {
    console.log('Componente montado');

    return () => {
      console.log('Componente desmontado');
    };
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Veja o console para as mensagens.</Text>
    </View>
  );
}
