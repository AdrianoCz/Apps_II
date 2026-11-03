import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ActivityIndicator  } from 'react-native';
import { useState, useEffect} from 'react'

export default function DetalhePost({ postId }) {
const [post, setPost] = useState(null);
useEffect(() => {
setPost(null); // limpa enquanto carrega
fetch(`${API}/posts/${postId}`)
.then(r => r.json())
.then(setPost);
}, [postId]); // roda de novo se postId mudar
if (!post) return <ActivityIndicator />;
return <Text>{post.title}</Text>;
}