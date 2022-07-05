import React from 'react';
import { ImageBackground , StyleSheet , View , Image , Text , ScrollView , TouchableWithoutFeedback} from 'react-native';
//import {styles}  from '../settings/AppStyles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import{BimText , BimButton , BimMasterScreenHeader , BimMasterScreen} from '../../components'
import { BimColors , BimConfiguration } from '../../settings';
// import routes from "../../settings/BimRoutes";
import BimRoutes from '../../settings/BimRoutes';

// react statless component
function BimWelcomeScreen({ navigation , route }) {
    return (
      <BimMasterScreen>
          <ImageBackground 
            style={styles.backgroundScreen} 
            blurRadius={1} 
            resizeMode='cover' 
            source={require("../../assets/backgroundBiz.jpg")}>
          </ImageBackground>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../../assets/logo-red.png')} />
            <BimText isBold={true} textColor={BimColors.normalText} addStyle={{paddingTop:10}}> Sell what you don't need</BimText>

          </View>
          <View style={styles.buttonContainer}>

          <BimButton 
            text="Register New User ..." 
            buttonColor={BimColors.buttonTypeA} 
            iconName= "content-save"  
            iconSize={30} 
            iconColor={BimColors.buttonTypeA_Icon}  
            onPress={ () => navigation.navigate(BimRoutes.USER_REGISTRATION)} />

          {/* <BimButton 
            text="Data Entry Example Form ..." 
            buttonColor={BimColors.buttonTypeC} 
            iconName= "content-save"    
            iconSize={30} 
            iconColor={BimColors.buttonTypeC_Icon}  
            onPress={ () => navigation.navigate(BimRoutes.DATA_ENTRY_EXAMPLE_FORM)} /> */}

            <BimButton 
              text="Login..." 
              buttonColor={BimColors.buttonTypeB} 
              iconName= "email"  
              iconSize={30} 
              iconColor={BimColors.buttonTypeB_Icon}  
              onPress={ () => navigation.navigate(BimRoutes.USER_LOGIN)} />
          </View>

      </BimMasterScreen>              

    );
}

const styles = StyleSheet.create( {
  logoContainer:{
    position: 'absolute',
    justifyContent:'center',
    alignItems:'center',
    top:50,
  },
  buttonContainer : {
    position: 'absolute',
    justifyContent:'center',
    alignItems:'center',
    bottom:5,
    width:'100%',
    padding: 10
  },
  logo : {
    height:75,
    width:75,
    paddingBottom:10,
  },
  backgroundScreen: 
  {
    flex: 1,
    flexDirection : "column",
    justifyContent: 'flex-end',
    alignItems:'center' , 
    backgroundColor:'#e63c4b',
    width:'100%',
    borderWidth:0,
    borderColor:BimColors.border,
  },        
  scroller:{
    width:'100%' ,
    height:'100%',
    flex:1,
  },  
  buttonWrapper: 
  {
    height:150,
    flexDirection : "column",
    justifyContent: 'center',
    alignItems:'center',
    width:"100%",
    paddingRight:50,
    paddingLeft:50,
    paddingTop:10,
    paddingBottom:10,
    borderWidth:0,
    // borderColor:'black',
    // backgroundColor:'#EDEDED',
  },     

});

export default BimWelcomeScreen;

