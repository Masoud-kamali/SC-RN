import React, {useEffect, useState} from 'react';
import {View, ToastAndroid} from 'react-native';
import Content from '../components/userType/Content';


const UserTypes = ({navigation}) => {

    return(
        <View style={{backgroundColor:'#fff'}}>
            <Content
                navigation={navigation}
            />
        </View>
    );
};



export default React.memo(UserTypes);
