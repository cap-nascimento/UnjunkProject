import { StyleSheet, Pressable } from 'react-native';
import { useEffect, useState } from 'react';

import { Text, View } from './Themed';

import PessoaService from '../../db/services/pessoa.service';
import PersonalDashboard from '../modals/PersonalDashboard';

export default function PhisicalInfoEdit({ path }: { path: string }) {

  const [pessoaData, setPessoaData] = useState({});
  const [visibleDashboard, setVisibleDashboard] = useState(false);

  useEffect(() => {
    if(Object.keys(pessoaData).length != 0) {
      setVisibleDashboard(true);
    }
  }, [pessoaData]);

  const closeModal = () => {
    setVisibleDashboard(false);
  }

  const getPessoaData = () => {
    PessoaService.findAll()
      .then((response: any) => {
        if (response.length == 0) {
          alert("Você não forneceu peso e altura!");
        } else {
          let pessoa = {
            peso: response._array[0].peso,
            altura: response._array[0].altura,
          }
          setPessoaData(pessoa);
        }
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

      {
        visibleDashboard ? (
          <PersonalDashboard
            modalState={closeModal}
            pessoaData={pessoaData}
          />
        ) : (<></>)
      }

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