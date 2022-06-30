import React from 'react';
import { ImageBackground , StyleSheet , View , Image , Text } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { Image as ImageCachable } from 'react-native-expo-image-cache';
import { BimColors , BimConfiguration } from '../settings';
import * as BimConfig  from '../settings/BimConfiguration';

function BimCachableImage({ 
  tint ,
  thumbnailUrl , 
  imageUrl ,
  height,
  width ,
  borderRadius,
  resizeMode
}) {
  const isProduction = BimConfig.isProductionEnvironment()
  const heightStyle = (height)? { height : height} : "";
  const widthStyle = (width)? { width : width} : "";
  const borderStyle = (borderRadius)? { borderRadius : borderRadius } : "";
  //BimLogger.log( "isProductionEnvironment = " + isProduction )
    if(isProduction)
    return (
            <ImageCachable 
                tint='light' 
                preview={{uri: thumbnailUrl}} 
                style={[styles.image , heightStyle , widthStyle , borderStyle]} 
                uri={imageUrl}/> 
          );
    else          
    return ( <Image 
                  style={[styles.image , heightStyle , widthStyle , borderStyle]}  
                  resizeMode={resizeMode} 
                  source={{ uri: imageUrl}} 
              /> )
  }

  const styles = StyleSheet.create( {    
    image :{
      width:"100%",
      height:"100%",
      //height:300,
      marginRight :1 ,
      marginLeft :1 ,
      marginTop :1 ,
      marginBottom :1 ,
      borderRadius:10,
    } ,
  });
  
export default BimCachableImage;

