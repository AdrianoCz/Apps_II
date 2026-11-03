import { useState, useEffect } from 'react';
import { View } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('montou!');
  }, []);

  useEffect(() => {
    console.log('contador mudou para:', contador);
  }, [contador]);

  return <View />;
}