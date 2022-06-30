import React from 'react';
import reactDom from 'react-dom';
import { ImageBackground , StyleSheet , View , Image , Text  , Alert , TouchableWithoutFeedback} from 'react-native';
import { BimColors , BimConfiguration } from '../settings';
import BimIcon from './BimIcon';
import * as ImagePicker from "expo-image-picker";
import BimText from './BimText';
import BimLogger from '../utility/helpers/BimLogger';

function BimImageInput({
name,
placeholder,
imageUrl,
onChangeImage,
width = 200,
height = 200,
canCropImage = false,
addStyle,
... otherProps
}) {
  const[isEnableCropImage, setIsEnableCropImage] = React.useState(canCropImage);
  React.useEffect( () => { requestImagePickerCameraPermission(); } , []);
  React.useEffect( () => { setIsEnableCropImage(canCropImage); } , []);

  const requestImagePickerCameraPermission = async () => {
    var {granted} = await ImagePicker.requestCameraPermissionsAsync();
    if(!granted)
      alert( "you need to have camera permission...." );
  }

  const pickImage = async () => {
    try
    {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: isEnableCropImage,
        aspect: [3, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        onChangeImage(result.uri);
      }    
    }
    catch( error){
      BimLogger.log("pickImage error:" + error )
    }
  } 
  const  handleImagePicker = () =>{
    if(!imageUrl){
      pickImage()
    }
    else{
        Alert.alert("Delete" , "Are you sure, you want to delete image?" , [
          {text:"Yes" , onPress: () => onChangeImage(null) },
          {text:"No"}
        ] )
        return
    }
  }

    return (
      <TouchableWithoutFeedback onPress={handleImagePicker} >
        {/* <View style= {[styles.imageContainer , addStyle , {width: width , height:height }] }  > */}
        <View style= {[styles.imageContainer , addStyle , {width: width , height:height }] }  >
          {
            !imageUrl &&
            <BimIcon name="camera" size={50} backgroundColor = {BimColors.medium} />
          }
          {
            !imageUrl && placeholder &&
            <BimText textAlign='center' textColor={BimColors.placeHolderText}>{placeholder}</BimText>
          }
          {
            imageUrl &&
            <Image source={{uri:imageUrl}} style={styles.image} />
          }        
        </View>
      </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({    
  imageContainer: 
  {
    flexDirection : "column",
    justifyContent: 'center',
    alignItems:'center',
    //backgroundColor:BimColors.border,
    // backgroundColor : "red",
    width:'100%',
    borderWidth:1,
    borderBottomWidth : 1,
    borderColor: BimColors.border,
    borderRadius : 0 ,
    overflow: 'hidden',
    paddingBottom :0 ,
    marginBottom:0,
    borderRadius:25,
    marginRight:5,
  },    
  image :{
    width:'100%',
    height:'100%'
  }
  });
export default BimImageInput;

