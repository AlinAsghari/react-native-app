import React from 'react';
import reactDom from 'react-dom';
import { ImageBackground , StyleSheet , View , Image , Text  } from 'react-native';
import { BimColors } from '../settings';
import { BimConfiguration , BimApiUrls } from '../settings/BimConfiguration';
// react statless component

function BimText({
  children,
  addStyle = "",
  textColor = BimColors.normalText,
  isBold = false,
  textAlign = 'left',
  maxnumberOfLines = 1,
  width="100%" , 
  fontSize , 
  fontFamily,
  ... otherProps
}) {
  const boldStyle = isBold? {fontWeight : "700"} : {}
  const fontSizeStyle = fontSize? {fontSize : fontSize} : {}
  const fontFamilyStyle = fontFamily? {fontFamily : fontFamily} : {}
    return (
      <Text 
        numberOfLines={maxnumberOfLines} 
        //textColor = {textColor}
        style={[styles.bimText , { color : textColor , textAlign : textAlign } , boldStyle , addStyle , {width} , fontSizeStyle , fontFamilyStyle]}
        {... otherProps}
        > 
          {children} 
      </Text>
    );
}

const styles = StyleSheet.create({    
  bimText: {
    fontSize:Platform.OS === 'android' ? BimConfiguration.androidFontSize : BimConfiguration.IosFontSize,
    fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir",
    lineHeight:25,
    borderWidth:0,
    borderColor:'black'
    },         
  });
export default BimText;

