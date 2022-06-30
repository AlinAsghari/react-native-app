import React from 'react';
import { View , StyleSheet , Image} from 'react-native';
import Constants from 'expo-constants';

// import{BimText , BimButton } from '.'
import { BimColors , BimConfiguration } from '../settings';
import BimButton from './BimButton';


// react statless component
function BimMasterScreenFooter({children , isLoginVisible=false }) {
    return (
      <View style={[styles.buttonWrapper, isLoginVisible?{display:'flex'} : {display:'none'}]} >
        <BimButton text="Login..." 
        buttonColor={BimColors.submitButton} 
        iconName= "email"  iconSize={30} 
        iconColor={BimColors.buttonIconColor}  
        onPress={ () => alert("Login") } />

        <BimButton 
        text="Register..." 
        buttonColor="#3BCE8A" 
        iconName= "content-save"  
        iconSize={30} 
        iconColor={BimColors.buttonIconColor}  
        onPress={ () => alert("Register") } />
      </View>
    );
}

const styles = StyleSheet.create({    

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
    borderColor:'black',
    backgroundColor:'#EDEDED',
  },     
  });
export default BimMasterScreenFooter;

