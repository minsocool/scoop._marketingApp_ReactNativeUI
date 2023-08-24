import React ,{useState} from 'react';
import { View,Text, StyleSheet ,Image,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Pie from 'react-native-pie'
import {
    Title,
    Caption,
    TouchableRipple,
} from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Data = [
    {percentage : 55, color : '#247AFD'},
    {percentage : 35 , color : '#FE46A5'},
    {percentage : 10 , color : '#ffd95a'},
]


const ChartScreen = ({}) => {
 
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      console.warn("A date has been picked: ", date);
      hideDatePicker();
    };

    return (
        <View style = {styles.container}>
            <View style = {styles.pie}>
            <Pie 
                sections={Data}
                radius ={80}
                innerRadius={60}
            />
            <Text style = {{fontSize:20, fontFamily:'OpenSans-Bold', marginLeft:50}}>
                Pie Chart
            </Text>
            </View>
            <View style ={{bottom:250,left:70,flexDirection:'row'}}>
            <Icon name="square" size={20} color="#247AFD" />
            <Text style = {{fontSize:15,lineHeight:20,left:20}}>Male {Data[0].percentage}%</Text>
            </View>
            <View style ={{bottom:230,left:78,flexDirection:'row'}}>
            <Icon name="square" size={20} color="#FE46A5" />
            <Text style = {{fontSize:15,lineHeight:20,left:20}}>Female {Data[1].percentage}%</Text>
            </View>
            <View style ={{bottom:210,left:80,flexDirection:'row'}}>
            <Icon name="square" size={20} color="#ffd95a" />
            <Text style = {{fontSize:15,lineHeight:20,left:20}}>Children {Data[2].percentage}%</Text>
            </View>
            
            <View style = {styles.infoBoxWrapper}>
                <View style = {styles.infoBox}>
                    <Title> {Data[0].percentage} </Title>
                    <Caption>Male</Caption>
                </View>
                <View style = {styles.infoBox}>
                    <Title> {Data[1].percentage} </Title>
                    <Caption>Female</Caption>
                </View>
                <View style = {styles.infoBox}>
                    <Title> {Data[2].percentage} </Title>
                    <Caption>Children</Caption>
                </View>
            </View>
            <Image 
             source ={require('../assets/images/marketing.png')}
             style ={{resizeMode:'contain',height:300,width:250,marginBottom:-300,bottom:100,top:-150,right:70}}
            />
            <View style = {{top:-100,left:120,flexDirection:'row'}}>
            <Button title="DateTime" onPress={showDatePicker}/>
            <DateTimePickerModal
             isVisible={isDatePickerVisible}
             mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            />
            </View>
        </View>
    )
};

export default ChartScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'#ffffff',
        },
    pie :{
        bottom:140,
        width:150,
        right:100,
        flexDirection:'row',
    },
    infoBoxWrapper:{
        borderBottomColor:'#dddddd',
        borderBottomWidth:1,
        borderTopColor:'#dddddd',
        borderTopWidth:1,
        flexDirection:'row',
        height:100,
        bottom:130
    },
    infoBox:{
        width:'35%',
        alignItems:'center',
        justifyContent:'center',
    },

})