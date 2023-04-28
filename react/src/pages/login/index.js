import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function Login() {
  const navigation = useNavigation();

  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [login, setLogin] = useState(null);

  const handleLogin = () => {
    /*axios.post('http://localhost:8080/login/validate/', {
      cpf: cpf,
      senha: senha
    },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then(result => {
      setLogin(result.data);
      console.log(login);
    })
    .catch(error => console.log('error', error));*/

  //const handleLogin = () => {
    // inserção de dados para o login do usuário.
    //console.log('E-mail:', email);
    //console.log('Senha:', senha);
  //};

  const handleSubmit = () => {
    fetch('http://localhost:8080/login/validate/', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }
  const requestOptions = {
    method: 'POST',
    headers: { 
      'Access-Control-Allow-Origin': 'http://localhost:8080',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, GET, OPTIONS',
      'Access-Control-Request-Method': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Content-Type': 'multipart/form-data; charset=utf-8; boundary=---------------------------974767299852498929531610575'
     },
    body: JSON.stringify({ senha: senha, cpf: cpf })
  };


  // array de depedência vazia significa que irá rodar o useEffect apenas uma vez.

  return (
    // início de exibição da tela de login
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500}>
        <Text style={styles.title}>Faça seu login</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        {/* input de login */}
        <Text style={styles.formTitle}>CPF/RG</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite apenas números"
          keyboardType="numeric"
          value={cpf}
          onChangeText={setCpf}
        />

        {/* input de senha */}
        <Text style={styles.formTitle}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
          onPress={() => navigation.navigate('Perfil')}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.link}>Não possui conta? Cadastre-se aqui</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('EsqueciSenha')}>
          <Text style={styles.link}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </Animatable.View>

    </View>
    // final de exibição da tela de login
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebdec6'
  },
  containerForm: {
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
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    marginTop: 20
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginStart: '5%',
    marginTop: 58,
    marginBottom: 22,
    textAlign: 'left',
  },
  formTitle: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#85c250',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    textDecorationLine: 'underline',
    color: 'blue',
    marginTop: 20,
  }
});