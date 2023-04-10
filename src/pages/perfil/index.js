import React, { useState } from 'react';
import { 
  View, 
  TextInput,  
  StyleSheet, 
  Text, 
  TouchableOpacity,
  ScrollView
} from 'react-native';

import Menu from '../menu';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

export default function Perfil() {
  return(
    <ScrollView style={styles.container}>

      <Menu />
      <View style={styles.user}>
        <Icon name='person' size={70} color={'#fff'}/>
      </View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <View>
          <Text style={styles.title}>Nome</Text>
          <View style={styles.infos}>
            <Text style={styles.infosText}>Fulano de tal</Text>
          </View>

          <Text style={styles.title}>Endereço</Text>
          <View style={styles.infos}>
            <Text style={styles.infosText}>Rua Tal, 123</Text>
          </View >

          <Text style={styles.title}>Cidade</Text>
          <View style={styles.infos}>
            <Text style={styles.infosText}>Recife</Text>
          </View>

          <Text style={styles.title}>CEP</Text>
          <View style={styles.infos}>
            <Text style={styles.infosText}>12345678</Text>
          </View>
        </View>
      </Animatable.View>  

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  user:{
    alignItems: 'center',
    marginVertical: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#c9d467'
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
  infos:{
    borderWidth: 1,
    borderRadius: 15,
    padding: 5,
  },
  infosText:{
    marginStart: '5%'
  }, 
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 58,
    marginBottom: 15,
    textAlign: 'left',
  },
})