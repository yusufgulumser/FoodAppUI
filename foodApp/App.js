import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodDetailsScreen from './screens/footDetails';


const Stack=createNativeStackNavigator();
export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='home' component={Home} options={{headerShown:false}}/>
        <Stack.Screen name='details' component={FoodDetailsScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}
