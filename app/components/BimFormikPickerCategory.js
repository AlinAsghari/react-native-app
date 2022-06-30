import React from 'react';
import reactDom from 'react-dom';
import { ImageBackground , StyleSheet , View , Image , Text  , TextInput} from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons'
import {useFormikContext} from 'formik'

// import{BimIcon , BimTextInput , BimErrorMessage , BimPickerCategory } from '.'
import { BimColors , BimConfiguration } from '../settings';
import BimPickerCategory from './BimPickerCategory';
import BimErrorMessage from './BimErrorMessage';


// react statless component
function BimFormikPickerCategory({
  name ,
  items ,
  onSelectItem,
  //selectItemVariable,
  placeholder = "...",
  iconName = "form-select",
  iconSize = 30,
  iconColor= BimColors.textInputIcon,
  image , 
  imageUrl , 
  imageUrlSize,
  iconComponent,
  keyIconName ,
  keyIconBackground,                                     
  addStyle = "",
  textColor = BimColors.normalText,
  isBold = false,
  textAlign = 'left',
  width , 
  numberOfColumns,
}) {
  const{ touched , setFieldValue , errors , values}  = useFormikContext();
    return (
      <>
        <BimPickerCategory 
          items = {items}
          onSelectItem = {(item) => { 
            setFieldValue(name , item);
            onSelectItem(item) 
          }}
          selectItemVariable = {values[name]}
          numberOfColumns= {numberOfColumns}
          placeholder = {placeholder}         
          iconName = {iconName}
          iconSize = {iconSize}
          iconColor= {iconColor}
          image = {image}
          imageUrl = {imageUrl}
          imageUrlSize = {imageUrlSize}
          iconComponent = {iconComponent}
          keyIconName =  {keyIconName}
          keyIconBackground = {keyIconBackground}                                     
          addStyle = {addStyle}
          textColor = {textColor}
          isBold = {isBold}
          textAlign = {textAlign}
          width = {width}
        /> 
        <BimErrorMessage 
          visible={(values[name] ||  values[name]=="")?  false : true } 
          errorMessage = {errors[name]} 
        />
      </>
    );
}

const styles = StyleSheet.create({          
  });
export default BimFormikPickerCategory;

