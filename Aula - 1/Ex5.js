  import { StatusBar } from 'expo-status-bar';
  import { StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';

  export default function App() {
    return (
      <View style= {{display: 'flex', justifyContent: 'center', alignItems: 'center', width: "100%"}}>
        <Image style={{ width: 500, height: 500 }} source={{uri:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Veigar_0.jpg" }}   />
      </View>
    );
  }