import * as React from 'react';
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


  export default class CameraScreen extends React.Component {

    render() {
      return (
          <View style={styles.container}>
              <Image
              style = {{resizeMode:'contain',width:380}} 
              source={require('../assets/images/test.png')}
              />
              <TouchableOpacity
                onPress={ () => this.props.navigation.navigate('Home Menu') }
                 style={{ backgroundColor: '#00BFFF', padding: 20, width:150, borderRadius: 30, marginHorizontal: 30 ,alignItems:'center'}}
                >
                <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 18 }}>Back</Text>
                </TouchableOpacity>
          </View>

      )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    }
  });
  