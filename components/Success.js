import React, { Component } from 'react';
import { View, Text, StyleSheet ,Image} from 'react-native'
import LottieView from 'lottie-react-native';
export default class Success extends React.Component {
    render() {
        return (
           <View style={styles.container}>
               <Text style={{fontSize:24, textAlign: 'center',backgroundColor:'#ffffff',marginTop:80,fontFamily:'OpenSans-Bold',color:'black'}}>
                   Congratulation ! 
               </Text>
               <LottieView style={{resizeMode:'contain',marginBottom:100}}
                    source={require('../assets/animations/tick.json')}
                    autoPlay
                    loop={true}
                    speed={0.25}
                />
               <View
               style={{ flex:1,resizeMode:'cover', marginTop:100,width:350,height:300}}
               >
                <LottieView
                    source={require('../assets/animations/Success1.json')}
                    autoPlay
                    loop={false}
                    speed={0.9}
                    onAnimationFinish={() => {
                        console.log('Animation Finished!')
                        this.props.navigation.replace('Login');
                    }}
                />
               </View>
           </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#ffffff',
        padding:20,
    }
})
