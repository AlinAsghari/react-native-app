import React from 'react';
import { ImageBackground , StyleSheet , View , Image , Text , TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {useFormikContext} from 'formik'

// import{ BimIcon , BimButton } from '../components'
import{ BimColors , BimConfiguration } from '../settings';
import BimButton from './BimButton';


function BimFormikButton({ 
  name,
  text, 
  buttonColor, 
  iconName , 
  iconSize , 
  iconColor , 
  addSpanStyle,
  ... otherProps
}) {

  const{ handleSubmit }  = useFormikContext();

  return (
      <BimButton 
      name = {name}
      text = {text}
      buttonColor = {buttonColor} 
      iconName = {iconName}
      iconSize = {iconSize}
      iconColor = {iconColor}
      addSpanStyle = {addSpanStyle}
      {... otherProps}
      
      onPress={ handleSubmit} />
    );
}
const styles = StyleSheet.create( {

});

export default BimFormikButton;

