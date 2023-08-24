import React from 'react'
import { View,Text, StyleSheet ,Image,Button,Switch} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SettingScreen = ({navigation}) => {
    const [isSwitchEnable , setSwitch] = React.useState(false)
    const [isSwitchEnable1 , setSwitch1] = React.useState(false)
    return (
        <View style={styles.container}>
            <Image style = {{resizeMode:'contain',left:30,height:250,marginTop:-250}}
            source={require('../assets/images/setting.png')}/>
            <Text style ={{fontSize:24,textAlign:'center',justifyContent:'center',right:150,marginBottom:40,fontFamily:'OpenSans-Bold'}}>
                Setting
            </Text>
                        
        <View style ={styles.row}>
            <Icon name="bell" size={25} color="#CA8136" style={{right:125}} />
            <Text style ={{fontSize:15,lineHeight:20,fontFamily:'OpenSans-SemiBold',right:100}}>
            Notification
            </Text>
            <Switch style = {{left:40}}
            value={isSwitchEnable}
            onValueChange = {(value) => setSwitch (value)}
            />
        </View>


        <View style ={{flexDirection:'row',
            marginBottom:10,
            left:30,
            top:20}}>
            <Icon name="adjust" size={25} color="black" style={{right:125}} />
            <Text style ={{fontSize:15,lineHeight:20,fontFamily:'OpenSans-SemiBold',right:100}}>
            Dark Theme
            </Text>
            <Switch style = {{left:40}}
            value={isSwitchEnable1}
            onValueChange = {(value) => setSwitch1 (value)}
            />
        </View>

        </View>
    )
}

export default SettingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#ffffff',
        justifyContent: 'center',
        alignItems:'center',
        },
        row:{
            flexDirection:'row',
            marginBottom:10,
            left:30,
        },
})
