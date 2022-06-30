import React from 'react';
import { Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import { StyleSheet , View } from 'react-native';
import { BimColors } from '../settings';


//BimLogger.log(Dimensions.get('window').width);
//BimLogger.log(Dimensions.get('window').height);
function BimActivityIndicator({visible = false , isBordersRadius = false}) {
    if(!visible) return null
    return (
          <View style={[styles.overlay , isBordersRadius?{borderRadius:10} : {}]}>
            <LottieView 
              autoPlay
              loop
              source={require('../assets/animations/loader.json')} 
              style={{
                zIndex:100,
                position: 'absolute',
              }}                         
            />
          </View>            
          );
  }
  const styles = StyleSheet.create({ 
    overlay : 
    {
      width:'100%',
      height:'100%',
      opacity:0.8 ,
      borderWidth:0,
      borderColor:BimColors.border,  
      backgroundColor: "black",
      position:'absolute',
      zIndex:1,      
    },  
  });
export default BimActivityIndicator;

