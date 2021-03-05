import React from 'react';
import { Text, View, SafeAreaView, StyleSheet} from 'react-native';

const Button = () => {
  const s = require('../style/styles');
  return (
    <SafeAreaView>
      <View style={styles.button}>
        <Text style={s.fontStyle}>Button</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue'
  }
})

export default Button
