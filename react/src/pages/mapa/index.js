import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Linking, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Menu from '../menu';
import * as Animatable from 'react-native-animatable';

export default function Mapa() {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container}>
            <Menu />
            <Text style={styles.titlesup}>Mapa</Text>
            <Animatable.View animation="fadeInUp" style={styles.containerSup}>
                <View style={styles.content}>
                    <Text style={styles.title}>Atualizações com as rotas estão próximas!</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>Clique no botão abaixo para ver a rota de coleta.</Text>
                </View>
                <View style={styles.socialButtons}>
                    <TouchableOpacity style={styles.socialButton1}>
                        <Icon name='ios-arrow-down' size={20} />
                    </TouchableOpacity>
                </View>
                <View style={styles.socialButtons}>
                    <TouchableOpacity style={styles.socialButton}
                        onPress={() => { Linking.openURL('https://www.google.com.br/maps/dir/(UNIBRA)+Campus+I,+R.+Joaquim+Felipe,+250+-+Boa+Vista,+Recife+-+PE,+50050-340/Campus+2+-+Unibra+-+Rua+Padre+Ingl%C3%AAs+-+Boa+Vista,+Recife+-+PE/-8.0551665,-34.8956423/-8.0522577,-34.8950457/-8.0522649,-34.8917563/@-8.0538337,-34.8959758,16.5z/data=!4m17!4m16!1m5!1m1!1s0x7ab18e91908588b:0x71a16782c155a582!2m2!1d-34.8917719!2d-8.0522753!1m5!1m1!1s0x7ab19c517307163:0x27476ae1f8576d50!2m2!1d-34.8927321!2d-8.0540422!1m0!1m0!1m0!3e2') }}>
                        <FontAwesome name="map" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#85c250'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 0,
        marginBottom: 20,
    },
    containerSup: {
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
    questionButton: {
        backgroundColor: '#eee',
        borderRadius: 20,
        marginTop: 150,
        padding: 10,
    },
    socialButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
    },
    socialButton: {
        backgroundColor: '#85c250',
        borderRadius: "50%",
        marginTop: 130,
        padding: 20,
    },
    socialButton1: {
        backgroundColor: '#fff',
        borderRadius: "50%",
    },
    titlesup: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 58,
        marginBottom: 22,
        textAlign: 'center'
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center'
    }

});
