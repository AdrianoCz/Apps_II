import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
function TelaInicial({ navigation }) {
    return (
        <View style={estilos.tela}>
            <Text style={estilos.titulo}>Tela Inicial</Text>
            <TouchableOpacity style={estilos.botao}
                onPress={() => navigation.navigate('Detalhes')}>
                <Text style={estilos.textoBotao}>Ir para Detalhes</Text>
            </TouchableOpacity>
        </View>
    );
}
function TelaDetalhes({ navigation }) {
    return (
        <View style={estilos.tela}>
            <Text style={estilos.titulo}>Tela de Detalhes</Text>
            <TouchableOpacity style={estilos.botao}
                onPress={() => navigation.goBack()}>
                <Text style={estilos.textoBotao}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Inicio">
                <Stack.Screen name="Inicio" component={TelaInicial}
                    options={{ title: 'Home' }} />
                <Stack.Screen name="Detalhes" component={TelaDetalhes} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
const estilos = StyleSheet.create({
    tela: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    botao: { backgroundColor: '#007AFF', padding: 14, borderRadius: 8 },
    textoBotao: { color: '#fff', fontSize: 16 },
});