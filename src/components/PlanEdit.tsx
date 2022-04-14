import React from 'react';
import { StyleSheet, TextInput, Button, Alert, Pressable } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import PessoaService from '../../db/services/pessoa.service';
import { Pessoa } from '../../db/models/pessoa.model';

import { Text, View } from './Themed';

export default function PlanEdit({ path }: { path: string }) {

	const { control, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {
			peso: '',
			altura:'',
		}
	});
	const onSubmit = (data: any) => {
		try {
			let pessoa: Pessoa = new Pessoa();
			pessoa.peso = Number(data.peso);
			pessoa.altura = Number(data.altura);

			const insertId = PessoaService.addData(pessoa);
			if (insertId == null || insertId == undefined) {
				alert("Não foi possível inserir seus dados.");
			} else {
				alert("O app está em desenvolvimento, portanto apenas vamos checar sua faixa de peso. Vá para 'Phis'");
			}
		} catch (error) {
			console.log('deu erro');
		}
	}

	return (
		<View style={styles.container}>
			<Controller
				control={control}
				rules={{
					required: true,
				}}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput 
					style={styles.input}
					onBlur={onBlur}
					onChangeText={onChange}
					value={value}
					keyboardType='numeric'
					/>
					)}
				name="peso"
			/>
			<Text style={styles.textStyle}>Peso (kg)</Text>
			{ errors.peso && <Text style={styles.textStyle}>
				This is required.</Text> }

			<Controller
				control={control}
				rules={{ 
					maxLength: 100, 
				}}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
					style={styles.input}
					onBlur={onBlur}
					onChangeText={onChange}
					value={value}
					keyboardType='numeric'
					/>
					)}
				name="altura"
			/>
			<Text style={styles.textStyle}>Altura (m)</Text>
			{ errors.altura && <Text style={styles.textStyle}>
				This is required.</Text> }

			<Pressable 
				onPress={handleSubmit(onSubmit)}
				style={styles.button}
			>
				<Text>Próximo</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	input: {
		backgroundColor: '#ccc',
		borderRadius: 3,
		padding: 5,
		marginTop: 20,
		marginLeft: 20,
		marginRight: 20,
	},
	textStyle: {
		marginLeft: 20,
	},
	button: {
		backgroundColor: '#15a1bd',
		padding: 10,
		marginTop: 20,
		marginLeft: 20,
		marginRight: 20,
	}
});
