import Home from './src/screens/home';
import About from './src/screens/about';
import SignUp from './src/screens/signup';
import Search from './src/screens/search';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();


export default function App() {
    return ( 
        <NavigationContainer>
            <Tab.Navigator
                    screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-home'
                            : 'ios-home-outline';
                        } else if (route.name === 'About') {
                        iconName = focused ? 'ios-book' : 'ios-book-outline';

                        } else if (route.name === 'SignUp') {
                        iconName = focused ? 'ios-person-add' : 'ios-person-add-outline';
                        

                        } else if (route.name === 'Search') {
                        iconName = focused ? 'ios-search' : 'ios-search-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    })}
                    tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                    }}
                >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="About" component={About} />
            <Tab.Screen name="SignUp" component={SignUp} />
            <Tab.Screen name="Search" component={Search} />
            </Tab.Navigator>
            </NavigationContainer>
);
}

