import { createContext, useContext, useState } from 'react';
import { View, Text, Button } from 'react-native';

const TemaContext = createContext();

function TemaProvider({ children }) {
  const [tema, setTema] = useState('claro');

  function alternarTema() {
    setTema(tema === 'claro' ? 'escuro' : 'claro');
  }

  const fundo = tema === 'claro' ? '#ffffff' : '#000000';
  const texto = tema === 'claro' ? '#000000' : '#ffffff';

  return (
    <TemaContext.Provider value={{ tema, alternarTema, fundo, texto }}>
      {children}
    </TemaContext.Provider>
  );
}

function Header() {
  const { fundo, texto } = useContext(TemaContext);

  return (
    <View style={{ backgroundColor: fundo, padding: 20, paddingTop: 50 }}>
      <Text style={{ color: texto, fontSize: 24 }}>Meu App</Text>
    </View>
  );
}

function Corpo() {
  const { tema, alternarTema, fundo, texto } = useContext(TemaContext);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: fundo,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: texto, marginBottom: 20 }}>Tema atual: {tema}</Text>
      <Button title="Alternar tema" onPress={alternarTema} />
    </View>
  );
}

export default function Exercicio12() {
  return (
    <TemaProvider>
      <View style={{ flex: 1 }}>
        <Header />
        <Corpo />
      </View>
    </TemaProvider>
  );
}
