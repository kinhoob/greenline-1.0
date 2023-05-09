import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Linking, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import Menu from '../menu';
import * as Animatable from 'react-native-animatable';

export default function Suporte() {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container}>
            <Menu />
                <Text style={styles.titlesup}>Suporte</Text>
            <Animatable.View animation="fadeInUp" style={styles.containerSup}>
                <View style={styles.content}>
                    <TextInput style={styles.input} placeholder="Tire suas dúvidas aqui" />
                    <TouchableOpacity style={styles.questionButton}>
                        <FontAwesome name="bullhorn" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.socialButtons}>
                    <TouchableOpacity style={styles.socialButton}
                        onPress={() => { Linking.openURL('https://twitter.com/UnibraOficial') }}>
                        <FontAwesome name="twitter" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}
                        onPress={() => { Linking.openURL('https://www.instagram.com/unibraoficial/') }}>
                        <FontAwesome name="instagram" size={24} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.socialButton}
                        onPress={() => { Linking.openURL('mailto:ouvidoria@grupounibra.com') }}
                    >
                        <FontAwesome name="envelope-o" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebdec6'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 0,
        marginBottom: 20,
    },
    input: {
        flex: 1,
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 20,
        marginTop: 150,
        marginRight: 10,
    },
    containerSup:{
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
    titlesup: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 58,
        marginBottom: 22,
        textAlign: 'center'
    },
    
});
