import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

// const storeData = async () => {
// 	try {
// 		await AsyncStorage.setItem(
// 			'@MySuperStore:key',
// 			'I like to save it.'
// 		);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

		// useEffect(() => {
		// 	storeData();
		// }, [])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
