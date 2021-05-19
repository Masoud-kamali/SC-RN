import React,{useState} from 'react';

import {View, StyleSheet, Dimensions, Text, SafeAreaView, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import Ripple from "react-native-material-ripple";


const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Content = (props) =>{
    const {phoneNumberHandler, identityCodeHandler, sendConfirmationNumber} = props;

    const [phoneInput, setPhoneInput] = useState(false);
    const [identityCodeInput, setIdentityCodeInput] = useState(false);

    const [iconPhoneInput, setIconPhoneInput] = useState(24);
    const [iconCodeInput, setIconCodeInput] = useState(24);

    const _changeBorderPhoneInput = () =>{
        setPhoneInput(true);
        setIdentityCodeInput(false);
        setIconPhoneInput(28);
        setIconCodeInput(24);

    };

    const _changeBorderIdentityCodeInput = () =>{
        setPhoneInput(false);
        setIdentityCodeInput(true);
        setIconPhoneInput(24);
        setIconCodeInput(28);
    };





    return(
        <View style={styles.container}>
            <View style={styles.secHeader}>
                <Text style={styles.TextHeader}>اطلاعات ابتدایی کاربر سازمانی</Text>
            </View>
            <View style={styles.secOne}>
                <TouchableOpacity
                    style={[styles.secOnePartOne, phoneInput ? {borderBottomWidth: 2.2} : {}]}
                    activeOpacity={0.9}
                    onPress={()=>_changeBorderPhoneInput()}
                >
                    <TextInput
                        placeholder="شماره موبایل"
                        style={styles.textInputStyle}
                        placeholderTextColor="#535353"
                        textAlign='right'
                        onFocus={()=>_changeBorderPhoneInput()}
                        keyboardType={'numeric'}
                        onChangeText={(event)=>phoneNumberHandler(event)}
                    />
                    <Icon name="mobile" size={iconPhoneInput} color="#aaa" style={styles.textPhoneIconStyle} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.secOnePartOne, identityCodeInput ? {borderBottomWidth: 2.2} : {}]}
                    activeOpacity={0.9}
                    onPress={()=>_changeBorderIdentityCodeInput()}
                >
                    <TextInput
                        placeholder="شناسه سازمانی"
                        style={[styles.textInputStyle, {right: -10}]}
                        placeholderTextColor="#535353"
                        textAlign='right'
                        onFocus={()=>_changeBorderIdentityCodeInput()}
                        keyboardType={'numeric'}
                        onChangeText={(event)=>identityCodeHandler(event)}
                    />
                    <FontAwesome5 name="user-nurse" size={iconCodeInput} color="#aaa" style={[styles.textUserIconStyle, {right: -5}]} />
                </TouchableOpacity>
                <Ripple style={styles.loginBtn} onPress={sendConfirmationNumber}>
                    <Text style={styles.buttonText}>دریافت کد تایید</Text>
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
    secHeader:{
        marginTop: 40,
        margin: 0,
        padding:0,
        height: h/11,
        backgroundColor:'#0d003d',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        alignItems: 'center',
        justifyContent:'center',

    },

    TextHeader:{
        textAlign: 'center',
        fontSize: 21,
        color: '#fff',
        fontWeight: 'bold'
    },

    secOne:{
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#d9e7ee',
        borderRadius: 8,
        padding: 15,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    secOnePartOne:{
        margin:0,
        marginTop:25,
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent: 'flex-end',
        borderBottomWidth:1,
        borderColor:'#575757',
        width: '90%'
    },

    textPhoneIconStyle:{
        margin: 3,
    },
    textUserIconStyle:{
        margin: 3,
    },

    textInputStyle:{
        fontSize:14,
        padding: 5,
        marginRight:10,
        textAlign:'right',
        width:'90%',
        paddingBottom:-20,
        fontFamily:'IRANSansMobile_Light',
    },

    loginBtn:{
        marginTop: 35,
        width:'90%',
        backgroundColor : '#263043',
        padding:10,
        borderRadius: 10,
    },


    buttonText: {
        textAlign: 'center',
        fontSize:16,
        color:'#fff',
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
