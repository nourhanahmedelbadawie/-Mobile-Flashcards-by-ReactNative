import { StatusBar } from "expo-status-bar";
import React, { useState ,useContext } from "react";
import { store } from "../redux/store";
import { Text  as Text1 ,Divider} from 'react-native-elements';

import {
  Button,
  StyleSheet,
  Text,
  View,
  Alert,
  Modal,
  TouchableHighlight,
  TextInput
} from "react-native";
import Slider from "@react-native-community/slider";
import { Formik } from "formik";

import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function OneDesk({ navigation, route }) {
  const [modalVisible, setModalVisible] = useState(false);
  const {state,  dispatch } = useContext(store);

const addnewQs=(values)=>{
    setModalVisible(!modalVisible)
    dispatch({
      type: "addQs",
      payload:{
      id:route.params.onedesk.IdDesk,
      qs:values.qs,
      ans:values.ans}
    });
    alert(JSON.stringify(state
      ) )
      
     




  }
const deleteqs= async()=>{
 await dispatch({
    type: "delete",
    payload:{
    id:route.params.onedesk.IdDesk
  }
  });



       await   navigation.navigate('Home')
}
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text1 h3 style={{ marginBottom:9}}>  No of Cards {route.params.onedesk.qsInDeck.length}</Text1>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>New question </Text>
            <Formik
                initialValues={{ qs: "" ,ans:""}}
                onSubmit={(values) =>addnewQs(values) }
              >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                  <View>
                    <TextInput
                      onChangeText={handleChange("qs")}
                      onBlur={handleBlur("qs")}
                      value={values.qs}
                      style={{borderWidth:2}}
                    />
                        <TextInput
                      onChangeText={handleChange("ans")}
                      onBlur={handleBlur("ans")}
                      value={values.ans}
                      style={{borderWidth:2}}
                    />
         
     
     <Button onPress={handleSubmit} style={styles.wt100} title="Submit" />
                  </View>
                )}
              </Formik>
           
          </View>
        </View>
      </Modal>
      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>add question</Text>
      </TouchableHighlight>
      <Divider style={{marginBottom:10}}/>

      <Button style={{margin:10 , width:200}}
      title="start quiz"
      onPress={() =>
        navigation.navigate('quiz', { onedesk: route.params.onedesk })
      }
    /> 
      <Divider style={{marginBottom:10}}/>
    <Button 
 title="delete" onPress={()=>deleteqs()} style={{ margin: 30 ,widt:200}} color="red" />

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
    width:200,
    margin:10,
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
