import { StyleSheet } from 'react-native';

import InfoEdit from '../components/InfoEdit';
import { Text, View } from '../components/Themed';

export default function InfoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Info</Text>
      <View style={styles.separator} />
      <InfoEdit path="/screens/InfoScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
