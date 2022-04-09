import { useState } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import PersonalPlan from '../modals/PersonalPlan';
import { Text, View } from './Themed';

const profilePictureModule = require('react-native-profile-picture');

export default function HomeEdit({ path }: { path: string }) {

	const ProfilePicture = profilePictureModule.default;
	const [visiblePlan, setVisiblePlan] = useState(false);

	const closeModal = () => {
		setVisiblePlan(false);
	}

	return (
		<View style={styles.centeredView}>

			<ProfilePicture 
				isPicture={true}
				requirePicture={require('../assets/images/zero-two.jpg')}
				shape='rounded'
				width={80}
				height={80}
			/>
			
			{
				visiblePlan ? (
				<PersonalPlan 
					modalState={closeModal}
				/>
				) : (<></>)
			}
			
			<Pressable
				style={[styles.button, styles.buttonOpen]}
				onPress={() => setVisiblePlan(!visiblePlan)}>
				<Text style={styles.textStyle}>Ver Plano</Text>
			</Pressable>

		</View>
	);
}

const styles = StyleSheet.create({
	centeredView: {
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			marginTop: 22
	},
	button: {
			borderRadius: 20,
			padding: 10,
			elevation: 2
	},
	buttonOpen: {
			backgroundColor: "#F194FF",
	},
	textStyle: {
			color: "white",
			fontWeight: "bold",
			textAlign: "center"
	}
});
