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
      {/* modal do menu ajuda */}
      <Modal transparent visible={modalVisible}>
        <View style={styles.containerModal}>
          <Animatable.View animation="fadeIn" delay={0} style={styles.menu}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Icon name='close' size={50} color='#000' style={styles.close}/>
              <Text style={styles.texto}>
                Ao clicar na data escolhida, a coleta será marcada para o dia selecionado.{'\n'}
                Nós trabalhamos com dias pré definidos para cada tipo de lixo.{'\n'}
                Ao solicitar o dia de coleta, só será coletado o lixo do respectivo dia.{'\n'}
                O tipo do lixo a ser coletado está indicado no calendario pela sua cor.{'\n'}
              </Text>
              <Text style={styles.texto}>
                Azul - Papel{'\n'}
                Vermelho - Plástico{'\n'}
                Verde - Vidro{'\n'}
                Amarelo - Metal{'\n'}
                Marrom - Orgânico{'\n'}
              </Text>
            </TouchableOpacity>
          </Animatable.View>          
        </View>
      </Modal>

      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.hamburguer}>
        <Icon name='information-circle' size={50} color='#000'/>
      </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
  containerModal:{
    flex:1,
    alignItems: "center",
    marginTop: 70,
  },
  menu:{
    width:'80%',
    minHeight: '80%',
    maxHeight: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 25,
  },
  hamburguer: {
    position: 'absolute',
    alignSelf: 'flex-end',
    width: '10%',
    marginTop: -55,
    marginRight: "5%",
  },
  texto:{
    fontSize: 16,
    marginTop: 25,
    marginHorizontal: 25,
  },
  textoSair:{
    fontSize: 20,
    position: 'absolute',
    bottom: 0,
    marginBottom: 35,
  },
  close:{
    marginLeft: '80%',
  }
})