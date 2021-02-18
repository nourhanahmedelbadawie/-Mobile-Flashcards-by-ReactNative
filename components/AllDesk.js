import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext } from "react";
import { store } from "../redux/store";
import { Divider ,Tile  } from 'react-native-elements';


import {  Button, StyleSheet, Text, View ,ScrollView ,FlatList ,TouchableHighlight} from 'react-native';
import Slider from '@react-native-community/slider';
import { createStackNavigator } from 'react-navigation-stack';

import { MaterialCommunityIcons } from '@expo/vector-icons'; 


export default function AllDesk({ navigation }) {
  const {state,  dispatch } = useContext(store);

const add=()=>{
  // dispatch({
  //   type: "add",
  //   payload: 1,
  // });
}
const renderDeskItem =(item)=>{
  return (
    <View>





    
    <TouchableHighlight style={styles.desk }
  underlayColor="#DDDDDD"
  onPress={() =>  navigation.navigate('oneDesk', { onedesk: item })}
  >
<Text>{`Desk ${item.nameDesk} no of cards ${item.qsInDeck.length} `}</Text>

  </TouchableHighlight>
  <Divider style={{ backgroundColor: 'blue' }} />

    </View>
  )
}
let i =0
  return (
// Set Custom Children inside thumb
<View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
<View>

<Tile
  title="All desks"
  featured
  caption="welcome to our app"
  style={{ marginBottom:"10px" }}
/>
<FlatList
        data={state.AllDesk}
        renderItem={({item}) => renderDeskItem(item)}
      />


</View>
 


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
  desk: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
      marginBottom:10
    },
});