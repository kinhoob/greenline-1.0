import React, { useState } from 'react';
import {  
  TextInput, 
  StyleSheet, 
  Text, 
  TouchableOpacity,
  ScrollView 
} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Cadastro() {
  
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setCpf] = useState('');

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
          placeholder="nome da rua"
        />

        {/* número da rua */}
        <TextInput
          style={styles.input}
          placeholder="Número"
          keyboardType="numeric"
        />

        {/* cep */}
        <TextInput
          style={styles.input}
          placeholder="CEP"
          keyboardType="numeric"
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
          onPress={() => navigation.navigate('Login')}
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
    alignItems: 'center'
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