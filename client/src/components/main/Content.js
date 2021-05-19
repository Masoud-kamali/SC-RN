import React,{useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions, Text, SafeAreaView, TouchableOpacity, TextInput, Image, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ripple from "react-native-material-ripple";


const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Content = (props) =>{

    const {navigation} = props;

    return(
        <View style={styles.container}>
            <View style={styles.secOne}>
                <Ripple style={styles.firstBtn} onPress={()=> navigation.navigate('MapDrawerNavigator')}>
                    <MaterialCommunityIcons name='text-box-plus' color={'#fff'} size={100}/>
                    <Text style={styles.buttonFirstText}>ایجاد گزارش</Text>
                </Ripple>
            </View>
            <View style={styles.secTwo}>
                <Ripple style={[styles.loginBtn, {backgroundColor:'#740319'}]} onPress={()=> navigation.navigate('MapDrawerNavigator')}>
                    <MaterialCommunityIcons name='text-box-search' color={'#fff'} size={100}/>
                    <Text style={styles.buttonText}>بررسی گزارش</Text>
                </Ripple>
                <Ripple style={styles.loginBtn} onPress={()=> navigation.navigate('MapDrawerNavigator')}>
                    <MaterialCommunityIcons name='text-box-check-outline' color={'#fff'} size={100}/>
                    <Text style={styles.buttonText}>ارزیابی گزارش</Text>
                </Ripple>
            </View>
        </View>
    )
};

const styles= StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        padding: 20,
        backgroundColor: '#fff',
        paddingTop: 0,

    },

    secOne:{
        width: '100%',
        marginTop: h/20,
        height: h/4,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#063416',
        borderRadius: 15,

    },


    firstBtn:{
        alignItems:'center',
        width:'100%',
    },


    secTwo:{
        width: '100%',
        marginTop: h/35,
        height: h/4,
        borderRadius: 10,
        flexDirection:'row',
        justifyContent: 'space-between'
    },

    loginBtn:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#0d003d',
        width:'48%',
        borderRadius: 10,
    },

    buttonFirstText:{
        textAlign: 'center',
        fontSize: 32,
        color:'#fff',

    },
    buttonText:{
        textAlign: 'center',
        color:'#fff',
        fontSize: 25,

    },



});

export default React.memo(Content);
