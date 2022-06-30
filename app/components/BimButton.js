import React from 'react';
import { ImageBackground , StyleSheet , View , Image , Text , TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { BimIcon } from './BimIcon'
import { BimColors } from '../settings';
import { BimConfiguration } from '../settings/BimConfiguration';

// react statless component
function BimButton({ 
  name ="Btn",
  text  = "button", 
  buttonColor = "gold" , 
  iconName = "message" , 
  iconSize = 30 , 
  iconColor = "#FB3944" , 
  onPress,
  addSpanStyle = "",
  ... otherProps
}) {
    return (
      <TouchableOpacity style={[touchableWrapper(buttonColor) , addSpanStyle]} onPress={onPress}> 
        <View style={[styles.buttonWrapper]} >
          <MaterialCommunityIcons name={iconName} size={iconSize} color={iconColor} />
          <Text style={styles.buttonText} {... otherProps}> {text} </Text>
        </View>
      </TouchableOpacity>
    );
}
const styles = StyleSheet.create( {
  buttonText: 
  {
    fontSize:Platform.OS === 'android' ? BimConfiguration.androidFontSize : BimConfiguration.IosFontSize ,
    fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir",
  },         
  buttonWrapper: 
  {
    flexDirection : "row",
    justifyContent: 'flex-start',
    alignItems:'center',
    borderWidth:0,
    borderColor:'black',
  },      
});

const touchableWrapper = function(buttonColor) {
  return {
    flexDirection : "row",
    justifyContent: 'center',
    alignItems:'center',
    fontWeight:'bold',    
    height:50 ,
    width: '100%',
    borderRadius : 25 ,
    backgroundColor: buttonColor ,
    marginBottom : 10 ,
  }
}

export default BimButton;

