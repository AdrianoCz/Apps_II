import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function TelaHome({ navigation }) {
return (
<View style={estilos.tela}>
<Text style={estilos.titulo}>Home</Text>
<TouchableOpacity style={estilos.botao}
onPress={() => navigation.navigate('Notificacoes')}>
<Text style={estilos.textoBotao}>Ver Notificações</Text>
</TouchableOpacity>
</View>
);
}
function TelaNotificacoes() {
return (
<View style={estilos.tela}>
<Text style={estilos.titulo}>Notificações</Text>
<Text>Você tem 3 novas mensagens</Text>
</View>
);}
function TelaPerfil() {
return (
<View style={estilos.tela}>
<Text style={estilos.titulo}>Perfil</Text>
</View>
);
}
function HomeStack() {
return (
<Stack.Navigator>
<Stack.Screen name="HomeScreen" component={TelaHome}
options={{ title: 'Início' }} />
<Stack.Screen name="Notificacoes" component={TelaNotificacoes} />
</Stack.Navigator>
);
}
export default function App() {
return (
<NavigationContainer>
<Tab.Navigator screenOptions={{ headerShown: false }}>
<Tab.Screen name="HomeTab" component={HomeStack}
options={{ tabBarLabel: 'Home', tabBarIcon: () => <Text> </Text> }} />
<Tab.Screen name="PerfilTab" component={TelaPerfil}
options={{ tabBarLabel: 'Perfil', tabBarIcon: () => <Text> </Text> }} />
</Tab.Navigator>
</NavigationContainer>
);
}
const estilos = StyleSheet.create({
tela: { flex: 1, justifyContent: 'center', alignItems: 'center' },
titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
botao: { backgroundColor: '#007AFF', padding: 14, borderRadius: 8, marginTop: 10 },
textoBotao: { color: '#fff', fontSize: 16 },
});