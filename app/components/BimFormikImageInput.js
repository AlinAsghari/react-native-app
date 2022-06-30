import React from 'react';
import reactDom from 'react-dom';
import { ImageBackground , StyleSheet , View , Image , Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import {MaterialCommunityIcons} from '@expo/vector-icons'
import {useFormikContext} from 'formik'

//import{BimIcon , BimTextInput , BimErrorMessage } from '../components'
import { BimColors , BimConfiguration } from '../settings';
import BimTextInput from './BimTextInput';
import BimErrorMessage from './BimErrorMessage';
import BimImageInput from './BimImageInput';

// react statless component
function BimFormikImageInput({
  name ,
  onChangeImage,
  placeholder,
  canCropImage,
  width,
  height,
  addStyle,
  ... otherProps

}) {
  const{ setFieldValue , errors , handleChange , values}  = useFormikContext();
  
  return (
      <>
        <BimImageInput 
          name = {name}
          imageUrl= {values[name]} 
          placeholder={placeholder}
          canCropImage={canCropImage} 
          width = {width} 
          height = {height} 
          //onChangeImage={setFieldValue(name)} 
          onChangeImage = {(item) => { 
            setFieldValue(name , item);
            onChangeImage(item) 
          }}          
          addStyle = {addStyle}
          {... otherProps}
        /> 
        {/* <BimErrorMessage visible={values[name]? false : true } errorMessage = {errors[name]} /> */}
        <BimErrorMessage 
          visible={(values[name] ||  values[name]=="")?  false : true } 
          errorMessage = {errors[name]} 
        />        
      </>
    );
}

const styles = StyleSheet.create({          
  });
export default BimFormikImageInput;

