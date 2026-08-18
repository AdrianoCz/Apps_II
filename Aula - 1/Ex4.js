  import { StatusBar } from 'expo-status-bar';
  import { StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';

  export default function App() {
    return (
      <View style= {{display: 'flex', justifyContent: 'center', alignItems: 'center', width: "100%"}}>
        <Text style={styles.titulo}>Título</Text>
      </View>
    );
  }
const styles = StyleSheet.create({
    titulo: {fontSize: 72, color: "red"}
})
