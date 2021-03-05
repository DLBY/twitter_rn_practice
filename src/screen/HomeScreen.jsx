import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import ProfileScreen from './ProfileScreen.jsx';


const HomeScreen = ({ navigation }) => {
  const s = require('../style/styles.js');

  return (
    <>
      <View style={s.container}>
        <Text style={s.fontStyle}>Hello i'm Home</Text>
        <Button title="Profile" onPress={() => navigation.navigate("Profile")} />
        <Button title="Register" onPress={() => navigation.navigate("Register")} />
        <Button title="Login" onPress={() => navigation.navigate("Login")} />
      </View>
    </>
  )
}

export default HomeScreen;
