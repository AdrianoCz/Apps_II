import { createContext, useContext, useState } from 'react';
import { View, Text, Button } from 'react-native';

const CarrinhoContext = createContext();

function CarrinhoProvider({ children }) {
  const [itens, setItens] = useState([]);

  function adicionar(item) {
    setItens([...itens, item]);
  }

  function remover(id) {
    // remove apenas a primeira ocorrência do produto
    const indice = itens.findIndex((i) => i.id === id);
    if (indice === -1) return;
    setItens(itens.filter((_, i) => i !== indice));
  }

  const total = itens.reduce((soma, i) => soma + i.preco, 0);

  return (
    <CarrinhoContext.Provider value={{ itens, adicionar, remover, total }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

const produtos = [
  { id: 1, nome: 'Camiseta', preco: 40 },
  { id: 2, nome: 'Calça', preco: 90 },
  { id: 3, nome: 'Tênis', preco: 150 },
];

function ListaProdutos() {
  const { adicionar } = useContext(CarrinhoContext);

  return (
    <View style={{ marginBottom: 30 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Produtos</Text>
      {produtos.map((p) => (
        <View
          key={p.id}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
          }}
        >
          <Text>
            {p.nome} - R$ {p.preco}
          </Text>
          <Button title="Adicionar" onPress={() => adicionar(p)} />
        </View>
      ))}
    </View>
  );
}

function Carrinho() {
  const { itens, remover, total } = useContext(CarrinhoContext);

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Carrinho</Text>
      {itens.map((item, index) => (
        <View
          key={index}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
          }}
        >
          <Text>
            {item.nome} - R$ {item.preco}
          </Text>
          <Button title="Remover" onPress={() => remover(item.id)} />
        </View>
      ))}
      <Text style={{ marginTop: 20, fontSize: 18 }}>Total: R$ {total}</Text>
    </View>
  );
}

export default function Exercicio13() {
  return (
    <CarrinhoProvider>
      <View style={{ flex: 1, padding: 20, paddingTop: 50 }}>
        <ListaProdutos />
        <Carrinho />
      </View>
    </CarrinhoProvider>
  );
}
