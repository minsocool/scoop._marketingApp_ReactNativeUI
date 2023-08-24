import * as React from 'react';
import { View, StyleSheet } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//    import screen
import Splash from './components/Splash';
import Onboarding from './components/Onboarding';
import Login from './components/Login';
import Login1 from './components/Login1';
import Signup from './components/Signup';
import Success from './components/Success';
import {useState} from 'react';
import HomeScreen from './components/HomeScreen';
import CameraScreen from './components/CameraScreen';


const Stack = createStackNavigator();
/*
const Stack = createStackNavigator();
const App = () => {
  const [showOnboard, setShowOnboard] = useState(true);
  const handleOnboardFinish = () => {
    setShowOnboard(false);
  };

  return (
    <>
      {showOnboard && <Onboarding handleDone={handleOnboardFinish} />}
      {!showOnboard && <Login />}
      <View style= {styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Login} />
            <Stack.Screen name="Login" component={Login1} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
};
export default App;
*/


const App = () => {
    return(
      
      <View style= {styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
           <Stack.Screen name="Splash" component={Splash}/>
            <Stack.Screen name="Introduce" component={Onboarding}/>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Login1}/>
            <Stack.Screen name="Home Menu" component={HomeScreen}/>
            <Stack.Screen name="SignUp" component={Signup}/>
            <Stack.Screen name="Success" component={Success}/>
            <Stack.Screen name="Camera" component = {CameraScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </View>

    );
  };
export default App;


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FFF'
  }
});
