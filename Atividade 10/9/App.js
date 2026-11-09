import { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';

export default function Exercicio09() {
  const [texto, setTexto] = useState('');
  const [resultados, setResultados] = useState([]);

  function buscar(termo) {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((resposta) => resposta.json())
      .then((json) => {
        const filtrados = json.filter((u) =>
          u.name.toLowerCase().includes(termo.toLowerCase())
        );
        setResultados(filtrados);
      })
      .catch(() => setResultados([]));
  }

  useEffect(() => {
    // espera 500ms depois da última digitação
    const t = setTimeout(() => {
      if (texto.trim() === '') {
        setResultados([]);
      } else {
        buscar(texto);
      }
    }, 500);

    // cleanup: cancela a busca anterior
    return () => clearTimeout(t);
  }, [texto]);

  return (
    <View style={{ flex: 1, padding: 20, paddingTop: 50 }}>
      <TextInput
        placeholder="Buscar usuário"
        value={texto}
        onChangeText={setTexto}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <FlatList
        data={resultados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 18, marginBottom: 10 }}>{item.name}</Text>
        )}
      />
    </View>
  );
}
