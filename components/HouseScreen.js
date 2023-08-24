import React, { Component } from 'react';
import { View,Text } from 'react-native';
import LottieView from 'lottie-react-native';

export default class HouseScreen extends Component {
    constructor(props) {
        super();
    }
    render() {
    return (
        <View style={{ flex: 1,backgroundColor: '#B388FF'}}>
                <LottieView
                    source={require('../assets/animations/home.json')}
                    autoPlay
                    loop={true}
                    speed={1.5}
                    onAnimationFinish={() => {
                    }}
                />
                <Text style = {{fontSize:24,textAlign:'center',top:100,fontFamily:'OpenSans-SemiBold'}}>
                    WE WILL BE BACK SOON.
                </Text>
        </View>
    )
}
}
