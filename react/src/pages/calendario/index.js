import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, Modal, TouchableOpacity} from 'react-native';
import Calendar from 'react-native-calendars/src/calendar'
import Menu from '../menu';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Calendario() {

  const [showModal, setShowModal] = useState(false);

  return(
    <ScrollView style={styles.container}>
      <Menu />
      <Calendar 
        style={styles.calendario}
        onDayPress={
          date => {setShowModal(true)}
        }
      />
      <Modal visible={showModal}>
        <TouchableOpacity onPress={() => setShowModal(false)}>
          <Icon name='close' size={50} color='#000' style={styles.close}/>
        </TouchableOpacity>
        <Text>teste modal</Text>
      </Modal>
      <Text style={styles.title}>Suas datas marcadas</Text>
      <TextInput editable={false} value='Infos da solicitação' style={styles.input}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebdec6'
  },
  calendario: {
    margin: 10,
    borderRadius: 5,
    backgroundColor: "#85c250",
    padding: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity:  0.17,
    shadowRadius: 3.05,
    elevation: 4
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity:  0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  close:{
    marginLeft: '70%',
  }  
})