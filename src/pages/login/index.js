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

export default function Login() {
  const navigation = useNavigation();

  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  //const handleLogin = () => {
    // inserção de dados para o login do usuário.
    //console.log('E-mail:', email);
    //console.log('Senha:', senha);
  //};

  return(
    // início de exibição da tela de login
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500}>
        <Text style={styles.title}>Login</Text>
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
          //onPress={handleLogin}
          style={styles.button}
          onPress={() => navigation.navigate('Calendario')}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.link}>Não possui conta? Cadastre-se aqui.</Text>
        </TouchableOpacity>
      </Animatable.View>
      
    </View>
    // final de exibição da tela de login
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c9d467'
  },
  containerForm:{
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
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
    backgroundColor: '#4287f5',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRegister:{
    marginTop: 14,
    alignSelf: 'center'
  },
  buttonText:{
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    textDecorationLine:'underline',
    color: 'blue',
  }
});