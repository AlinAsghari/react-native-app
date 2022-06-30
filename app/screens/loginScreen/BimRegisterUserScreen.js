import React from 'react';
import { ImageBackground , StyleSheet , View , Image , Text , ScrollView , TouchableWithoutFeedback} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { ErrorMessage, Formik } from 'formik';
import * as Yup  from 'yup';
import{
  BimText , BimButton , BimMasterScreen , BimTextInput ,BimFormikTextInput ,
  BimFormikButton , BimFormikForm, BimErrorMessage
} from '../../components'
import { BimColors , BimConfiguration } from '../../settings';
import apiUser from '../../api/apiUser';
import BimUploadProgressBar from '../../components/BimUploadProgressBar';
import BimActivityIndicator from '../../components/BimActivityIndicator';
import useAuth from '../../utility/hooks/useAuth';
import useApi from '../../utility/hooks/useApi';
import BimApiCallError from '../../components/BimApiCallError';

const validationSchema = Yup.object().shape({
  bimName :  Yup.string().required("name required").label("Name"),
  bimEmail :  Yup.string().required("email required").email("email format not valid").label("Email"),
  bimPassword :  Yup.string().required("password is required...").min(4).label("Password"),
})

function BimRegisterUserScreen(props) {
  const[ error , setError] = React.useState();
  const[ isApiErrorBoxVisible , setIsApiErrorBoxVisible] = React.useState(false);  
  const auth = useAuth();  
  const creatUserApi =  useApi(apiUser.createUser);
  const loginApi =  useApi(apiUser.login);


  const Submit = async (userInfo) =>
  {
    const userData = {name : userInfo.bimName , email : userInfo.bimEmail , password : userInfo.bimPassword }
    const responseCreateUser = await creatUserApi.request( userData );
    if(responseCreateUser.ok)
    {
      const responseLogin = await loginApi.request( userData.email  , userData.password );
      if(responseLogin.ok)
      {
        const userToken = responseLogin.data
        const loginUser = auth.logIn(userToken)
      }      
    }  
    setIsApiErrorBoxVisible(true);    
  }

  return (
    <>
      <BimActivityIndicator visible={creatUserApi.loading || loginApi.loading } />   
      { 
        (creatUserApi.hasError || loginApi.hasError ) && 
        isApiErrorBoxVisible &&
        <BimApiCallError 
          onCloseEventInParentHandler = { () => setIsApiErrorBoxVisible(false) }
          errorCode={creatUserApi.errorCode? creatUserApi.errorCode : loginApi.errorCode } 
          errorDesc={creatUserApi.errorDesc? creatUserApi.errorDesc : loginApi.errorDesc } 
        />         
      }
      <BimMasterScreen>
          <BimFormikForm
            initialValues={{bimName:"ali asghari" , bimEmail:"ali_asghari@yahoo.com" , bimPassword:"12345"}}
            onSubmit={(values) => Submit(values)} 
            validationSchema = {validationSchema}
          >
            <View style={styles.contextWrapper}>
                <View style={styles.modalHeader}>
                    <BimText textColor="white"> User Registration ...  </BimText>
                </View>
                <View style={[styles.modalDataContainer]}>
                  <View style={styles.componentWarpper}>
                    <BimErrorMessage visible={error}  errorMessage={error} />
                  </View>
                  <View style={styles.componentWarpper}>
                    <BimFormikTextInput  
                      name="bimName"
                      placeholder='Name' 
                      iconName="email" 
                      iconColor={BimColors.textInputIcon}
                      keyboardType = "email-address"
                      textContentType="emailAddress"
                    />                         
                  </View>                    
                  <View style={styles.componentWarpper}>
                    <BimFormikTextInput  
                      name="bimEmail"
                      placeholder='Email' 
                      iconName="email" 
                      iconColor={BimColors.textInputIcon}
                      keyboardType = "email-address"
                      textContentType="emailAddress"
                    />                         
                  </View>  
                  <View style={styles.componentWarpper}>
                    <BimFormikTextInput
                      name = "bimPassword"  
                      placeholder='Password' 
                      iconName="lock" 
                      iconColor={BimColors.textInputIcon}
                      secureTextEntry = {true}
                    />
                  </View>   
                </View>
                <View style={[styles.modalFooter]}>
                  <BimFormikButton
                    name = "btnSubmit" 
                    text="Login..." 
                    buttonColor={BimColors.okButton} 
                    iconName= "login"  
                    iconSize={30} 
                    iconColor={BimColors.buttonIconColor}  //"#FB3944"  
                    />
                </View>              
            </View>
          </BimFormikForm>
      </BimMasterScreen>    
    </>          
    );
}

const styles = StyleSheet.create({   
  boxWrapper:{
    flexDirection : "row",
    width: "100%",
    //backgroundColor : BimColors.background,
    borderRadius:15,
    borderWidth:1,
    borderColor:BimColors.border,
    height:50, 
    padding:10,
    // paddingLeft:20
    // marginTop:50,
  } ,
  flatList: 
  {
    flex:1,
   //  flexDirection : "column",
   //  justifyContent: 'flex-start',
   //  alignItems:'center',
    width:"100%",
    borderWidth:0,
    borderColor:BimColors.border,
    marginTop : 0,
    marginBottom :0,
    marginLeft : 5,
    marginRight : 5,
    padding : 0,
    paddingRight:5,
  },   
  modalDataContainer:{
    // flex:1,
    width:"100%",
    borderWidth:1,
    borderBottomWidth:0,
    borderColor:BimColors.border,
    marginTop:0,
    // height:350,
    padding:20,
  } ,
  modalHeader:{
    width:"100%",
    height:50,
    borderRadius:5,
    borderBottomLeftRadius : 0,
    borderBottomRightRadius : 0,
    borderWidth:1,
    borderBottomWidth:1,
    borderColor:BimColors.border,
    backgroundColor:BimColors.boxHeader,
    paddingLeft:20,
    paddingTop:10,
  },
  modalFooter:{
    width:"100%",
    height:60,
    borderRadius:5,
    borderTopLeftRadius : 0,
    borderTopRightRadius : 0,
    borderWidth:1,
    borderBottomWidth:1,
    borderColor:BimColors.border,
    paddingLeft:5,
    paddingTop:5
  }, 
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
  scroller:{
    width:'100%' ,
    height:'100%',
    flex:1,
    },
  componentWarpper :
  {
    borderWidth:0,
    borderColor:BimColors.border,
    margin:5,
    paddingBottom:5,
  },  
  });


export default BimRegisterUserScreen;

