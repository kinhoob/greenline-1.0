import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';
import MapView from 'react-native-maps';

import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native'

export default function Mapa() {
    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);
    const MapScreen = () => {
      

    return(
    <View>
{/* modal do menu hamburguer */}
<Modal transparent visible={modalVisible}>
        <View style={styles.containerModal}>
          <Animatable.View animation="fadeInLeft" style={styles.menu}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Icon name='close' size={50} color='#000' style={styles.close}/>
            </TouchableOpacity>
            <Text style={styles.texto} onPress={() => navigation.navigate('Perfil')}> <Icon name='person' size={20}/> Perfil</Text>
            <Text style={styles.texto} onPress={() => navigation.navigate('Calendario')}> <Icon name='calendar' size={20}/> Calendário</Text>
            <Text style={styles.textoSair} onPress={() => navigation.navigate('Login')}> <Icon name='log-out' size={20}/> Sair</Text>
          </Animatable.View>          
        </View>

        <MapView
              style={styles.map}
              initialRegion={{
                latitude: -8.053856102596681,
                longitude: -34.89339956131435,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
      </Modal>

      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.hamburguer}>
        <Icon name='menu' size={50} color='#000'/>
      </TouchableOpacity>
    </View>)
}}

const styles = StyleSheet.create({
    containerModal:{
      flex:1,
      alignItems: "center",
      marginTop: 70,
    },
    menu:{
      width:'90%',
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
      textAlign: "right",
      marginTop: -55,
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

  
  