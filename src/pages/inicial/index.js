import React, { useState } from 'react';
import { 
  View, 
  TextInput,  
  StyleSheet, 
  Text, 
  TouchableOpacity,
  Image
} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';

export default function Inicial() {
  const navigation = useNavigation();
  return(
    <View style={styles.container}>

      <Animatable.View animation="fadeInLeft" delay={500} style={styles.logoContainer}>
        <Image
          style={styles.logo} 
          source={require('../../assets/logo-app.png')}
        />
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>

        <Text style={styles.title}>
          Tenha um controle maoir do seu lixo e ajude o meio ambiente. Crie sua conta para saber mais
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Entre</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.buttonText}>Cadastre-se</Text>
        </TouchableOpacity>

      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c9d467'
  },
  logo:{
    width: 150,
    height: 160,
  },
  logoContainer:{
    alignItems: 'center',
    margin: 25,
  },
  containerForm:{
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    paddingStart: '10%',
    paddingEnd: '10%',
    marginStart: '5%',
    marginEnd: '5%',
    paddingBottom: '15%',
  },
  button: {
    backgroundColor: '#85c250',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginStart: '5%',
    marginTop: 58,
    marginBottom: 22,
    textAlign: 'center',
  },
})