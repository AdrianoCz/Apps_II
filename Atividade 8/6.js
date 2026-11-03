import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ActivityIndicator  } from 'react-native';
import { useState, useEffect} from 'react'

export default function BuscaProdutos() {
const [termo, setTermo] = useState('');
const [resultados, setResultados] = useState([]);
useEffect(() => {
if (termo.length < 3) return;
const timer = setTimeout(async () => {
const r = await fetch(`${API}/search?q=${termo}`);
const dados = await r.json();
setResultados(dados.products);
}, 500);
return () => clearTimeout(timer); // cancela
}, [termo]);
return <TextInput value={termo} onChangeText={setTermo} />;
}