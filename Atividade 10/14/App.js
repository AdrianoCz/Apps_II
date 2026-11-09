import { createContext, useContext, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  function login(nome) {
    setUsuario({ nome });
  }

  function logout() {
    setUsuario(null);
  }

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function TelaLogin() {
  const { login } = useContext(AuthContext);
  const [nome, setNome] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Login</Text>
      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button
        title="Entrar"
        onPress={() => {
          if (nome.trim() !== '') login(nome);
        }}
      />
    </View>
  );
}

function TelaPrincipal() {
  const { usuario, logout } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Bem-vindo, {usuario.nome}
      </Text>
      <Button title="Sair" onPress={logout} />
    </View>
  );
}

function Rotas() {
  const { usuario } = useContext(AuthContext);
  return usuario ? <TelaPrincipal /> : <TelaLogin />;
}

export default function Exercicio14() {
  return (
    <AuthProvider>
      <Rotas />
    </AuthProvider>
  );
}
