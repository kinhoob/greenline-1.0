import React, { useState } from 'react';
import { 
  View, 
  TextInput,  
  StyleSheet, 
  Text, 
  TouchableOpacity,
} from 'react-native';
import Menu from '../menu';

export default function Perfil() {
  return(
    <View style={styles.container}>

      <Menu />
      <Text>Perfil</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c9d467'
  },
})