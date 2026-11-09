import { AuthProvider, useAuth } from './contexts/AuthContext';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

// Este componente fica dentro do Provider, por isso pode usar useAuth
function Telas() {
  const { usuario } = useAuth();
  return usuario ? <HomeScreen /> : <LoginScreen />;
}

export default function App() {
  return (
    <AuthProvider>
      <Telas />
    </AuthProvider>
  );
}
