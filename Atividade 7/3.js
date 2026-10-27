import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
function TelaHome() {
return (
<View style={estilos.tela}>
<Text style={estilos.icone}> </Text>
<Text style={estilos.titulo}>Home</Text>
</View>
);
}
function TelaBusca() {
return (
<View style={estilos.tela}>
<Text style={estilos.icone}> </Text>
<Text style={estilos.titulo}>Busca</Text>
</View>
);
}
function TelaPerfil() {
return (
<View style={estilos.tela}>
    <Text style={estilos.icone}> </Text>
<Text style={estilos.titulo}>Perfil</Text>
</View>
);
}
export default function App() {
return (
<NavigationContainer>
<Tab.Navigator screenOptions={{
tabBarActiveTintColor: '#007AFF',
tabBarInactiveTintColor: '#999' }}>
<Tab.Screen name="Home" component={TelaHome}
options={{ tabBarLabel: 'Início',
tabBarIcon: () => <Text> </Text> }} />
<Tab.Screen name="Busca" component={TelaBusca}
options={{ tabBarIcon: () => <Text> </Text> }} />
<Tab.Screen name="Perfil" component={TelaPerfil}
options={{ tabBarIcon: () => <Text> </Text> }} />
</Tab.Navigator>
</NavigationContainer>
);
}
const estilos = StyleSheet.create({
tela: { flex: 1, justifyContent: 'center', alignItems: 'center' },
icone: { fontSize: 48, marginBottom: 8 },
titulo: { fontSize: 22, fontWeight: 'bold' },
});