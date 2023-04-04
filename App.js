import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';

const CadastroLogin = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tela, setTela] = useState('login'); // controla qual tela está sendo exibida

  const handleCadastro = () => {
    // inserção de dados para fazer o cadastro de novo usuário.
    console.log('Nome:', nome);
    console.log('E-mail:', email);
    console.log('Senha:', senha);
  };

  const handleLogin = () => {
    // inserção de dados para o login do usuário.
    console.log('E-mail:', email);
    console.log('Senha:', senha);
  };

  return (
    <View style={styles.container}>
      {tela === 'login' ? (
        <>
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
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
        </>
      ) : (
        <>
          <Text style={styles.title}>Cadastro</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
          />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
            value={senha}
            onChangeText={setSenha}
          />
          <Button title="Cadastrar" onPress={handleCadastro} />
          <Text style={styles.textLink} onPress={() => setTela('login')}>
            Já tem uma conta? Faça login aqui.
          </Text>
        </>
      )}
    </View>
  );
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


export default CadastroLogin;
