import React from 'react';
import reactDom from 'react-dom';
import { ImageBackground , StyleSheet , View , Image , Text , ScrollView} from 'react-native';
import { BimColors , BimConfiguration } from '../settings';
import BimImageInput from './BimImageInput';

function BimImageInputList({ 
  imageUrls = [] , 
  onAddImage,
  onRemoveImage,
  placeholder,
  canCropImage,
  width, 
  height,
  addPickerStyle,
  addContainerStyle
}) {
  const scrollView = React.useRef();
  return (
      <ScrollView ref={scrollView} horizontal={true} onContentSizeChange={ () => scrollView.current.scrollToEnd()}>
        <View style= { [ styles.imageListContainer , addContainerStyle ] }  >
          {
            imageUrls.map( ( uri ) => 
              <BimImageInput  
                key={uri}
                width = {width} 
                height = {height} 
                onChangeImage={() => onRemoveImage(uri)} 
                imageUrl= {uri}
                addStyle = {addPickerStyle}
                canCropImage = {canCropImage}
              /> 
            )
          }
          <BimImageInput
            width = {width} 
            height = {height} 
            placeholder = {placeholder}
            onChangeImage={onAddImage} 
          />         
        </View>
      </ScrollView>      
    );
}

const styles = StyleSheet.create({    
  imageListContainer: 
  {
    flexDirection : "row",
    justifyContent: 'flex-start',
    alignItems:'flex-start',
    //backgroundColor:BimColors.border,
    //backgroundColor : "red",
    width:'100%',
    // minHeight:200,
    borderWidth:0,
    borderBottomWidth : 0,
    borderColor: BimColors.border,
    borderRadius : 0 ,
    overflow: 'hidden',
    paddingBottom :0 ,
    marginBottom:0,
    borderRadius:25,
  },      
  });
export default BimImageInputList;

