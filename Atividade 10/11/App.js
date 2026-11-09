import { createContext, useContext } from 'react';
import { View, Text } from 'react-native';

const UsuarioContext = createContext();

function Perfil() {
  const usuario = useContext(UsuarioContext);

  return (
    <View>
      <Text style={{ fontSize: 22 }}>Nome: {usuario.nome}</Text>
      <Text style={{ fontSize: 22 }}>Idade: {usuario.idade}</Text>
    </View>
  );
}

export default function Exercicio11() {
  const usuario = { nome: 'Ana', idade: 25 };

  return (
    <UsuarioContext.Provider value={usuario}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Perfil />
      </View>
    </UsuarioContext.Provider>
  );
}
