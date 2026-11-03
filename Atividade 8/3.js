import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ActivityIndicator  } from 'react-native';
import { useState, useEffect} from 'react'

function Lista({dados}){
    return(
        <View>
            {dados ? dados.map((usuario, i) => (<View key = {i}>{usuario}</View>)) : "" }
        </View>
    )

}

export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);
  useEffect(() => {
    async function carregar() {
      const resposta = await fetch(URL_API);
      const dados = await resposta.json();
      setUsuarios(dados);
      setCarregando(false);
    }
    carregar();
  }, []);
  if (carregando) return <ActivityIndicator />;
  return <Lista dados={usuarios} />;
}