import React from 'react';
import { SafeAreaView , StyleSheet ,View, ScrollView } from 'react-native';
import Constants from 'expo-constants';

//import{BimMasterScreenHeader , BimMasterScreenFooter } from '../components'
import { BimColors , BimConfiguration } from '../settings';
import BimMasterScreenHeader from './BimMasterScreenHeader';
import BimMasterScreenFooter from './BimMasterScreenFooter';
import BimApplicationError from './BimApplicationError';


function BimMasterScreen({
  children , 
  // isHeaderVisible = false , 
  isLoginVisible = false , 
  //isIneternetConnectionVisible = true , 
  isHeaderPaddingActive = false,
  addChildContainerStyle = "",
  addScreenStyle = "",
  onLayout
  }) {
    const addHeaderPaddingStyle = (isHeaderPaddingActive)? {paddingTop: Constants.statusBarHeight} : "" //Platform.OS === 'android' ? StatusBar.currentHeight : 0
    return (
    <SafeAreaView style= {[styles.screenArea , addHeaderPaddingStyle]} onLayout={onLayout}> 
        <View style={[styles.parentContainer]} >
            {/* {isIneternetConnectionVisible && <BimAppConnectionError /> } */}
            {/* {isHeaderVisible && <BimMasterScreenHeader/>} */}
            <View style={[styles.childContainer , addChildContainerStyle ]}>
                {children} 
            </View>
            <BimMasterScreenFooter isLoginVisible={isLoginVisible} />
        </View>    
      </SafeAreaView>
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
        // paddingTop : 0,
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
      width:'100%',
      borderWidth:0,
      borderColor:'black',
      marginTop : 0 ,
      marginBottom : 0 ,
      marginLeft : 0 ,
      marginRight : 0 ,
    },            
  });
export default BimMasterScreen;

