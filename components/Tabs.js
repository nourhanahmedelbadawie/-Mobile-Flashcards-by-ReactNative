import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();


export default  TabNvigator=({navigator})=>{
    return(
    <Tab.Navigator>
          <Tab.Screen name="newdesk" component={NewDesk} />
          <Tab.Screen name="alldesk" component={AllDesk} navigator={navigator} />
        
          </Tab.Navigator>
    )
  }