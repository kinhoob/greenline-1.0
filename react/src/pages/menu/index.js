import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal, Entypo } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'

export default function Ajuda() {

  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  function chamada(tela){
    navigation.navigate(tela)
    setModalVisible(false)
  }

  return(
    <View>
      {/* modal do menu hamburguer */}
      <Modal transparent visible={modalVisible}>
        <View style={styles.containerModal}>
          <Animatable.View animation="fadeInLeft" style={styles.menu}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Icon name='close' size={50} color='#000' style={styles.close}/>
            </TouchableOpacity>
            <Text style={styles.texto} onPress={() => chamada('Calendario')}> <Icon name='calendar' size={20}/> Calendário</Text>
            <Text style={styles.texto} onPress={() => chamada('Mapa')}> <Icon name='map' size={20}/> Mapa</Text>
            <Text style={styles.texto} onPress={() => chamada('Ranqueamento')}> <Icon name='list' size={20}/> Ranqueamento</Text>
            <Text style={styles.texto} onPress={() => chamada('Perfil')}> <Icon name='person' size={20}/> Perfil</Text>
            <Text style={styles.texto} onPress={() => chamada('Suporte')}> <Icon name='chatbubbles' size={20}/> Suporte</Text>
            <Text style={styles.textoSair} onPress={() => chamada('Login')}> <Icon name='log-out' size={20}/> Sair</Text>
          </Animatable.View>          
        </View>
      </Modal>

      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.hamburguer}>
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
  hamburguer: {
    width:'10%',
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