import React,{useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions, Text, SafeAreaView, TouchableOpacity, TextInput, Image, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ripple from "react-native-material-ripple";
import {Picker} from '@react-native-picker/picker';
import DocumentPicker from 'react-native-document-picker';


const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Content = (props) =>{

    const {reportTypeHandler, reportCategoryHandler, reportDescHandler, submitReport, navigation} = props;


    const [selectedLanguage, setSelectedLanguage] = useState();

    const [singleFile, setSingleFile] = useState(null);

    const uploadImage = async () => {
        // Check if any file is selected or not
        if (singleFile != null) {
            // If file selected then create FormData
            const fileToUpload = singleFile;
            const data = new FormData();
            data.append('name', 'Image Upload');
            data.append('file_attachment', fileToUpload);
            // Please change file upload URL
            alert('Upload Successful');

        } else {
            // If no file selected the show alert
            alert('Please Select File first');
        }
    };

    const selectFile = async () => {
        // Opening Document Picker to select one file
        try {
            const res = await DocumentPicker.pick({
                // Provide which type of file you want user to pick
                type: [DocumentPicker.types.allFiles],
                // There can me more options as well
                // DocumentPicker.types.allFiles
                // DocumentPicker.types.images
                // DocumentPicker.types.plainText
                // DocumentPicker.types.audio
                // DocumentPicker.types.pdf
            });
            // Printing the log related to the file
            console.log('res : ' + JSON.stringify(res));
            // Setting the state to show single file attributes
            setSingleFile(res);
        } catch (err) {
            setSingleFile(null);
            // Handling any exception (If any)
            if (DocumentPicker.isCancel(err)) {
                // If user canceled the document selection
                alert('Canceled');
            } else {
                // For Unknown Error
                alert('Unknown Error: ' + JSON.stringify(err));
                throw err;
            }
        }
    };

    return(
        <View style={styles.container}>
            <View style={styles.secOne}>
                <View style={styles.secOnePartOne}>
                    <Text style={styles.inputText}>نوع گزارش</Text>
                </View>
                <View style={styles.secOnePartTwo}>
                    <View style={styles.dateButton}>
                        <Picker
                            selectedValue={selectedLanguage}
                            dropdownIconColor={'#000'}
                            onValueChange={(itemValue, itemIndex) =>
                                reportTypeHandler(itemValue)
                            }>
                            <Picker.Item label="" value= "" style={styles.pickerItem}/>
                            <Picker.Item label="خبر" value="1" style={styles.pickerItem}/>
                            <Picker.Item label="تقاضا" value="2" style={styles.pickerItem}/>
                            <Picker.Item label="اطلاعات رسانی" value="3" style={styles.pickerItem}/>
                        </Picker>
                    </View>
                </View>
                <View style={styles.secOnePartOne}>
                    <Text style={styles.inputText}>دسته گزارش</Text>
                </View>
                <View style={styles.secOnePartTwo}>
                    <View style={styles.dateButton}>
                        <Picker
                            selectedValue={selectedLanguage}
                            dropdownIconColor={'#000'}
                            onValueChange={(itemValue, itemIndex) =>
                                reportCategoryHandler(itemValue)
                            }>
                            <Picker.Item label="" value= "" style={styles.pickerItem}/>
                            <Picker.Item label="اورژانسی" value="1" style={styles.pickerItem}/>
                            <Picker.Item label="زیرساخت" value="2" style={styles.pickerItem}/>
                            <Picker.Item label="پزشکی و بهداشت" value="3" style={styles.pickerItem}/>
                            <Picker.Item label="امنیت" value="4" style={styles.pickerItem}/>
                            <Picker.Item label="خدماتی" value="5" style={styles.pickerItem}/>
                        </Picker>
                    </View>
                </View>
                <View style={styles.secOnePartOne}>
                    <Text style={styles.inputText}>محتوا گزارش</Text>
                </View>
                <View style={styles.secOnePartTwo}>
                    <View style={styles.uploadButton}>
                        <Ripple
                            style={styles.buttonStyle}
                            onPress={selectFile}>
                            <FontAwesome5 name="cloud-upload-alt" size={35} color="#000" />
                        </Ripple>
                    </View>
                </View>
                <View style={styles.secOnePartOne}>
                    <Text style={styles.inputText}>توضیحات گزارش</Text>
                </View>
                <View style={styles.secOnePartTwo}>
                    <View style={styles.uploadButton}>
                        <TextInput
                            style={styles.textInputStyle}
                            placeholderTextColor="#535353"
                            textAlign='right'
                            onChangeText={(event)=>reportDescHandler(event)}
                            multiline={true}
                            numberOfLines={2}
                    />
                    </View>
                </View>
                <View style={styles.secOnePartTwo}>
                    <View style={styles.submitButton}>
                        <Ripple style={styles.loginBtn} onPress={submitReport}>
                            <Text style={styles.buttonText}>ثبت گزارش</Text>
                        </Ripple>
                    </View>
                </View>

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
    secOne:{
        justifyContent:'center',
        backgroundColor: '#d9e7ee',
        borderRadius: 8,
        padding: 15,
        marginTop: 15
    },

    secOnePartOne:{
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },

    secOnePartTwo:{
        justifyContent:'center',
        alignItems:'center',
        marginBottom: h/40
    },

    inputText:{
        fontSize: 18,
        fontWeight:'bold',
        alignContent: 'flex-start',
        height: h/18

    },

    dateButton:{
        width:'100%',
        backgroundColor : '#e1e1e1',
        borderWidth: 0.8,
        borderRadius: 4,
    },

    uploadButton:{
        width:'100%',
        backgroundColor : '#e1e1e1',
        borderWidth: 0.8,
        borderRadius: 4,
        padding: 5
    },

    submitButton:{
        width:'100%',
        backgroundColor : '#1a2530',
        borderWidth: 0.8,
        borderRadius: 6,
        padding: 8,
        marginTop: 20
    },

    buttonText:{
        color:'#fff',
        textAlign:'center',
        fontSize: 22,
        fontWeight: 'bold'
    },

    pickerItem:{
      fontSize: 18
    },

    buttonStyle: {
        backgroundColor: '#e1e1e1',
        height: h/18,
        alignItems: 'center',
    }

});

export default React.memo(Content);
