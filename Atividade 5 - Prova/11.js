import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';


function Card({titulo, corFundo}){
    const styles = StyleSheet.create({
        container: {
            backgroundColor: corFundo ? corFundo : "#f0f0f0" 
        }
    })
    return (
    <View style={styles.container}>
      <Text>{titulo}</Text>
    </View>
  )

}

export default function App() {  
  return (
    <View>
     <Card titulo="Teste" corFundo="red"/>
    </View>
  );
}


