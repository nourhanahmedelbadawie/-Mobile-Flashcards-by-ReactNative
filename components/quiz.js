import { StatusBar } from "expo-status-bar";
import React, { useState ,useContext } from "react";
import { store } from "../redux/store";
import QaInQuiz from "./QsIn_quiz"
import { Text  as Text1 ,Divider} from 'react-native-elements';


import {
  Button,
  StyleSheet,
  Text,
  View,
  Alert,
  Modal,
  TouchableHighlight,
  TextInput ,
  
} from "react-native";
import { Card } from 'react-native-elements'

import Slider from "@react-native-community/slider";
import { Formik } from "formik";

import { MaterialCommunityIcons } from "@expo/vector-icons";


export default function Quiz({ navigation, route }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [i ,seti]=useState(0)
  const [score,setscore]=useState(0)
  const {state,  dispatch } = useContext(store);
let qs=route.params.onedesk.qsInDeck
function nextQs(){
  seti(i+1)
}

// const renderQs=({item})=>{
//   return (
//       <View>
//           {/* <Card> */}
// {/* <Card.Title>CARD WITH DIVIDER</Card.Title> */}
// {/* <Card.Divider/> */}

//       <View  style={styles.user}>
//         <Text>Question</Text>
      
//         <Text style={styles.name}>{JSON.stringify(item) }</Text>


//       </View>

// {/* </Card> */}
// <Button
//     title={`Desk ${item.nameDesk}`}
//     onPress={() =>seti(i++)
      
//     }
//     />
// </View>
//   )
// }


  return (
    <View>
<Text1>Quiz start</Text1>
<View>
{
   ( i<qs.length  ) ?
   
    
    <View >
      <QaInQuiz numOfQs={i} nextQs={nextQs} desk={qs} />
      <View style={{alignItems:"center"}}>
      <View style={{ flexDirection: 'row',
    justifyContent: 'space-between',width:200,marginHorizontal: 16 ,alignItems:"center"}}>
      <Button title="correct" color="green" onPress={()=>setscore(score+1)}/>

      <Button title="false" color="red"/>
      </View>
      
      </View>
   
      <Divider style={{marginBottom:10}}/>


      <Button title="next" onPress={()=>nextQs()}/>
    </View>

:
<View>
  <Text>No questions</Text>
  {
    score ?
    <Text>score {Math.round((score/qs.length)*100)}%</Text>
:
<Text></Text>
  }
    </View>
}
</View>
</View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  wt100:{
    width:"100%"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
