import React, {useEffect, useState} from 'react';
import {View, ToastAndroid} from 'react-native';
import MyHeader from '../components/myHeader/MyHeader';
import Content from "../components/map/Content";
import {Container} from "native-base";




const Map = ({route, navigation},props) => {

    return(
        <Container style={{height: '100%'}}>
            <React.Fragment style={{height: '100%'}}>
                <MyHeader
                    name={'Map'}
                    title={'انتخاب موقعیت مکانی'}
                />
                <Content
                    navigation = {navigation}
                />
            </React.Fragment>
        </Container>
    );
};



export default Map;
