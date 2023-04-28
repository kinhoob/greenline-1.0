import React, { useState } from 'react';
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

    fetch('http://localhost:8080/login/validate/', { // URL
        body: JSON.stringify({
          cpf: cpf,
          senha: senha
        }), // data you send.
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, cors, *same-origin
        redirect: 'follow', // *manual, follow, error
        referrer: 'no-referrer', // *client, no-referrer
    })
    .then(function(response) {
        // manipulate response object
        // check status @ response.status etc.
        console.log(response); // parses json
    })
    .then(function(myJson) {
        // use parseed result
        console.log(myJson);
    });
  }

  return(
    // início de exibição da tela de login
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500}>
        <Text style={styles.title}>Faça seu Login</Text>
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
          //onPress={() => navigation.navigate('Perfil')}
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
  }
});