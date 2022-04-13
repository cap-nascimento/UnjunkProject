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
		<View>
			<Text>
					<Pressable
            style={styles.button}
            onPress={getPessoaData}
          >
            <Text>Seus dados</Text>
          </Pressable>
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ccc',
  },
});