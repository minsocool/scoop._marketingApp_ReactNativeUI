import React from 'react';
import { View,SafeAreaView,StyleSheet ,Image,Button} from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome';

const UserScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style= {{flexDirection:'row',marginTop:350}}>
                    <Avatar.Image
                    source ={require('../assets/avatar/avatar1.jpg')}
                    style ={{left:-15}}
                    />
                    <View style={{marginLeft:10}}>
                        <Title style={[styles.title,{
                            marginTop:7.5,
                            marginBottom:5,
                        }]}>Hoang Minh</Title>
                        <Caption style ={styles.caption}> @iamminh</Caption>
                    </View>
                </View>
            </View>   
            <View style ={{paddingHorizontal:40 ,marginTop:25,width:'100%'}}>
                <View style={styles.row}>
                    <Icon name="globe" size={20} color="#777777" />
                    <Text style ={{marginLeft:15,color:"#102027"}}>HaNoi</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="phone" size={20} color="#777777" />
                    <Text style ={{marginLeft:15,color:"#102027"}}>+84 903991835</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="envelope" size={15} color="#777777" />
                    <Text style ={{marginLeft:15,color:"#102027"}}>nguyenhoangminhpho0711@gmail.com</Text>
                </View>
            </View>

            <View style = {styles.menuWrapper}>
                <TouchableRipple onPress = { () => {}}>
                    <View style = {styles.menuItem}>
                        <Icon name="heart" size={20} color="#004ecb" />
                        <Text style = {{left:20}}>Your Favorite</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress = { () => {}}>
                    <View style = {styles.menuItem}>
                        <Icon name="area-chart" size={20} color="#004ecb" />
                        <Text style = {{left:20}}>Diagram Chart</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress = { () => {}}>
                    <View style = {styles.menuItem}>
                        <Icon name="group" size={20} color="#004ecb" />
                        <Text style = {{left:20}}>Support</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress = { () => {}}>
                    <View style = {styles.menuItem}>
                        <Icon name="cog" size={20} color="#004ecb" />
                        <Text style = {{left:20}}>Setting</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress = { () => {}}>
                    <View style = {styles.menuItem}>
                        <Icon name="sign-out" size={20} color="#004ecb" />
                        <Text style = {{left:20}}>Log out</Text>
                    </View>
                </TouchableRipple>
                
            </View>
        </SafeAreaView>
    )
}

export default UserScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:"#fff",
        },
    userInfoSection : {
        paddingHorizontal:30,
        marginTop:-450,
        width: '100%',
    },
    title: {
        fontSize:24,
        fontWeight:'bold',
    },
    caption:{
        fontSize:14,
        lineHeight:14,
        fontWeight:'500',
    },
    row:{
        flexDirection:'row',
        marginBottom:10,
        right:10,
    },
    infoBoxWrapper:{
        borderBottomColor:'#dddddd',
        borderBottomWidth:1,
        borderTopColor:'#dddddd',
        borderTopWidth:1,
        flexDirection:'row',
        height:100,
    },
    infoBox:{
        width:'50%',
        alignItems:'center',
        justifyContent:'center',
    },
    menuWrapper:{
        marginTop:10,
    },
    menuItem:{
        flexDirection:'row',
        paddingVertical:25,
        paddingHorizontal:30,
        right:120,
    },
    menuItemText:{
        color:'#777777',
        marginLeft:20,
        fontWeight:'600',
        fontSize:16,
        lineHeight:26
    },
});
