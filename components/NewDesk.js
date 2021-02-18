import { StatusBar } from 'expo-status-bar';
import React, { useState ,useContext } from "react";
import { store } from "../redux/store";

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
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
export default function NewDesk() {
 
  
  const {state,  dispatch } = useContext(store);

const addnewdeskName=(values)=>{
    dispatch({
      type: "addDesk",
      payload:{
        nameDesk:values.deskName,
  }
    });
    alert(JSON.stringify(state.AllDesk[2]
      ) )

  }
  
  return (
// Set Custom Children inside thumb
<View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
<Text>New desk</Text>
<Formik
                initialValues={{ deskName: "" } }
                onSubmit={(values) =>addnewdeskName(values) }
              >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                  <View>
                    <TextInput
                      onChangeText={handleChange("deskName")}
                      onBlur={handleBlur("deskName")}
                      value={values.deskName}
                      style={{borderWidth:2}}
                    />
                        
     
     <Button onPress={handleSubmit} style={styles.wt100} title="add new desk" />
                  </View>
                )}
              </Formik>
         
    </View>
  );
}




const styles = StyleSheet.create({
 
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});