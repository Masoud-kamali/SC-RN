import React, {useEffect, useState} from 'react';
import {View, ToastAndroid} from 'react-native';
import Content from '../components/enterPhoneNumberExpertUser/Content';
import Toast from 'react-native-simple-toast';



const EnterPhoneNumberExpertUser = ({navigation}) => {


    const[phoneNumber,setPhoneNumber] = useState('');
    const[identityCode,setIdentityCode] = useState('');

    const phoneNumberHandler = (event)=>{
        setPhoneNumber(event);
    };

    const identityCodeHandler = (event)=>{
        setIdentityCode(event);
    };

    const sendConfirmationNumber = async () => {

        if(phoneNumber === ''){

            Toast.show('شماره تلفن همراه خود را وارد کنید', Toast.LONG);

        }else if(identityCode === ''){

            Toast.show('شناسه سازمانی خود را وارد کنید', Toast.LONG);


        }else{

            try {

                Toast.show('کد تایید برای شما ارسال گردید', Toast.LONG);

                navigation.navigate('ConfirmationCode', { phoneNumber : phoneNumber });


            } catch (error) {

                Toast.show('خطا در برقراری ارتباط با سرور', Toast.LONG);

            }
        }


    };

    return(
        <View style={{backgroundColor:'#f3f3f3'}} >
            <Content
                phoneNumberHandler={(e)=>phoneNumberHandler(e)}
                identityCodeHandler={(e)=>identityCodeHandler(e)}
                sendConfirmationNumber={sendConfirmationNumber}
            />
        </View>
    );
};



export default React.memo(EnterPhoneNumberExpertUser);
