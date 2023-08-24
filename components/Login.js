import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import colors from '../assets/colors/colors';
import {NavigationContainer} from '@react-navigation/native'
import LottieView from 'lottie-react-native';


export default class Login extends React.Component {

  
  render() {

    
    return (
    <View style={styles.container}>
      <LottieView style={{
                    flex: 1,
                    backgroundColor: '#ffffff',
                    resizeMode: "contain",
                    width:200,
                    height:150,
                }}
                    source={require('../assets/animations/hi.json')}
                    autoPlay
                    loop={true}
                    speed={0.7}

                />
        
        

      <Text style={{ fontSize: 40, fontWeight: 'bold' }} >Welcome</Text>
      <Text style={{ fontSize: 16, color: 'gray', textAlign: 'center', marginHorizontal: 30 }} >this app is a social media platform for artists - and it's all about visuals</Text>
      <View style={{ flexDirection: 'row', margin: 20, paddingVertical: 20 }}>

    
          <TouchableOpacity
          onPress={ () => this.props.navigation.navigate('Home') }
            style={{ backgroundColor: '#00BFFF', padding: 10, width:150, borderRadius: 30, marginHorizontal: 20 }}
          >
            <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 18 }}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={ () => this.props.navigation.navigate('SignUp') }
            style={{ backgroundColor: '#FFF', padding: 10, width:150, borderRadius: 30, marginHorizontal: 20, borderWidth: 1, borderColor: 'black' }}
          >
            <Text style={{ textAlign: 'center', color: '#B22222', fontSize: 18 }}>Sign Up</Text>
          </TouchableOpacity>
          
        </View>

        <Text style={{ fontSize: 16, marginTop: 10 }}>Or via social media</Text>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <View style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: '#3f51b5', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>f</Text>
          </View>
          <View style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: '#f44336', marginHorizontal: 10, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>G+</Text>
          </View>

        </View>
       
    </View>
    );
  };
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
  
