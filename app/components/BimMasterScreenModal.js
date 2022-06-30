import React from 'react';
import { SafeAreaView , StyleSheet ,View} from 'react-native';
import Constants from 'expo-constants';

// import{BimHeader , BimLogin , BimMasterScreen } from '.'
import { BimColors , BimConfiguration } from '../settings';
import BimMasterScreen from './BimMasterScreen';


// react statless component
function BimMasterScreenModal({
  children , 
  addChildContainerStyle = "",
  addScreenStyle = "",
  }) {
    return (
      <BimMasterScreen
      children = {children} 
      addChildContainerStyle={addChildContainerStyle}  
      addScreenStyle={addScreenStyle}>

      </BimMasterScreen>
    );
}

const styles = StyleSheet.create({    
    screenArea: 
    {
        flex: 1,
        flexDirection : "row",
        justifyContent: 'flex-start',
        backgroundColor: BimColors.background,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight ,//Platform.OS === 'android' ? StatusBar.currentHeight : 0
        marginHorizontal : 0,
        marginBottom : 0 ,
        padding : 0,
        borderWidth:0,
        borderColor:'red',        
    }, 
    childContainer: 
    {
      flex:1,
      flexDirection : "column",
      justifyContent: 'flex-start',
      alignItems:'center',
      width:"100%",
      borderWidth:0,
      borderColor:'green',
      marginTop : 0,
      marginBottom :0,
      marginLeft : 0,
      marginRight : 0,
      padding : 0,
    },       
    parentContainer: 
    {
      flex: 1,
      flexDirection : "column",
      justifyContent: 'flex-start',
      alignItems:'center' , 
      // backgroundColor: BimColors.background,
      width:'100%',
      // height: '100%',
      borderWidth:0,
      borderColor:'black',
      marginTop : 0 ,
      marginBottom : 0 ,
      marginLeft : 0 ,
      marginRight : 0 ,
    },            
  });
export default BimMasterScreenModal;

