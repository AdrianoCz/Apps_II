import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const produtos = [
{ id: '1', nome: 'Notebook', preco: 3500, descricao: 'Notebook 16GB RAM' },
{ id: '2', nome: 'Smartphone', preco: 2200, descricao: 'Tela 6.5", 128GB' },
{ id: '3', nome: 'Fone Bluetooth', preco: 350, descricao: 'Cancelamento de ruído' },
];
function TelaLista({ navigation }) {
return (
<View style={estilos.container}>
<FlatList data={produtos} keyExtractor={(item) => item.id}
renderItem={({ item }) => (
<TouchableOpacity style={estilos.item}
onPress={() => navigation.navigate('Produto', {
nome: item.nome, preco: item.preco, descricao: item.descricao,
})}>
<Text style={estilos.nomeItem}>{item.nome}</Text>
<Text>R$ {item.preco.toFixed(2)}</Text>
</TouchableOpacity>
)} />
</View>
);
}
function TelaProduto({ route, navigation }) {
const { nome, preco, descricao } = route.params;
return (
<View style={estilos.tela}>
<Text style={estilos.titulo}>{nome}</Text>
<Text style={estilos.preco}>R$ {preco.toFixed(2)}</Text>
<Text style={estilos.descricao}>{descricao}</Text>
<TouchableOpacity style={estilos.botao}
onPress={() => navigation.goBack()}>
<Text style={estilos.textoBotao}>Voltar à lista</Text>
</TouchableOpacity>
</View>
);
}
export default function App() {
return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Lista" component={TelaLista}
options={{ title: 'Produtos' }} />
<Stack.Screen name="Produto" component={TelaProduto} />
</Stack.Navigator>
</NavigationContainer>
);
}
const estilos = StyleSheet.create({
container: { flex: 1, paddingTop: 10 },
item: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#ddd' },
nomeItem: { fontSize: 16, fontWeight: 'bold' },
tela: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
titulo: { fontSize: 26, fontWeight: 'bold' },
preco: { fontSize: 22, color: '#28a745', marginVertical: 10 },
descricao: { fontSize: 16, color: '#666', textAlign: 'center', marginBottom: 20 },
botao: { backgroundColor: '#007AFF', padding: 14, borderRadius: 8 },
textoBotao: { color: '#fff', fontSize: 16 },
});