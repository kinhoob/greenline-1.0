import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { useNavigation } from '@react-navigation/native'
import Menu from '../menu';

export default function Ranqueamento(){
    const navigation = useNavigation();

    const tableHead = ['Nome', 'Pontuação'];
    const tableData = [
      ['Pricylla Santos', '*'],
      ['Ivson Estevão', '*'],
      ['José William', '*'],
      ['Ismael Rodrigues', '*'],
    ];

  return (
    <View style={styles.container}>
      <Menu />
      <View>
        <Text style={styles.title}>As informações da tabela são atualizadas a cada semana</Text>
        <Table style={styles.table}>
          <Row data={tableHead} style={styles.head} textStyle={styles.textHead} />
          <Rows data={tableData} textStyle={styles.text} />
        </Table>
      </View>      
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor:"#ebdec6",
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    margin: 20 ,
    textAlign: 'center',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  table: { 
    margin: 20,
    backgroundColor: "#f5f5f5",
  },
  head: { 
    height: 40, 
    backgroundColor: '#85c250',
  },
  textHead: { 
    margin: 6,
    color: "#fff",
    borderWidth: 1,
    padding: 10,
    margin: 0 
  },
  text: { 
    margin: 6,
    borderWidth: 1,
    padding: 7,
    margin: 0 
  },
});

