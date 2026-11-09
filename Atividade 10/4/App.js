import { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

export default function Exercicio04() {
  const [texto, setTexto] = useState('');
  const [tarefas, setTarefas] = useState([]);

  function adicionar() {
    if (texto.trim() === '') return;
    setTarefas([...tarefas, texto]);
    setTexto('');
  }

  function remover(index) {
    setTarefas(tarefas.filter((_, i) => i !== index));
  }

  return (
    <View style={{ flex: 1, padding: 20, paddingTop: 50 }}>
      <TextInput
        placeholder="Nova tarefa"
        value={texto}
        onChangeText={setTexto}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button title="Adicionar" onPress={adicionar} />

      <FlatList
        data={tarefas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 16 }}>{item}</Text>
            <Button title="Remover" onPress={() => remover(index)} />
          </View>
        )}
      />
    </View>
  );
}
