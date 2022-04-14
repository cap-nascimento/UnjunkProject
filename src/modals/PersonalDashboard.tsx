import { Alert, Modal, Pressable, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect, useState } from "react";

import { Text, View } from "../components/Themed";

function ModalIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={50} style={{ marginLeft: 10 }} {...props} />
}

export default function PersonalDashboard(props: any) {

  const [modalVisible, setModalVisible] = useState(true);
  const [imc, setImc] = useState(0);
  const [indicator, setIndicator] = useState('');

  useEffect(() => {
    calculateIMC();
  }, []);

  const obesityIndicator = (imc: number) => {
    let result = '';
    if (imc < 18.5) {
      result = 'abaixo do peso.';
    } else if (imc < 25) {
      result = 'com peso normal.';
    } else if (imc < 30) {
      result = 'com sobrepeso.';
    } else if (imc < 35) {
      result = 'com obesidade grau I.';
    } else if (imc < 40) {
      result = 'com obesidade grau II.';
    } else {
      result = 'com obesidade grau III.';
    }
    setIndicator(`Você está com ${result}`);
  }

  const calculateIMC = () => {
    const peso: number = props.pessoaData.peso;
    const altura: number = props.pessoaData.altura;
    let currentImc = peso / (altura * altura);
    setImc(currentImc);
    obesityIndicator(currentImc);
  }

  return(
    <Modal
      animationType="slide"
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
          <ModalIcon name="close" color="green" />
        </Pressable>
      </View>
      <View style={styles.modalContent}>
        <Text style={styles.textStyle}>
          IMC: {imc}
        </Text>
        <Text style={styles.textStyle}>
          {indicator}
        </Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    
  },
	modalContent: {
		flex: 1,
		alignItems: "flex-start",
	},
  textStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 22,
  }
})