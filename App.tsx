import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Login from './src/views/auth/Login';
import UserContextProvider from './context/UserContext';

export default function App() {
  return (
    <UserContextProvider>
      <LinearGradient colors={['#5936ce', '#e70e77']} start={{ x: 1.0, y: 0.1 }} style={styles.container}>
        <Login />
      </LinearGradient>
    </UserContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
