import React from 'react';
import reactDom from 'react-dom';
import { ImageBackground , StyleSheet , View , Image , Text , TextInput } from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons'
import {useFormikContext} from 'formik'

// import{BimIcon , BimTextInput , BimErrorMessage , BimPicker , BimPickerItem } from '.'
import{BimColors , BimConfiguration } from '../settings';
import BimPickerItem from './BimPickerItem';
import BimErrorMessage from './BimErrorMessage';
import BimImageInputList from './BimImageInputList';
import BimText from './BimText';


// react statless component
function BimFormikImageInputList({
  name ,
  placeholder,
  canCropImage,
  onAddImage,
  onRemoveImage,
  width,
  height,
  addPickerStyle,
  addContainerStyle,
  ... otherProps
}) {
  const{ touched , setFieldValue , errors , values }  = useFormikContext();
    return (
      <>

         <BimImageInputList
          name = {name}
          imageUrls= {values[name]} 
          //onAddImage={addImage} 
          //onRemoveImage={removeImage} 
          placeholder={placeholder}
          canCropImage={canCropImage} 
          width = {width} 
          height = {height} 

          onAddImage = {(item) => { 
            setFieldValue( name , [...values[name] , item ] );
            onAddImage( item ) 
          }}     
          onRemoveImage = {(item) => { 
            setFieldValue(name , values[name].filter( x => x !== item) );
            onRemoveImage(item) 
          }}                    
          addPickerStyle = {addPickerStyle}
          addContainerStyle = {addContainerStyle}
          {... otherProps}
          
          />           
        <BimErrorMessage 
          visible={(values[name].length > 0 )?  false : true } 
          errorMessage = {errors[name]} 
        />
      </>
    );
}

const styles = StyleSheet.create({      
 
});
export default BimFormikImageInputList;

