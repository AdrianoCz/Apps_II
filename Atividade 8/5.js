import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ActivityIndicator  } from 'react-native';
import { useState, useEffect} from 'react'

export default function Cronometro() {
const [segundos, setSegundos] = useState(0);
useEffect(() => {
const id = setInterval(() => {
setSegundos(s => s + 1);
}, 1000);
return () => clearInterval(id); // limpeza
}, []);
return <Text>{segundos}s</Text>;
}