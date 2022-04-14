import { StyleSheet, Pressable } from 'react-native';
import { useEffect, useState } from 'react';

import { Text, View } from './Themed';

import PessoaService from '../../db/services/pessoa.service';

export default function PhisicalInfoEdit({ path }: { path: string }) {

  const [pessoaData, setPessoaData] = useState({});

  const getPessoaData = () => {
    PessoaService.findAll()
      .then((response: any) => {
        console.log(response);
        setPessoaData(response);
      }), (error:any) => {
        console.log(error);
      }
  }

	return (
		<View style={styles.centeredView}>
			<Text>
					<Pressable
            style={styles.button}
            onPress={getPessoaData}
          >
            <Text style={styles.buttonText}>Gerar dashboard</Text>
          </Pressable>
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    alignContent: 'center'
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
  }
});