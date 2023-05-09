import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { useNavigation } from '@react-navigation/native'
import Menu from '../menu';

export default function Ranqueamento(){
    const navigation = useNavigation();

  const tableHead = ['Nome', 'Pontuação'];
  const tableData = [
    ['João', '100'],
    ['Maria', '85'],
    ['Pedro', '75'],
    ['Lucas', '60'],
  ];

  return (
    <View style={styles.container}>
      <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        <Rows data={tableData} textStyle={styles.text} />
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});

