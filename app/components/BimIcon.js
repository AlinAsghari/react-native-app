import React from 'react';
import { ImageBackground , StyleSheet , View , Image , Text } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

// import{BimText } from '../components'
import { BimColors , BimConfiguration } from '../settings';


// react statless component
function BimIcon({ 
  wrappedInaCircle = true ,
  name , 
  size = 40 , 
  backgroundColor = "#000" , 
  iconColor = "#fff" ,
  hasBorder = false,
  borderColor=BimColors.border,
  onPress
  }) {
    if(wrappedInaCircle)
    return (
          <View style={iconWrapper(backgroundColor ,  hasBorder , borderColor , size)} onPress={onPress}> 
            <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor} onPress={onPress}  />
          </View>
          );
    else          
    return (  <MaterialCommunityIcons name={name} size={size} color={iconColor} onPress={onPress}  /> )
  }

const iconWrapper = function(backgroundColor , hasBorder , borderColor , size) {
  return {
    justifyContent: "center",
    alignItems:"center",   
    width : size,
    height : size ,
    borderRadius : size / 2 ,
    backgroundColor : backgroundColor,
    borderWidth: hasBorder? 1 : 0 ,
    borderColor: borderColor,    
  }
}
export default BimIcon;

