import React from 'react';
import { ImageBackground , StyleSheet , View , Image , Text } from 'react-native';
import { BimColors , BimConfiguration } from '../settings';

// react statless component
function BimItemSeprator({
  marginTop= 0 ,
  marginBottom = 0,
}) {

    return (
      <View style={[styles.separator , marginTopStyle(marginTop) , marginBottomStyle(marginBottom)]} />  
    );
}
const marginTopStyle = function( margin ) {
  return {
    marginTop: margin,
  }
}
const marginBottomStyle = function( margin ) {
  return {
    marginBottom: margin,
  }
}
const styles = StyleSheet.create({    
  separator: 
  {
    // display:'none',
    width : '100%',
    height : 1 ,
    // marginVertical : 15 ,
    borderWidth:1,
    borderColor: BimColors.border,
  },         
});
export default BimItemSeprator;

