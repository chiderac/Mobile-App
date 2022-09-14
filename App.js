import Home from './src/screens/home';
import SignOut from './src/screens/SignOut';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const stack = createNativeStackNavigator();


export default function App() {
    return ( 
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="SignOut" component={SignOut} />
        <SignOut></SignOut>
        </Tab.Navigator></NavigationContainer>
    );
}
