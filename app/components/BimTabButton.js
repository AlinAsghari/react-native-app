import React from 'react';
import { ImageBackground , StyleSheet , View , Image , Text , TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

// import{BimText } from '../components'
import { BimColors , BimConfiguration } from '../settings';


// react statless component
function BimTabButton({ 
  name , 
  size = 40 , 
  backgroundColor = BimColors.tabButton , 
  iconColor = "#fff" ,
  hasBorder = false,
  borderColor=BimColors.border,
  onPress
  }) {
    return (
          <TouchableOpacity onPress={onPress}>
            <View style={iconWrapper(backgroundColor ,  hasBorder , borderColor , size)}> 
              <MaterialCommunityIcons name="plus-circle" size={30} color={iconColor}  />
            </View>
          </TouchableOpacity>
          );
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
    borderWidth:2 ,
    top : 5, 
    right : 10
  }
}
export default BimTabButton;

