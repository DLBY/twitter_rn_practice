import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button';
import HomeScreen from './src/screen/HomeScreen';
import ProfileScreen from './src/screen/ProfileScreen';
import HomeStackScreen from './src/components/HomeStackScreen';
import RegisterScreen from './src/screen/auth/RegisterScreen';
import LoginScreen from './src/screen/auth/LoginScreen';
import Budgie from './assets/Budgie.svg';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#15202B',
              borderColor: "#FFFFFF",
            },
            headerTintColor: 'white',
          }}>
          <Stack.Screen 
            name="Home" 
            component={HomeStackScreen} 
            options={{headerTitle: false,
            
            }}
            />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

