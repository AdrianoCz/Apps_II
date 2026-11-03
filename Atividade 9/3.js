import { useState, useEffect } from 'react';
import { Text } from 'react-native';

export default function Usuario({ id }) {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    fetch(`/api/usuarios/${id}`)
      .then(res => res.json())
      .then(dados => setUsuario(dados));
  }, [id]);

  if (!usuario) return <Text>A carregar...</Text>;

  return <Text>{usuario.nome}</Text>;
}