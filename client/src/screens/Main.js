import React, {useEffect, useState} from 'react';
import {View, ToastAndroid} from 'react-native';
import Content from '../components/main/Content';
import MyHeader from '../components/myHeader/MyHeader';
import Toast from 'react-native-simple-toast';
import {Container} from "native-base";
import getWeb3 from "../../getWeb3";
import ReportContract from "../contracts/ReportContract";



const Main = ({navigation}) => {

    useEffect(async ()=>{
        const web3 = await getWeb3();

        if(web3 !== null){

            const contract = new web3.eth.Contract(ReportContract.abi);

            contract.deploy({
                data: ReportContract.bytecode,
                arguments: [['0xb20Ff3CB5386712Ad73c75684712A9708abB9F6E', '0x3cd91B30302D3D2A8028B26c18087FCEAF5955Ab'], ['0xb20Ff3CB5386712Ad73c75684712A9708abB9F6E', '0x3cd91B30302D3D2A8028B26c18087FCEAF5955Ab'],['1','2'],'abcdefghijklmnoup']
            })
                .send({
                    from: "0xb20Ff3CB5386712Ad73c75684712A9708abB9F6E",
                    gas: 150000100,
                    gasPrice: "30000"
                }, function(error, transactionHash){

                })
                .then(function(newContract){
                    console.log('new contract', newContract.options.address)
                });



        }else{
            Toast.show('برنامه به شبکه متصل نیست', Toast.LONG);

        }

    },[]);

    return(
        <Container style={{height: '100%'}}>
            <React.Fragment style={{height: '100%'}}>
                <MyHeader
                    name='Main'
                    title='خانه'
                />
                <Content
                    navigation = {navigation}
                />
            </React.Fragment>
        </Container>
    );
};



export default Main;
