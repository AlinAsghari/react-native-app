import React from 'react';
import reactDom from 'react-dom';
import { ImageBackground , StyleSheet , View , Image , Text , TextInput } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

// import { BimIcon } from '../components'
import { BimColors } from '../settings';
import { BimConfiguration } from '../settings/BimConfiguration';


// react statless component
function BimTextInput({
  onChangeText,
  onBlur,
  value,
  //defaultValue,
  iconName = "form-select",
  iconColor= BimColors.textInputIcon,
  addStyle = "",
  maxLength , 
  textColor = BimColors.normalText,
  placeholderTextColor = BimColors.placeHolderText,
  isBold = false,
  textAlign = 'left',
  autoCapitalize = "none",
  autoCorrect = false ,
  keyboardType ,
  textContentType,
  secureTextEntry = false,
  multiline = false ,
  numberOfLines,
  hasBottomLine = true,
  width="100%" ,
  textAlignVertical='top',
  ... otherProps
}) {
  // const [text, setText] = React.useState(value);
  // const onBimTextChange = (text) => {
  //   setText(text);
  //   if(onChangeText) onChangeText(text);
  // }
  const boldStyle = isBold? {fontWeight : "700"} : {}
  const borderStyle = hasBottomLine? {} : {borderBottomWidth : 0} 
  
    return (
      <View style={[styles.boxWrapper , addStyle  , {width} , borderStyle]}>
          <MaterialCommunityIcons name={iconName} size={25} color={iconColor}  />
          <TextInput 
            onChangeText={onChangeText}
            //onChangeText={onChangeText}
            maxLength = {maxLength}
            onBlur={onBlur}
            value={value}
            //value={text}
            //defaultValue={defaultValue}
            style={[styles.bimTextInput , { color : textColor , textAlign : textAlign }]}  
            placeholderTextColor = {placeholderTextColor}
            autoCapitalize = {autoCapitalize}
            autoCorrect = {autoCorrect}
            keyboardType = {keyboardType}
            textContentType = {textContentType}
            secureTextEntry= {secureTextEntry}
            multiline ={multiline}
            numberOfLines={numberOfLines}
            textAlignVertical={textAlignVertical}
            {... otherProps} 
          />
      </View>
    );
}

const styles = StyleSheet.create({   
  boxWrapper:{
    //width:'100%',
    //flex:1,
    flexDirection : "row",
    // justifyContent:"flex-start",
    // alignItems:"flex-start",
    borderRadius:15,
    //borderWidth:1,
    borderBottomWidth:2,
    borderColor:BimColors.border,
    minHeight:50, 
    padding:10,
  } ,
  bimTextInput: {
    width:"100%",
    fontSize:Platform.OS === 'android' ? BimConfiguration.androidFontSize : BimConfiguration.IosFontSize ,
    fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir",
    paddingLeft:5
    },         
  });
export default BimTextInput;

