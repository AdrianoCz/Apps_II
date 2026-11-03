import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {useState, useEffect} from 'react'

export default function Saudacao() {
const [nome, setNome] = useState('');
return (
<View style={{ padding: 20 }}>
<TextInput
placeholder="Digite seu nome"
value={nome}
onChangeText={setNome}
/>
<Text>
{nome ? `Olá, ${nome}!` : 'Digite algo acima'}
</Text>
</View>
);
}