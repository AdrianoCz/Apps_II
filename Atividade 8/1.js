import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import {useState, useEffect} from 'react'

export default function Contador() {
const [contador, setContador] = useState(0);
return (
<View style={styles.container}>
<Text style={styles.numero}>{contador}</Text>
<Button title="+1"
onPress={() => setContador(contador + 1)} />
<Button title="-1"
onPress={() => setContador(contador - 1)} />
<Button title="Zerar"
onPress={() => setContador(0)} />
</View>
);
}

const styles = StyleSheet.create({
  container: {flex: 1,backgroundColor: "blue"} , numero: {color: "white"}
})