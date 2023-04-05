import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // inserção de dados para o login do usuário.
    console.log('E-mail:', email);
    console.log('Senha:', senha);
  };

  return(
    // início de exibição da tela de login
    <View style={styles.container}>
          <Text style={styles.title}>Login</Text>

          {/* input de login */}
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          {/* input de senha */}
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
            value={senha}
            onChangeText={setSenha}
          />

          <Button title="Entrar" onPress={handleLogin}/>

          <Text style={styles.textLink} onPress={() => setTela('cadastro')}>
            Ainda não tem uma conta? Cadastre-se aqui.
          </Text>
    </View>
    // final de exibição da tela de login
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textLink: {
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#4287f5',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});