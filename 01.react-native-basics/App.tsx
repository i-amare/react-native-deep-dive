import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { appStyling } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Let's get this shit!!</Text>
      <StatusBar style="inverted" />
    </View>
  );
}

const styles = appStyling;
