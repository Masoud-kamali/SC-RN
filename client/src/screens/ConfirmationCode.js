import React from 'react';
import {View} from 'react-native';
import Content from '../components/enterPhoneNumberNormalUser/ConfirmContent';

// let props = {
//     name:'Login',
//     title:'تایید شماره تلفن همراه'
// }

const ConfirmationCode = ({route, navigation}) => {

    const phoneNumber = route.params.phoneNumber;

    return(
        <View style={{backgroundColor:'#f3f3f3'}} >
            <Content
                phoneNumber = {phoneNumber}
                navigation = {navigation}
            />
        </View>
    );
};



export default React.memo(ConfirmationCode);
