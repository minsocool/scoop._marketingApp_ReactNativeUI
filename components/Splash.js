import React, { Component } from 'react';
import { View,Text } from 'react-native';
import LottieView from 'lottie-react-native';

export default class Splash extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#ffffff'
                }}
            >
                <LottieView
                    source={require('../assets/animations/splash.json')}
                    autoPlay
                    loop={false}
                    speed={0.7}
                    onAnimationFinish={() => {
                        console.log('Animation Finished!')
                        this.props.navigation.replace('Introduce');
                    }}
                />
                
            </View>
        )
}
}