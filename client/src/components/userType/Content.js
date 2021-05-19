import React,{useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions, Text, SafeAreaView, TouchableOpacity, TextInput, Image, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ripple from "react-native-material-ripple";


const w = Dimensions.get('window').width;

const Content = (props) =>{

    const {navigation} = props;

    return(
        <View style={styles.container}>
            <View style={styles.image}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../../assets/images/logo.jpg')}
                />
            </View>
            <View style={styles.secOne}>
                <Ripple style={styles.loginBtn} onPress={()=> navigation.navigate('EnterPhoneNumberNormalUser')}>
                    <Text style={styles.buttonText}>ثبت نام کاربران عادی</Text>
                </Ripple>
                <Ripple style={styles.firstBtn} onPress={()=> navigation.navigate('EnterPhoneNumberExpertUser')}>
                    <Text style={styles.buttonText}>ثبت نام کاربران سازمانی</Text>
                </Ripple>
            </View>
        </View>
    )
};

const styles= StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        padding:20,
        justifyContent: 'flex-start',
        backgroundColor:'#fff',
        paddingTop:0,

    },
    image: {
        marginTop:30,
        marginBottom:15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tinyLogo: {
        width: 320,
        height: 320,
    },
    secOne:{
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#d9e7ee',
        borderRadius: 8,
        padding: 15,
        marginTop: 30
    },

    loginBtn:{
        marginTop: 20,
        width:'95%',
        backgroundColor : '#263043',
        padding:10,
        borderRadius: 10,
    },

    firstBtn:{
        marginTop: 30,
        marginBottom: 20,
        width:'95%',
        backgroundColor : '#263043',
        padding:10,
        borderRadius: 10,
    },

    buttonText: {
        textAlign: 'center',
        fontSize:20,
        color:'#fff',
    },
    firstButtonText: {
        textAlign: 'center',
        fontSize:16,
        color:'#fff',
        padding: 4
    },

    secTwo: {
        marginTop:30,
        padding:20,

    },
    secTwoTextOne: {
        fontSize:12,
        color:'#3f3f3f',
    },
    secTwoViewOne: {
        width: w/1.2,
        height:100,
        alignItems:'center',
        justifyContent:'center',
    },
    //
    secTwoTextTwo:{
        color:'#d23d00',
        fontSize: 12,
        marginTop: 20,
    },
    root: {padding: 20, minHeight: 300, paddingTop:100},
    title: {textAlign: 'center', fontSize: 30},
    codeFiledRoot: {
        marginTop: 20,
        width: 300,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    cellRoot: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    cellText: {
        color: '#000',
        fontSize: 30,
        textAlign: 'center',
    },
    focusCell: {
        borderBottomColor: '#008321',
        borderBottomWidth: 2,
    },
    head:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:10,
    },
});

export default React.memo(Content);
