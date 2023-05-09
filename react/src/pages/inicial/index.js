import React, { useState } from 'react';
import { 
  View, 
  TextInput,  
  StyleSheet, 
  Text, 
  TouchableOpacity,
  Image
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function Inicial() {
  function handleUsuario(){
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    //Fetch está requisitando da API um usuário e consumindo esses dados.

    //fetch("http://localhost:8080/usuario/find?id=1", requestOptions)
      //.then(response => response.text())
      //.then(result => {
        //console.log(result)
        //let resultado = JSON.parse(result)
        //setUsuario(resultado);
      //})
     // .catch(error => console.log('error', error));
  }
  var [usuario, setUsuario] = useState({"nome": "", "endereço": "", "cidade": "", "cep": ""})
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
          Tenha um controle maior do seu lixo e ajude o meio ambiente. Crie sua conta para saber mais
        </Text>
        <TouchableOpacity style={styles.button}
         onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Entre  <Icon name='log-in' size={20}/></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.buttonText}>Cadastre-se  <Icon name='ios-person-add-sharp' size={20}/></Text>
        </TouchableOpacity>

      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebdec6'
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
    fontSize: 15,
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