/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TextInput,
  View,
  Button
} from 'react-native';

const App = () => {

  const [newTask,setNewTask] = useState('')
  const [allTasks,setAllTasks] = useState([])


  const handleUptadeInput = (e)=>{
    setNewTask(e)
  }

  const handleSaveTask = ()=> {
    setAllTasks(prevArr=>[...prevArr,newTask])
  }

  const handleDeleteTask = (taskDeleted)=> {
    setAllTasks(allTasks.filter(item => item !== taskDeleted))
  }

  return (
    <View>
      <View>
        <Text style={{
          color:'blue',
          fontSize: 32,
          textAlign:'center'
        }}>Simple Todo With React Native</Text>
        <TextInput 
        placeholder='digite sua tarefas aqui'
        onChangeText={handleUptadeInput}
        />
        <Button title='Adicionar tarefa' onPress={handleSaveTask}/>
      </View>
      <View>
        {allTasks.map((value,key)=>{return <View key={key} style={{display:'flex'}}><Text style={{fontSize:20}} key={key}>{value}</Text><Button title='X' onPress={()=>handleDeleteTask(value)} /></View>})}
      </View>
    </View>
  );
};


export default App;
