import React from 'react';
import { ImageBackground , StyleSheet , View , Image , Text , TouchableHighlight , Swipeable , 
  KeyboardAvoidingView , Keyboard, Alert  } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import{BimIcon , BimButton , BimText , BimCachableImage, BimFormikTextInput, BimFormikForm, BimErrorMessage, BimFormikButton } from '../../components'
import { BimColors , BimConfiguration } from '../../settings';
import apiAdvertise from '../../api/apiAdvertise';
import useApi from '../../utility/hooks/useApi';
import { ErrorMessage, Formik } from 'formik';
import * as Yup  from 'yup';
import usePushNotification from '../../utility/hooks/usePushNotification';
import BimApiCallError from '../../components/BimApiCallError';
import BimActivityIndicator from '../../components/BimActivityIndicator';

function BimAdvertCard( { id , title , price, imageUrl , thumbnailUrl, 
  onPress , 
  onDelete , 
  showDelete=true , 
  addStyle ,
  ImageHeight = 200,
  enableSendMessage = false,
} ) {

  //const[ error , setError] = React.useState();
  const[ enableMessageSend , setEnableMessageSend] = React.useState(enableSendMessage);
  const[ isApiErrorBoxVisible , setIsApiErrorBoxVisible] = React.useState(false);  
  
  const sendMessageApi =  useApi(apiAdvertise.sendMessage);
  const pushNotification = usePushNotification();
  const validationSchema = Yup.object().shape({
    bimMessage :  Yup.string().required("message required").label("Message"),
  })

  const handleSubmit = async (messageInfo , {resetForm}) =>
  {
    Keyboard.dismiss();
    const listingId = 1; //userId => mosh@domain.com
    const response = await sendMessageApi.request( listingId , "App Message" , messageInfo.bimMessage );
    if(response.ok)
    {
      pushNotification.sendLocalNotification( "information" , "Your message was sent to the seller." );
      Alert.alert( "Message has been sent succesfully..." )
      resetForm();
      setEnableMessageSend(false);
      return;
    }  
    setIsApiErrorBoxVisible(true);
  }  

  return (
    <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
        >
        <TouchableHighlight style={[styles.hilighter]} underlayColor= {BimColors.touchHighlight} onPress={onPress}>

          <View style={[styles.cardBox]} >
            <View style={styles.titleWrapperRightPanel}>
              { showDelete &&
              <BimIcon name="trash-can" size={30} backgroundColor="white" hasBorder={true} 
                        iconColor={BimColors.deleteIcon} onPress={ onDelete } />
              }
            </View>
            <View style={styles.titleWrapper}>
              <View style={styles.titleWrapperLeftPanel}>
                <BimText isBold={true} textColor={BimColors.normalText}> {title} </BimText>
              </View>
            </View>
            <View style={styles.imageWrapper}>
              { imageUrl && <BimCachableImage  
                                height={ImageHeight}
                                tint='light' 
                                thumbnailUrl={thumbnailUrl}
                                imageUrl={imageUrl}  
                            />
              }
            </View>
            <View style={styles.subTitleWrapper}>
              <BimText>Price : {price}$ </BimText>
              <BimText maxnumberOfLines={3} >
                Bim Bank is one od the best Asian bank, that has been located in Iran, and exactly in the middle east where the peace is kinda rare thing. 
                Bim Bank is one od the best Asian bank, that has been located in Iran, and exactly in the middle east where the peace is kinda rare thing 
              </BimText>
            </View>
            {
              enableMessageSend &&
              <View style={[styles.subTitleWrapper , styles.sendMessageBox ]}>
                <BimFormikForm
                initialValues={{bimMessage:""}}
                onSubmit={handleSubmit} 
                validationSchema = {validationSchema}
                >
                  <BimActivityIndicator visible={sendMessageApi.loading} isBordersRadius={true} />        
                  <View style={styles.contextWrapper}>
                      <View style={styles.modalHeader}>
                          <BimText textColor="white"> send message  ...  </BimText>
                      </View>
                      <View style={[styles.modalDataContainer]}>
                        <View style={styles.componentWarpper}>
                          { 
                            sendMessageApi.hasError && 
                            isApiErrorBoxVisible &&
                            <BimApiCallError 
                              onCloseEventInParentHandler = { () => setIsApiErrorBoxVisible(false) }
                              errorCode={sendMessageApi.errorCode} 
                              errorDesc={sendMessageApi.errorDesc} 
                            /> 
                          }
                        </View>                        
                        <View style={styles.componentWarpper}>
                          <BimFormikTextInput  
                            name="bimMessage"
                            placeholder='Message' 
                            iconName="message" 
                            iconColor={BimColors.textInputIcon}
                            textContentType="jobTitle"
                            multiline={true}
                            numberOfLines={2}
                            hasBottomLine = {false}
                            maxLength={200}                            
                          />                         
                        </View>  
                      </View>
                      <View style={[styles.modalFooter]}>
                        <BimFormikButton
                          name = "btnSubmit" 
                          text="Send Message..." 
                          buttonColor={BimColors.okButton} 
                          iconName= "login"  
                          iconSize={30} 
                          iconColor={BimColors.buttonIconColor} 
                          />
                      </View>              
                  </View>
                </BimFormikForm>
              </View>
            }
          </View>
        </TouchableHighlight>
    </KeyboardAvoidingView>              
    );
}
const styles = StyleSheet.create( {    
  cardBox: 
  {
    flexDirection : "column",
    justifyContent: 'flex-start',
    alignItems:'center',
    backgroundColor:"#fff",
    width:'100%',
    borderWidth:1,
    borderColor:BimColors.border,
    borderRadius : 5,
    overflow: 'hidden',
    padding:5,
    // paddingRight: 5,
    paddingTop:5,
    paddingBottom :5 ,
    // marginBottom:10,
    //  height:'100%',
  },     
  modalHeader:{
    width:"100%",
    height:35,
    borderRadius:5,
    borderBottomLeftRadius : 0,
    borderBottomRightRadius : 0,
    borderWidth:1,
    borderBottomWidth:1,
    borderColor:BimColors.border,
    backgroundColor:BimColors.boxHeader,
    paddingLeft:5,
    paddingTop:5,
  },
  modalFooter:{
    width:"100%",
    height:60,
    borderRadius:5,
    borderTopLeftRadius : 0,
    borderTopRightRadius : 0,
    borderWidth:0,
    borderTopWidth:0,
    borderColor:BimColors.border,
    paddingLeft:5,
    paddingTop:10
  },   
  imageWrapper: 
  {
    flexDirection : "column",
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:"#fff",
    width:'100%',
    borderWidth:0,
    // borderBottomWidth:0,
    borderBottomColor:BimColors.border,
    borderTopLeftRadius : 20 ,
    borderTopRightRadius : 20 ,
  },   
  modalDataContainer:{
    // flex:1,
    width:"100%",
    borderWidth:1,
    borderBottomWidth:1,
    borderColor:BimColors.border,
    marginTop:0,
    // height:230,
    padding:20,
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
  } ,  
  image :{
    width:"100%",
    // width: 300,
    height:200,
    marginRight :1 ,
    marginLeft :1 ,
    marginTop :1 ,
    marginBottom :1 ,
    borderRadius:10,
  } ,
  titleWrapper: 
  {
    //flex:1,
    flexDirection : "row",
    justifyContent: 'flex-start',
    alignItems:'center',
    backgroundColor:"#fff",
    width:'100%',
    borderWidth:0,
    borderBottomWidth : 1,
    borderColor: BimColors.border,
    paddingRight:10,
    margin:0,
    marginBottom:5,
    height:30
  },  
  titleWrapperLeftPanel: 
  {
    flex:6,
    flexDirection : "row",
    justifyContent: 'flex-start',
    alignItems:'center',
    backgroundColor:"#fff",
    width:'100%',
    borderWidth:0,
    borderBottomWidth : 0,
    borderColor: BimColors.border,
    //padding:10,
    paddingLeft:5,
  },    
  titleWrapperRightPanel: 
  {
    //flex:1,
    //flexDirection : "row",
    //justifyContent: 'flex-end',
    //alignItems:'center',
    position:'absolute',
    zIndex:100,
    right:5,
    top:2,
    backgroundColor:"#fff",
    //width:'100%',
    borderWidth:0,
    borderBottomWidth : 0,
    borderColor: BimColors.border,
    paddingRight:0,
    paddingVertical:1,
    //margin:5
  },    
  subTitleWrapper: 
  {
    flexDirection : "column",
    justifyContent: 'flex-start',
    alignItems:'center',
    backgroundColor:"#fff",
    width:'100%',
    borderTopWidth:1,
    borderColor:BimColors.border,
    padding:5,
    marginHorizontal:5,
    marginTop:5,
  },       
  hilighter:{
    borderRadius : 0 ,
    padding:5

  },
  sendMessageBox:{
    height:300,
  }  ,
  contextWrapper:{
    flex:1,
    width:'100%',
    flexDirection :"column",
    justifyContent : 'flex-start' ,
    alignItems:'flex-start',
    padding:10,
    borderWidth:0,
    // borderBottomWidth:0,
    borderColor:'black'//BimColors.border,
  },  
  componentWarpper :
  {
    borderWidth:0,
    borderColor:BimColors.border,
    //margin:5,
    paddingBottom:0,
  },    
});

export default BimAdvertCard;

