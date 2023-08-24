import React, { Component } from 'react';
import { View,Text } from 'react-native';
import LottieView from 'lottie-react-native';

export default class CameraSplashScreen extends Component {
    constructor(props) {
        super();
    }
    render() {
    return (
        <View style={{ flex: 1,backgroundColor: '#ffffff'}}>
                <LottieView
                    source={require('../assets/animations/camera1.json')}
                    style = {{flex:1,justifyContent:'center',alignItems:'center',bottom:100,right:10}}
                    autoPlay
                    loop={false}
                    speed={1.3}
                    onAnimationFinish={() => {
                        console.log('Animation Finished!')
                        this.props.navigation.replace('Camera');
                    }}
                />
                <Text style ={{fontSize:24,fontFamily:'OpenSans-Bold',alignItems:'center',textAlign:'center',top:400}}>
                    Make sure your camera is connected with our module
                </Text>
        </View>
    )
}
}
