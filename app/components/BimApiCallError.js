import React from 'react';
import { ImageBackground , StyleSheet , View , Image , Text } from 'react-native';
import {MaterialCommunityIcons , Ionicons} from '@expo/vector-icons'

// import{BimText } from '../components'
import { BimColors , BimConfiguration } from '../settings';
import BimText from './BimText';
import BimButton from './BimButton';
import Modal from 'react-native-modal';


// react statless component
function BimApiCallError({ 
  backgroundColor = "#000" , 
  onCloseEventInParentHandler , 
  errorCode ,
  errorDesc ,
  buttonText = "Refresh ...",
  onPress,
  }) {

    const[isVisible , setIsVisible] = React.useState(true);
    
    return (
      <Modal
        hasBackdrop={true}
        backdropOpacity={1}
        backdropColor={'rgba(0, 0, 0, 0.8)'}
        isVisible={(!onCloseEventInParentHandler)?isVisible : true }
      >
        <View style={styles.errorContainer}> 
          <View style={styles.errorScreen}> 
              <View style={styles.leftSide}> 
                <Ionicons name={'warning-outline'} size={70} color="yellow"/>
              </View>
              <View style={styles.rightSide1}> 
                <BimText maxnumberOfLines={4}> {errorCode} : {errorDecoder(errorCode , errorDesc)} </BimText>                              
              </View>
          </View>
          <View style={styles.buttonContainer}> 
            {
              onPress &&
              <BimButton 
                    text={buttonText} 
                    addSpanStyle = {{width : 200 , marginRight:20}}
                    buttonColor="#3BCE8A" 
                    iconName= "refresh"  
                    iconSize={30} 
                    iconColor={BimColors.buttonIconColor}  
                    onPress={ onPress } />               
            }
            <BimButton 
                    text="Close" 
                    //buttonColor={BimColors.closeButton}
                    addSpanStyle = {{width : 200}}
                    buttonColor={BimColors.buttonTypeB} 
                    iconName= "close-box"  
                    iconSize={30} 
                    iconColor={BimColors.buttonIconColor}  
                    onPress={ () => {
                      if(!onCloseEventInParentHandler)
                        setIsVisible(false);
                      else
                        onCloseEventInParentHandler();
                    } } />               
          </View>
        </View>      
    </Modal>
      );
  }
const errorDecoder = function( errorCode , errorDesc) {
  var errorMessage = "";
  //BimLogger.log(errorDesc);
  if(errorDesc)
    return errorDesc;

  switch(errorCode)
  {
    case 'CLIENT_ERROR' : 
     errorMessage = "Application on your device encountered inconvenient unknown errror... ";
      break;
    case 'SERVER_ERROR' : 
      errorMessage = "Application Server encountered inconvenient unknown errror...";
      break;
    case 'TIMEOUT_ERROR' : 
      errorMessage = "Application Server encountered time out exception error...";
      break;
    case 'CONNECTION_ERROR' : 
     errorMessage = "Application Server encountered connection error...";
      break;
    case 'NETWORK_ERROR' : 
      errorMessage = "Application Server is not reachable, check up your network on your device...";
      break;
    case 'CANCEL_ERROR' : 
      errorMessage = "Action has been canceled...";
      break;
    
    default :
      errorMessage = "Unkonw Error...";
      break;
  }
  //BimLogger.log(errorDesc)
  return errorDesc
}  
const styles = StyleSheet.create({ 
  errorContainer: 
  {
    flex:1 , 
    height:'100%',
    padding:1,
    flexDirection : "column",
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorScreen: 
  {
    width:'100%',
    minHeight :120,
    flexDirection : "row",
    justifyContent: 'center',
    alignItems: 'center',
    padding : 10,
    borderWidth:1,
    borderColor:BimColors.border,  
    backgroundColor: BimColors.errorBox,
    borderRadius :5 ,
    borderBottomLeftRadius : 0,
    borderBottomRightRadius : 0,
    marginBottom:0,    
  }, 
  buttonContainer: 
  {
    width:'100%',
    height:60,
    flexDirection : "row",
    justifyContent: 'center',
    alignItems: 'center',
    padding : 2,
    paddingTop:10,
    borderWidth:1,
    borderColor:BimColors.border,  
    backgroundColor: BimColors.light,
    borderRadius :5 ,
    borderTopLeftRadius : 0,
    borderTopRightRadius : 0,    
    marginBottom:1,    
  }, 

  leftSide :{
    width:70,
    height:'100%',
    // borderColor:BimColors.border,  
    // backgroundColor: "black",
    borderWidth: 0 ,
  },
  rightSide1 :{
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height:'100%',
    paddingLeft:10,  

    // borderWidth:1,
    // borderColor:BimColors.border,
  } ,
  rightSide22 :{
    width:160,
    justifyContent: 'center',
    alignItems: 'center',
    height:'100%',
    paddingTop:10,

  } ,  
})
export default BimApiCallError;

