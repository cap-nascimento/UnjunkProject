import { StyleSheet } from 'react-native';
import HomeEdit from '../components/HomeEdit';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
   <HomeEdit path="/screens/HomeScreen.tsx" />
  );
}
