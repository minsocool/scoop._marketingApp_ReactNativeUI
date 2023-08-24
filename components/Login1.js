import * as React from 'react'
import { View, Text, StyleSheet ,Image} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';

export default class Login1 extends React.Component {

    constructor(props){
        super(props)
        this.validateInput = React.createRef()
    }

    state = {
        username: "",
        password: "",
        errMsg: ""
    }
    onLogin = () => {
        if(this.state.username == 'feelingbad' && this.state.password == '12345'){
            this.props.navigation.navigate('Home Menu')
        }else{
            this.validateInput.current.shake(800)
            this.setState({errMsg: 'Invalid login details. Try again!'})
        }
    }
    render() {
        return(

            <View style={ styles.container}>
                <Text style={{ fontSize: 25, textAlign: 'center',fontFamily:"OpenSans-Regular" }}>Ghost</Text>
                <View style ={{
                    height:130,
                    width:350,
                    resizeMode:'contain',
                    justifyContent:'center',
                    }}>
             <LottieView
                source={require('../assets/animations/logo.json')}
                autoPlay
                loop={true}
                speed={0.3}

            />
            </View>
                
                <Text style={{ fontSize: 25, marginTop: 5 , textAlign: 'center',fontFamily:"OpenSans-Bold" }}>Welcome Shopper</Text>
                <Animatable.View
                    ref={this.validateInput}
                >
                <TextInput
                    style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20  }}
                    placeholder="Username"
                    onChangeText = {(text) => 
                        {
                            this.setState({errMsg: ''}),
                            this.setState({ username: text })
                        }
                    }
                />

                <TextInput
                    style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20 }}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText = {(text) => 
                        {
                            this.setState({errMsg: ''}),
                            this.setState({ password: text })}
                        }

                />
                <Text style={{ color: 'red', textAlign: 'center', marginTop: 10 }}>{this.state.errMsg}</Text>
                
                </Animatable.View>

                

                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                    <TouchableOpacity
                        onPress={() => this.onLogin()}
                        style={{ width: 200, backgroundColor: '#0d47a1', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 30 }}
                    >
                        <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 16 }}>Login Now</Text>
                    </TouchableOpacity>

                    <Text style={{ marginTop: 10 }}>Forgot Password ?</Text>

                    <View style={{ flexDirection: 'row', marginTop: 40 }}>
                        <View style={{ height: 40, width: 40, borderRadius: 40/2, backgroundColor: '#3f51b5', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>f</Text>
                        </View>
                        <View style={{ height: 40, width: 40, borderRadius: 40/2, backgroundColor: '#f44336', marginHorizontal: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>G</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row',marginTop: 40 }}>
                    <Text style={{ color: 'gray' }}>Don't have an account?</Text>
                    <Text style={{ fontWeight: 'bold' }}> Sign Up</Text>
                    </View>
                </View>
            
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 20
    }
})