import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import React from "react";

import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity }
from "react-native";
import Modal from "./components/Modal"

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  const onHandleChangeItem = (t) => {
    setTextItem(t);
  };

  const addItem = () => {
    setItemList((currentList) => [
      ...currentList,
      {id: Math.random().toString(), value: textItem}
    ])
    setTextItem('');
  };

  const selectedItem = (id) => {
    setItemSelected(itemList.filter(item => item.id === id) [0])
    setModalVisible(true)
  }


  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => selectedItem(item.id)}>
      <Text style={{fontSize: 50}}>{item.value}</Text>
      </TouchableOpacity>
  );

  const deleteItem = () => {
    setItemList(currentState => currentState.filter(item => item.id !== itemSelected.id))
    setItemSelected({})
    setModalVisible(false)
  }

 
  return (
    <View style={styles.container}>

      <Text>Lista de articulos</Text>

      <View style={styles.flatList}>
        <FlatList 
        data={itemList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        />
      </View>

      <Modal isVisible={modalVisible} actionDeleteItem={deleteItem} />


      <View style={styles.addItem}>
        <TextInput 
        value={textItem}
        placeholder="Escribe el articulo"
        onChangeText={onHandleChangeItem}
        style={styles.input} />
          <Button title="Agregar" onPress={addItem} />
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#ECB5DC",
    alignItems: "center",
  },

  addItem: {
    margin: 30,
    padding: 30,
    justifyContent: "space-between",
    alignItems: "center", 
    width: 300,
    
  },

  input: {
    width: 200,
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "black",
    
  },


  flatList: {
    width: 300,
    height: 300,
    borderWidth: 1,
    alignItems: "center",
  },

 

  textStyle: {

  },

});
