import React, {useEffect, useState} from 'react';
import {View, ToastAndroid} from 'react-native';
import MyHeader from '../components/myHeader/MyHeader';
import Content from "../components/reportDetail/Content";
import {Container} from "native-base";
import Toast from 'react-native-simple-toast';


const ReportDetail = ({route, navigation},props) => {

    const[reportType,setReportType] = useState('');
    const[reportCategory,setReportCategory] = useState('');
    const[reportDesc,setReportDesc] = useState('');

    const reportTypeHandler = (event)=>{
        setReportType(event);
    };

    const reportCategoryHandler = (event)=>{
        setReportCategory(event);
    };

    const reportDescHandler = (event)=>{
        setReportDesc(event);

        console.log(event);
    };



    const submitReport = async () => {

        if(reportType == ''){
            Toast.show('نوع گزارش را تعیین کنید', Toast.LONG);
        }else if(reportCategory == ''){
            Toast.show('دسته گزارش را تعیین کنید', Toast.LONG);
        }else if(reportDesc == ''){
            Toast.show('توضحیات گزارش را وارد کنید', Toast.LONG);
        }else{
            navigation.navigate('MainDrawerNavigator')
        }
    };


    return(
        <Container style={{height: '100%'}}>
            <React.Fragment style={{height: '100%'}}>
                <MyHeader
                    name={'ReportDetail'}
                    title={'اطلاعات تکمیلی گزارش'}
                />
                <Content
                    reportTypeHandler={(e)=>reportTypeHandler(e)}
                    reportCategoryHandler={(e)=>reportCategoryHandler(e)}
                    reportDescHandler={(e)=>reportDescHandler(e)}
                    submitReport={(e)=>submitReport(e)}
                    navigation={navigation}

                />
            </React.Fragment>
        </Container>
    );
};



export default ReportDetail;
