import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native'

export default function Menu() {

  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  return(
    <View>
      {/* modal do menu hamburguer */}
      <Modal transparent visible={modalVisible}>
        <View style={styles.containerModal}>
          <Animatable.View animation="fadeInLeft" style={styles.menu}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Icon name='close' size={50} color='#000' style={styles.close}/>
            </TouchableOpacity>
            <Text style={styles.texto}> <Icon name='person' size={20}/> Perfil</Text>
            <Text style={styles.texto}> <Icon name='calendar' size={20}/> Calendário</Text>
            <Text style={styles.textoSair} onPress={() => navigation.navigate('Login')}> <Icon name='log-out' size={20}/> Sair</Text>
          </Animatable.View>          
        </View>
      </Modal>

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Icon name='menu' size={50} color='#000'/>
      </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
  containerModal:{
    flex:1,
  },
  menu:{
    width:'50%',
    minHeight: '80%',
    maxHeight: '90%',
    backgroundColor: '#fff',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 25,
  },
  texto:{
    fontSize: 20,
    marginTop: 25,
  },
  textoSair:{
    fontSize: 20,
    position: 'absolute',
    bottom: 0,
    marginBottom: 35,
  },
  close:{
    marginLeft: '70%',
  }
})