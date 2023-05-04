import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, Modal, TouchableOpacity} from 'react-native';
import Calendar from 'react-native-calendars/src/calendar'
import Menu from '../menu';
import Ajuda from '../ajuda';

export default function Calendario() {

  //const [showModal, setShowModal] = useState(false);
  const [dayMarked, setDayMarked] = useState();

  function criarDias(day){
    setDayMarked("coleta solicitada para o dia "+day.dateString)
  }

  return(
    <ScrollView style={styles.container}>
      <Menu />
      <Ajuda />
      <Calendar 
        style={styles.calendario}
        minDate="2023-05-01"
        maxDate="2023-05-31"
        onDayPress={
          day => {criarDias(day)}
        }
        markedDates={{
          //primeira semana
          '2023-05-01': {marked: true, dotColor: 'red'},
          '2023-05-02': {marked: true, dotColor: 'blue'},
          '2023-05-03': {marked: true, dotColor: 'yellow'},
          '2023-05-04': {marked: true, dotColor: '#3F0303'},
          '2023-05-05': {marked: true, dotColor: '#2CFE01'},

          //segunda semana
          '2023-05-08': {marked: true, dotColor: 'red'},
          '2023-05-09': {marked: true, dotColor: 'blue'},
          '2023-05-10': {marked: true, dotColor: 'yellow'},
          '2023-05-11': {marked: true, dotColor: '#3F0303'},
          '2023-05-12': {marked: true, dotColor: '#2CFE01'},

          //terceira semana
          '2023-05-15': {marked: true, dotColor: 'red'},
          '2023-05-16': {marked: true, dotColor: 'blue'},
          '2023-05-17': {marked: true, dotColor: 'yellow'},
          '2023-05-18': {marked: true, dotColor: '#3F0303'},
          '2023-05-19': {marked: true, dotColor: '#2CFE01'},

          //quarta semana
          '2023-05-22': {marked: true, dotColor: 'red'},
          '2023-05-23': {marked: true, dotColor: 'blue'},
          '2023-05-24': {marked: true, dotColor: 'yellow'},
          '2023-05-25': {marked: true, dotColor: '#3F0303'},
          '2023-05-26': {marked: true, dotColor: '#2CFE01'},

          //segunda semana
          '2023-05-29': {marked: true, dotColor: 'red'},
          '2023-05-30': {marked: true, dotColor: 'blue'},
          '2023-05-31': {marked: true, dotColor: 'yellow'},

        }}
      />
      
      <Text style={styles.title}>Suas datas marcadas</Text>
      <TextInput editable={false} value={dayMarked} style={styles.input}/>
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
  modal: {
    
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 5,
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