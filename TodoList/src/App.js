import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text, FlatList, SafeAreaView, TextInput, TouchableOpacity, } from 'react-native';
const image = { uri: "https://reactjs.org/logo-og.png" };


function App() {

  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);


  function addPress() {
    alert("Task Added!");
    setTasks([...tasks, text]);
    setText("");
  };

  return (
    <SafeAreaView style={styles.Container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.Header}>
          <Text style={styles.texthead}>ToDo App</Text>
        </View>
        <Text style={styles.headertext}>TaskHere!</Text>
        <View style={styles.containner}>
          <TextInput
            style={styles.İnput}
            placeholder={'Write a Task Here..'}
            onChangeText={setText}
          />
          <TouchableOpacity style={styles.button} onPress={addPress}>
            <Text style={styles.button_text}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tasklist}>
        <FlatList
          data={tasks}
          renderItem={({ item }) => <Text style={styles.tasktext}><Text style={{color:'lightblue'}}>o</Text> {item}</Text>}          
          keyExtractor={(item)=> item + Math.random()}
        />
        <View style={styles.spacer}>
        
        </View>
        </View>
      
      </ImageBackground>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  image: {
    flex: 1,
    
  },
  texthead: {
    color: 'lightblue',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
  headertext: {
    color: 'darkgrey',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 15,
    marginBottom: 5,
    marginTop: 30,
  },
  Header: {
    marginTop: 20,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  İnput: {
    backgroundColor: 'white',
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: 300,
    marginLeft: 10,
  },
  button_text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  containner: {
    flexDirection: 'row',
  },
  button: {
    width: 70,
    padding: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    marginRight: 10,
    backgroundColor: 'lightgreen',
  },
  tasklist: {
    margin: 15,
    marginTop: 30,
    borderRadius:10,
    padding:10,
    backgroundColor:'whitesmoke',
    
  },
  tasktext: {
    fontSize:20,
    fontWeight:'500',
    color:'black',
  },
  spacer:{
   marginTop:20,
  },
});

export default App;
