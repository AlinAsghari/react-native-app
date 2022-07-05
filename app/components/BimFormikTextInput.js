import React from 'react';
import reactDom from 'react-dom';
import { ImageBackground , StyleSheet , View , Image , Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import {MaterialCommunityIcons} from '@expo/vector-icons'
import {useFormikContext} from 'formik'

// import{BimIcon , BimTextInput , BimErrorMessage } from '../components'
import { BimColors , BimConfiguration } from '../settings';
import BimTextInput from './BimTextInput';
import BimErrorMessage from './BimErrorMessage';

// react statless component
function BimFormikTextInput({
  name ,
  value,
  onChangeText,
  onBlur,
  iconName ,
  iconColor ,
  addStyle ,
  textColor,
  isBold ,
  maxLength,
  textAlign ,
  autoCapitalize ,
  autoCorrect,
  keyboardType ,
  textContentType,
  secureTextEntry,
  multiline ,
  numberOfLines,
  hasBottomLine,
  width , 
  ... otherProps
}) {
  const{ touched , setFieldTouched , errors , setFieldValue , values}  = useFormikContext();
  // const[ isInitializationDone , setIsInitializationDone] = React.useState(false);

  // if( !isInitializationDone)  
  // {
  //   values[name] = value;
  //   setIsInitializationDone(true);
  // }
  
  // const intialize = async () => {
  //   if(value)  
  //   {
  //     BimLogger.log("intialize....")
  //     values[name] = value;
  //     setFieldValue(name , text);
  //   }
  // }

  // React.useEffect( () => intialize() , [] );

  // const setFormikFieldValue = ( text ) => {
  //   values[name] = text;
  //   touched[name] = true;

  //   //setFieldValue(name , text);
  // }
  return (
      <>
        <BimTextInput  
          onChangeText={(text) => setFieldValue(name , text) }
          onBlur = {() => setFieldTouched(name)}
          value={values[name]}
          //defaultValue = {defaultValue}
          iconName = {iconName}
          iconColor= {iconColor}
          addStyle = {addStyle}
          textColor = {textColor}
          isBold = {isBold}
          maxLength = {maxLength}
          textAlign = {textAlign}
          autoCapitalize = {autoCapitalize}
          autoCorrect = {autoCorrect}
          keyboardType = {keyboardType}
          textContentType = {textContentType}
          secureTextEntry = {secureTextEntry}
          multiline = {multiline}
          numberOfLines={numberOfLines}
          width = {width}
          hasBottomLine = {hasBottomLine}
          {... otherProps}
                /> 
        <BimErrorMessage visible={touched[name]} errorMessage = {errors[name]} />
      </>
    );
}

const styles = StyleSheet.create({          
  });
export default BimFormikTextInput;

