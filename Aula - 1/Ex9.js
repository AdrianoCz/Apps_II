    import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';

function Saudacao({ nome }) {
return <Text>Olá, {nome}!</Text>;
}

export default function App() {
  return (
    <View style={{flex: 1}}>
<Saudacao nome="Ana" />
<Saudacao nome="Beto" />
    </View>
  );
}

