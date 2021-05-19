import React, {useEffect, useState} from 'react';
import {View, ToastAndroid, StatusBar} from 'react-native';
import Content from '../components/signup/Content';
import MyHeader from '../components/myHeader/MyHeader';
import Toast from 'react-native-simple-toast';


const SignUp = ({navigation}) => {

    const[userName, setUserName] = useState('');
    const[password, setPassword] = useState('');
    const[confirmPassword, setConfirmPassword] = useState('');
    const[etherAddress, setEtherAddress] = useState('');
    const[isSelected, setIsSelected] = useState(false);


    const userNameHandler = (event)=>{
        setUserName(event);
    };

    const passwordHandler = (event)=>{
        setPassword(event);
    };

    const confirmPasswordHandler = (event)=>{
        setConfirmPassword(event);
    };

    const etherAddressHandler = (event)=>{
        setEtherAddress(event);
    };

    const isSelectedHandler = (isSelected)=>{
        setIsSelected(isSelected);
    };



    const signUpUser = async () => {

        if(userName == ''){
            Toast.show('نام کاربری را وارد کنید', Toast.LONG);
        }else if(password == ''){
            Toast.show('رمز عبور را وارد کنید', Toast.LONG);
        }else if(confirmPassword == ''){
            Toast.show('تایید رمز عبور را وارد کنید', Toast.LONG);
        }else if(etherAddress == ''){
            Toast.show('آدرس اتریوم را وارد کنید', Toast.LONG);
        }else if(confirmPassword != password){
            Toast.show('رمز عبورها یکسان نیست', Toast.LONG);
        }else if(isSelected != true){
            Toast.show('قوانین را قبول نکرده اید', Toast.LONG);
        }else{

            navigation.navigate('Login')

        }


    };

    return(
        <View style={{backgroundColor:'#fff'}}>
            <Content
                userNameHandler={(e)=>userNameHandler(e)}
                passwordHandler={(e)=>passwordHandler(e)}
                confirmPasswordHandler={(e)=>confirmPasswordHandler(e)}
                etherAddressHandler={(e)=>etherAddressHandler(e)}
                isSelectedHandler={(isSelected)=>isSelectedHandler(isSelected)}
                signUpUser={signUpUser}
            />
        </View>
    );
};



export default SignUp;
