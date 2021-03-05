import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const s = require('../style/styles');
  return (
    <View style={s.container}>
      <Text style={s.fontStyle}>Hello i'm Profile</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  )
}

export default ProfileScreen;
