import { StyleSheet, Text, View } from 'react-native';
import Home from './src/views/home/Home';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['#5936ce', '#e70e77']} start={{x: 1.0 , y: 0.1}} style={styles.container}>
      <Home />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
