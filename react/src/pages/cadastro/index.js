import React, { useState } from 'react';
import {  
  TextInput, 
  StyleSheet, 
  Text, 
  TouchableOpacity,
  ScrollView 
} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function Cadastro() {

  function handleCadastro(){
    axios.post('http://localhost:8080/usuario/store/', {
      nome: nome,
      cpf: cpf,
      email: email,
      endereco: endereco,
      numero: numero,
      cidade: cidade,
      cep: cep,
      senha: senha
    },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then(result => {
        let respostaFormatada = JSON.parse(result.request.response);
        console.log(respostaFormatada);
      })
      .catch(error => console.log('error', JSON.parse(error)));
  }
  
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');

  //const handleCadastro = () => {
    // inserção de dados para fazer o cadastro de novo usuário.
    //console.log('Nome:', nome);
    //console.log('E-mail:', email);
    //console.log('Senha:', senha);
    //console.log('CPF/RG:', cpf);
  //};

  return(
    <ScrollView style={styles.container}>

      <Animatable.View animation="fadeInLeft" delay={500}>
       <Text style={styles.title}>Crie sua conta</Text>
      </Animatable.View>
   
      {/* formulário */}
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>

        <Text style={styles.formTitle}>Dados pessoais</Text>  
        {/* input de nome */}
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome completo "
          value={nome}
          onChangeText={setNome}
        />

        {/* input de email */}
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        {/* input de CPF/RG */}
        <TextInput
          style={styles.input}
          placeholder="CPF/RG (somente números)"
          keyboardType="numeric"
          value={cpf}
          onChangeText={setCpf}
        />

        <Text style={styles.formTitle}>Endereço</Text>
        {/* nome da rua */}
        <TextInput
          style={styles.input}
          placeholder="Nome da rua"
          onChangeText={setEndereco}
        />

        {/* número da rua */}
        <TextInput
          style={styles.input}
          placeholder="Número"
          keyboardType="numeric"
          onChangeText={setNumero}
        />

        {/* cidade */}
        <TextInput
          style={styles.input}
          placeholder="Cidade"
          onChangeText={setCidade}
        />

        {/* cep */}
        <TextInput
          style={styles.input}
          placeholder="CEP"
          keyboardType="numeric"
          onChangeText={setCep}
        />

        <Text style={styles.formTitle}>Senha</Text>
        {/* input de senha */}
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />

        {/* input de repitir senha */}
        <TextInput
          style={styles.input}
          placeholder="Repita sua senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity 
          //onPress={handleCadastro}
          style={styles.button}
          onPress={handleCadastro}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.buttonRegister} 
          onPress={
            () => navigation.navigate('Login')
          }
        >
          <Text style={styles.link}>Já tem uma conta? Faça login aqui.</Text> 
        </TouchableOpacity>
      </Animatable.View>
      
    </ScrollView>
      
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
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
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
    alignItems: 'center'
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