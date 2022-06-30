import React from 'react';
import reactDom from 'react-dom';
import { ImageBackground , StyleSheet , View , Image , Text } from 'react-native';
import { BimColors  } from '../settings';
import { BimConfiguration } from '../settings/BimConfiguration';

// react statless component
function BimErrorMessage({
  errorMessage,
  visible = false,
  children,
  textColor = BimColors.errorMessage,
  isBold = false,
  textAlign = 'left',
  maxnumberOfLines = 1,
  addStyle,
  ... otherProps
}) {
  const boldStyle = isBold? {fontWeight : "700"} : {}
  if( !visible || !errorMessage) return null; 
  return (
      <Text 
        numberOfLines={maxnumberOfLines} 
        style={[styles.bimText , { color : textColor , textAlign : textAlign } , boldStyle , addStyle]}
        {... otherProps}
        > 
          {children} {errorMessage}
      </Text>
    );
}

const styles = StyleSheet.create({    
  bimText: {
    fontSize:Platform.OS === 'android' ? BimConfiguration.androidFontSize : BimConfiguration.IosFontSize ,
    fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir",
    lineHeight:30,
    },         
  });
export default BimErrorMessage;

