import { Alert, Modal, Pressable, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

import { Text, View } from "../components/Themed";

function ModalIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={50} style={{ marginLeft: 10 }} {...props} />
}

export default function PersonalDashboard(props: any) {
  const [modalVisible, setModalVisible] = useState(true);
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

      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    marginTop: 22,
  }
})