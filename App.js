import * as React from 'react';
import { Text, View, StyleSheet ,TextInput ,TouchableHighlight ,Button } from 'react-native';
import Constants from 'expo-constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllDesk from "./components/AllDesk"
import NewDesk from "./components/NewDesk"
import oneDesk from "./components/oneDesk"
import Quiz from "./components/quiz"
import { StateProvider } from './redux/store.js';
import { Header  } from 'react-native-elements';

// You can import from local files

// or any pure javascript modules available in npm
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  return (
      <Tab.Navigator>
        <Tab.Screen name="AllDesk" component={AllDesk} navigation={navigation}  />
        <Tab.Screen name="NewDesk" component={NewDesk} />
      </Tab.Navigator>
  
  );
};
// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }
// function SettingsScreen2({navigation}) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// <Button
//       title="Go to Jane's profile"
//       onPress={() =>
//         navigation.navigate('Profile', { name: 'Jane' })
//       }
//     />  
//       </View>
//   );
// }




export default function App() {
  return (
    <StateProvider>
      <Header
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'Flash card', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="oneDesk" component={oneDesk} />
        <Stack.Screen name="quiz" component={Quiz} />

      </Stack.Navigator>
    </NavigationContainer>
     </StateProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: 'yellow',
    padding: "10px",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
    buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white'
  } , button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
});
