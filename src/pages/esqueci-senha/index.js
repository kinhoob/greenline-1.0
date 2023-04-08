import React, { useState } from 'react';
import {  
  TextInput, 
  StyleSheet, 
  Text,
  View, 
  TouchableOpacity,
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function EsqueciSenha() {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500}>
       <Text style={styles.title}>Digite o e-mail cadastrado</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <TextInput
            style={styles.input}
            placeholder="Digite o email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Recuperar</Text>
        </TouchableOpacity>

        <Text style={styles.text}>
          Enviaremos para você um link onde você poderá criar uma nova senha
        </Text>

        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.link}>Não possui conta? Cadastre-se aqui</Text>
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
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    marginTop: 20
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
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 15,
  },
  button: {
    backgroundColor: '#85c250',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRegister:{
    marginTop: 14,
    alignSelf: 'center',
    alignItems: 'center',
  },
  buttonText:{
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    textDecorationLine:'underline',
    color: 'blue',
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginStart: '5%',
    marginEnd: '5%',
    marginTop: 58,
    marginBottom: 22,
    textAlign: 'left',
  },
})
