import * as React from 'react'
import { View, Text, StyleSheet ,Image} from 'react-native'
import { TextInput, TouchableOpacity,PhoneInput } from 'react-native-gesture-handler'

export default class Signup extends React.Component {


    constructor(props){
        super(props)
        this.validateInput = React.createRef()
    }

    state = {
        username: "",
        password: "",
        errMsg: "",
        phone: ""
    }
    render() {
        return (
          <View style={styles.container}>
                <Text style={{ fontSize: 40, marginTop: 10 , textAlign: 'center',fontFamily: 'OpenSans-Bold' }}>Sign Up </Text>
                
                <Text style={{fontSize:15, textAlign: 'center',fontFamily: 'OpenSans-SemiBold'}}>
                    Create Your Account by filling up the form
                </Text>
                <TextInput
                    style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20  }}
                    placeholder="Username"
                    onChangeText = {(text) => 
                        {
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
                            this.setState({ password: text })}
                        }                        
                />
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 40 }}>
                <TouchableOpacity
                        onPress={ () => this.props.navigation.navigate('Success') }
                        style={{ width: 200, backgroundColor: '#0d47a1', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 20 }}
                    >
                        <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 16 }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

                
                <Image 
                style={{ width:'100%', height: 250 , marginVertical:10,resizeMode:'contain'}}
                source={require('../assets/images/signUp.png')}
                resizeMode="center"
                />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 20
    }
})