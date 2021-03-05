import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import ProfileScreen from '../screen/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import RegisterScreen from '../screen/auth/RegisterScreen';
import LoginScreen from '../screen/auth/LoginScreen';

const HomeStackScreen = () => {
  const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person-circle' : 'ios-person-circle-outline';
            }
            else if (route.name === 'Login') {
              iconName = focused ? 'ios-enter' : 'ios-enter-outline';
            }
            else if (route.name === 'Register') {
              iconName = focused ? 'ios-person-add' : 'ios-person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          style: {
            backgroundColor: '#15202B',
        },
          activeTintColor: '#1DA1F2',
          inactiveTintColor: 'gray',
          showLabel: false,
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Register" component={RegisterScreen} />
        <Tab.Screen name="Login" component={LoginScreen} />
      </Tab.Navigator>
  )
}

export default HomeStackScreen
