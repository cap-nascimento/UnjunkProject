import { Text, View } from '../components/Themed';
import { Alert, StyleSheet, Modal, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';

function ModalIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>['name'];
	color: string;
}) {
	return <FontAwesome size={50} style={{ marginLeft: 10 }} {...props} />;
}

export default function PersonalPlan(props: any) {
	const [modalVisible, setModalVisible] = useState(true);
	return (

		<Modal
			animationType='slide'
			transparent={true}
			visible={modalVisible}
			onRequestClose = {() => {
				Alert.alert("Modal has been closed.");
				setModalVisible(!modalVisible);
			}}
		>

		<View style={styles.modalContainer}>
			<Pressable
				onPress={() => {
					setModalVisible(!modalVisible);
					props.modalState();
				}}>
				<ModalIcon name="angle-left" color="green" />
			</Pressable>
			<View style={styles.modalContent}>
				<Text>Calorias diárias</Text>
				<Text>Plano Manhã</Text>
				<Text>Plano Tarde</Text>
				<Text>Plano Noite</Text>
			</View>
		</View>
	</Modal>
	);
}

const styles = StyleSheet.create({
	modalContainer: {
			flex: 1,
	},
	modalContent: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	}
});
