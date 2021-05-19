import React,{useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions, Text, SafeAreaView, AsyncStorage} from 'react-native';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import CountDown from "react-native-countdown-component";
import { useNavigation } from '@react-navigation/native';

import Toast from 'react-native-simple-toast';


const CELL_COUNT = 5;

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const ConfirmContent = (props) =>{

    const {phoneNumber, navigation} = props;

    const [memberToken, setMemberToken] = useState(null);
    const [confirmed, setConfirmed] = useState(false);
    const [value, setValue] = useState('');
    const [timer, setTimer] = useState('0');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const sendAgain = async () => {

        if(confirmed == false){
            try {
                setTimer(`${timer} + ${1}`);

                Toast.show('کد تایید مجددا برای شما ارسال گردید', Toast.LONG);


            } catch (error) {
                Toast.show('عدم برقراری ارتباط با سرور', Toast.LONG);

            }
        }
    };



    useEffect(()=>{
        if (value.length === 5){
            const checkCode = async () =>{
                try {

                    if(value == 11111) {
                        Toast.show('کد وارد شده نادرست است', Toast.LONG);

                    } else {

                        setConfirmed(true);
                        navigation.navigate('SignUp');

                    }

                } catch (error) {

                    Toast.show('عدم برقراری ارتباط با سرور', Toast.LONG);

                }
            };

            checkCode().then((res)=>{

            });
        }
    },[value]);

    return(
        <View style={styles.container}>
            <View style={styles.secHeader}>
                <Text style={styles.TextHeader}>ورود شناسه یکتا</Text>
            </View>
            <View style={styles.secOne}>
                <Text style={styles.secTwoTextOne}>
                    شناسه یکتا را وارد نمایید
                </Text>
                <View style={styles.secTwoViewOne}>
                    <SafeAreaView style={styles.root}>
                        <CodeField
                            ref={ref}
                            {...prop}
                            value={value}
                            onChangeText={setValue}
                            cellCount={CELL_COUNT}
                            rootStyle={styles.codeFiledRoot}
                            keyboardType="number-pad"
                            renderCell={({index, symbol, isFocused}) => (
                                <View
                                    onLayout={getCellOnLayoutHandler(index)}
                                    key={index}
                                    style={[styles.cellRoot, isFocused && styles.focusCell]}>
                                    <Text style={styles.cellText}>
                                        {symbol || (isFocused ? <Cursor /> : null)}
                                    </Text>
                                </View>
                            )}
                        />
                    </SafeAreaView>
                </View>
                <View style={styles.head}>
                    <CountDown
                        id={timer}
                        until={60 * 6}
                        size={12}
                        onFinish={sendAgain}
                        digitStyle={{backgroundColor: '#f3f3f3',borderRadius:2}}
                        digitTxtStyle={{color: '#ee2017',fontSize:18, fontWeight:'300', fontFamily:"IRANSansMobile(FaNum)_Medium"}}
                        timeToShow={['M', 'S']}
                        timeLabels={{m: '', s: ''}}
                        showSeparator={true}
                    />
                </View>
            </View>
        </View>
    )
};

const styles= StyleSheet.create({

    container:{
        width: '100%',
        height: '100%',
        padding: 20,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent:'flex-start'
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

    secTwo: {
        marginTop:30,

    },
    secTwoTextOne: {
        fontSize:18,
        color:'#141d29',
        marginTop: 15
    },
    secTwoViewOne: {
        width: w/1.2,
        height: h/4,
        alignItems:'center',
        justifyContent:'center',
    },
    //
    secTwoTextTwo:{
        color:'#d23d00',
        fontSize: 12,
        marginTop:10,
        marginRight: 15
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
        borderBottomColor: '#7a7a7a',
        borderBottomWidth: 1,
    },
    cellText: {
        color: '#000',
        fontSize: 30,
        textAlign: 'center',
    },
    focusCell: {
        borderBottomColor: '#0b1633',
        borderBottomWidth: 2,
    },
});

export default React.memo(ConfirmContent);
