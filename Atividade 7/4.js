import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
function TelaHome() {
return (
<View style={estilos.tela}>
<Text style={estilos.titulo}>Página Inicial</Text>
<Text>Deslize da esquerda para abrir o menu</Text>
</View>
);
}
function TelaConfiguracoes() {
return (
<View style={estilos.tela}>
<Text style={estilos.titulo}>Configurações</Text>
</View>
);
}
function TelaSobre() {
return (
<View style={estilos.tela}>
<Text style={estilos.titulo}>Sobre o App</Text>
<Text>Versão 1.0.0</Text>
</View>
);
}
export default function App() {
return (
<NavigationContainer>
<Drawer.Navigator initialRouteName="Home">
<Drawer.Screen name="Home" component={TelaHome}
options={{ title: 'Início' }} />
<Drawer.Screen name="Config" component={TelaConfiguracoes}
options={{ title: 'Configurações' }} />
<Drawer.Screen name="Sobre" component={TelaSobre} />
</Drawer.Navigator>
</NavigationContainer>
);
}
const estilos = StyleSheet.create({
tela: { flex: 1, justifyContent: 'center', alignItems: 'center' },
titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
});