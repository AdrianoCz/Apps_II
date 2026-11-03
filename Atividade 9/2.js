import { useEffect } from 'react';
import { View } from 'react-native';

export default function App() {
  useEffect(() => {
    const id = setInterval(() => {
      console.log('tick');
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <View />;
}