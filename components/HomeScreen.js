import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    TouchableOpacity,
    Image
  } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


                // import screen
import HouseScreen from '../components/HouseScreen';
import ChartScreen from '../components/ChartScreen';
import CameraSplashScreen from './CameraSplashScreen';
import UserScreen from '../components/UserScreen';
import SettingScreen from '../components/SettingScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({onPress}) => (
    
    <TouchableOpacity
    
        style = {{
            top: -20,
            justifyContent:'center',
            alignItems: 'center',
            ...style.shadow
        }}
        onPress = {onPress}
    >
            <View style ={{
                width: 70,
                height: 70,
                borderRadius: 35,
                backgroundColor:'#e32f45'
            }}>
            <Image
                source={require('../assets/icons/eyee.jpg')}
                resizeMode= "center"
                style = {{width:'100%', height:'100%',borderRadius:100}}
            />
            </View>
    </TouchableOpacity>
    );


const HomeScreen = () => {
    return (
    <Tab.Navigator
    tabBarOptions={{
        showlabel:false,
        style:{
            position:'absolute',
            elevation : 0,
            backgroundColor:"white",
            height:80,
            ...style.shadow
        }
    }}
    >
        <Tab.Screen 
        name = "House" 
        component = {HouseScreen}
        options={{
            tabBarIcon: ({focused}) => (
                <View style = {{alignItems:'center', justifyContent: 'center', top : 15}}>
                      <Image style = {{width: 40, height: 40}}source={require('../assets/icons/homee.png')}/>
                    <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize:12}}>
                    </Text>
                </View>
            ),

        }}
        
        />
        <Tab.Screen 
        name = "Chart" 
        component = {ChartScreen} 
        options={{
            tabBarIcon: ({focused}) => (
                <View style = {{alignItems:'center', justifyContent: 'center', top : 3}}>
                      <Image style = {{width: 40, height: 40}}source={require('../assets/icons/chart.png')}/>
                </View>
            ),

        }}
        />

        <Tab.Screen 
        name = "Camera" 
        component = {CameraSplashScreen}
        options={{
            tabBarIcon: ({focused}) => (
                <View style = {{alignItems:'center', justifyContent: 'center', top : 10}}>
                </View>
            ),
            tabBarButton: (props) => (
                <CustomTabBarButton {...props}/>
            )
        }} 
        
        />
        <Tab.Screen 
        name = "Setting" 
        component = {SettingScreen} 
        options={{
            tabBarIcon: ({focused}) => (
                <View style = {{alignItems:'center', justifyContent: 'center', top :2}}>
                    <Image style = {{width: 40, height: 40}}source={require('../assets/icons/setting.png')}/>
                </View>
            ),

        }}
        />
        <Tab.Screen 
        name = "User" 
        component = {UserScreen} 
        options={{
            tabBarIcon: ({focused}) => (
                <View style = {{alignItems:'center', justifyContent: 'center', top : 5}}>
                     {/* <Icon name="user" size={30} color="#900" /> */}
                     <Image style = {{width: 40, height: 40}}source={require('../assets/icons/avatar.png')}/>
                     
                </View>
            ),

        }}
        />
     </Tab.Navigator>
    )
}



const style = StyleSheet.create({
    shadow: {
         shadowColor: '#7F5DF0',
         shadowOffset: {
            width : 0 ,
            height :10,
         },
         shadowOpacity:0.25,
         shadowRadius:3.5,
         elevation:5
    }
});

export default HomeScreen;