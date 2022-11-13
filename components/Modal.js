import { StyleSheet, Text, View, Pressable, Modal as NewModal } from 'react-native'
import React from 'react'

const Modal = (props) => {
    const {isVisible, actionDeleteItem} = props;
  return (
    <NewModal
      animationType="slide"
      transparent={true}
      visible={isVisible}>

        <View style={styles.centeredView}>
          <View style={{backgroundColor: "white"}}>
            <Text>¿Queres eliminar este elemento?</Text>
            <Pressable
            onPress={() => actionDeleteItem()}
            style={{backgroundColor: "red", height: 30, alignItems: "center", justifyContent: "center", borderWidth: 2,}}>
              <Text style={styles.textStyle}>Eliminar</Text>
            </Pressable>
          </View>
        </View>
      </NewModal>
  )
}

export default Modal;

const styles = StyleSheet.create({
    centeredView: {
        width: 250,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 330,
    
    
      },
})