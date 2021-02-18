import { StatusBar } from "expo-status-bar";
import React, { useState ,useContext, useEffect } from "react";
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';

import { store } from "../redux/store";

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
import { Card ,Badge } from 'react-native-elements'

import Slider from "@react-native-community/slider";
import { Formik } from "formik";

import { MaterialCommunityIcons } from "@expo/vector-icons";


export default function QaInQuiz({numOfQs , desk}) {
  const [modalVisible, setModalVisible] = useState(false);
  const {state,  dispatch } = useContext(store);

const [num ,setnum]=useState(0)
useEffect(()=>{
  setnum(numOfQs)
},)

  return (
    <View>
<Text>Quiz</Text>
<Badge value={`Question no : ${numOfQs}`} status="warning" />

<Text style={styles.name}>
            {/* {JSON.stringify(route.params.onedesk) } */}
           
            </Text>
<Card>
 
 
        <View  style={styles.user}>
        
     
            
            <Card.Title>{desk[numOfQs].qs}</Card.Title>
  <Card.Divider/>
            <Collapse>
    <CollapseHeader>
   
     
        <Text style={styles.openButton}>answer</Text>
    </CollapseHeader>
    <CollapseBody>
    <View style={{backgroundColor:"#75f679" , padding:30}}>
           <Text>  {desk[numOfQs].ans}</Text>

      </View> 
         </CollapseBody>
</Collapse>
        </View>
  
</Card>
  
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
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width:200,
    margin:10,
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
