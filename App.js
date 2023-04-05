import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

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

            <TouchableOpacity style={[styles.button, styles.greenButton]}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <Text style={styles.textLink1} onPress={() => setTela('cadastro')}>
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
          <TouchableOpacity style={[styles.button, styles.orangeButton]}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
          <Text style={styles.textLink2} onPress={() => setTela('login')}>
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
    backgroundColor: '#fff',
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#2e632f',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textLink1: {
    marginTop: 20,
    color: '#ff6600',
    textDecorationLine: 'underline',
  },
  textLink2: {
    marginTop: 20,
    color: '#00cc00',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#4287f5',
    borderColor: '#2e632f',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  greenButton: {
    backgroundColor: '#00cc00',
  },
  orangeButton: {
    backgroundColor: '#ff6600',
  },
});

export default CadastroLogin;
