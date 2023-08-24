import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import HomeScreen from '../component/HomeScreen';
import ChartScreen from '../component/ChartScreen';
import CameraScreen from '../component/CameraScreen';
import UserScreen from '../component/UserScreen';
import SettingScreen from '../component/SettingScreen';

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name = "Chart" component = {ChartScreen} />
            <Tab.Screen name = "Camera" component = {CameraScreen} />
            <Tab.Screen name = "Setting" component = {SettingScreen} />
            <Tab.Screen name = "User" component = {UserScreen} />
        </Tab.Navigator>
    )
}

export default Tabs;