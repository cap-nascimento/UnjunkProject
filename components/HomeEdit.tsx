import { StyleSheet } from 'react-native';

import { Text, View } from './Themed';

import { Button, Alert } from 'react-native';

const profilePictureModule = require('react-native-profile-picture');

export default function HomeEdit({ path }: { path: string }) {
	const ProfilePicture = profilePictureModule.default;
	return (
		<View style={styles.container}>
			<ProfilePicture 
				isPicture={true}
				requirePicture={require('../assets/images/zero-two.jpg')}
				shape='rounded'
				width={80}
				height={80}
			/>
			<Button
				title='Ver plano'
				onPress={() => {Alert.alert('')}}
			/>
			<Button
				title='Compartilhe seu perfil'
				onPress={() => {Alert.alert('')}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	}
});
