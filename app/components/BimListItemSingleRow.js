import React from 'react';
import { ImageBackground , StyleSheet , View , Image , Text , TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {Swipeable , GestureHandlerRootView} from "react-native-gesture-handler"

// import{BimIcon , BimButton , BimText } from '../components'
import { BimColors , BimConfiguration } from '../settings';
import BimText from './BimText';
import BimIcon from './BimIcon';
import BimButton from './BimButton';
import { Image as ImageCachable } from 'react-native-expo-image-cache';


// react statless component
function BimListItemSingleRow({
  text,
  image , 
  imageUrl , 
  imageUrlSize,
  iconName,
  iconSize,
  iconBackground,
  iconComponent,
  onPress , 
  onDelete , 
  onRenderRightAction,
  addListItemStyle = ""
 }) 
 {
   //const singleRowStyle = isSinglRow? {alignSelf:"flex-start"} : ""
    return (
      <GestureHandlerRootView>
        <Swipeable onRenderRightAction={onRenderRightAction}>
          <TouchableHighlight style={styles.hilighter} underlayColor=  {BimColors.touchHighlight} onPress={onPress}>
            <View style= {[styles.listItemContainer , addListItemStyle] } >
              <View style={[styles.imageWrapper]}>
                { imageUrl && imageUrlSize && 
                    <ImageCachable 
                      style={[styles.image , {width:imageUrlSize , height : imageUrlSize , borderRadius: imageUrlSize * 0.5}]} 
                      resizeMode='stretch' 
                      uri={ imageUrl } 
                    />}
                { image && <Image style={styles.image} resizeMode='stretch' source={image} />}
                { iconComponent }
                { iconName && <BimIcon name={iconName} size={iconSize} backgroundColor = {iconBackground} /> }
              </View>
              <View style={styles.textWrapper}>
                {
                  text && 
                  <View style={styles.textBox}>
                    <BimText> {text} </BimText>
                  </View>
                }
              </View>            
            </View>
          </TouchableHighlight>
        </Swipeable>
      </GestureHandlerRootView>
    );
}
const styles = StyleSheet.create( {      
  listItemContainer: 
  {
    flexDirection : "row",
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:BimColors.background,
    // backgroundColor : "red",
    width:'100%',
    borderWidth:0,
    borderBottomWidth : 0,
    borderColor: BimColors.border,
    borderRadius : 0 ,
    overflow: 'hidden',
    // paddingBottom :10 ,
    marginBottom:0,
    paddingLeft:5
  },     
  imageWrapper: 
  {
    // width:80,
    flexDirection : "column",
    justifyContent: 'center',
    alignItems:'center',
    //alignSelf:"center",
    alignSelf:"flex-start",
    borderWidth:0,
    borderColor: BimColors.border,
    paddingRight:0,
    margin:0,
    marginBottom:0,
    paddingTop:10,
    overflow: 'hidden'
  },  
  textWrapper: 
  {
    flex:1,
    flexDirection : "column",
    justifyContent: 'center',
    alignItems:'center',
    width:'100%',
    borderWidth:0,
    borderColor: BimColors.border,
    paddingRight:1,
    margin:10,
    marginLeft:5
  },   
  textBox :{
    width:"100%",
    flexDirection : "row",
    justifyContent: 'flex-start',
    alignItems:'center',    
    borderWidth:0,
    borderBottomWidth : 0,
    borderColor: BimColors.border,
    paddingTop:0
  } ,  
  // viewDividerRight: 
  // {
  //   flex:1,
  //   flexDirection : "row",
  //   justifyContent: 'flex-end',
  //   alignItems:'center',
  //   width:'100%',
  //   borderWidth:0,
  //   borderBottomWidth : 0,
  //   borderColor: BimColors.border,
  //   padding:0,
  //   margin:5
  // },   
  hilighter:{
    borderRadius : 5 ,
  }, 
  image :{
    width:60,
    height:60,
    borderRadius:30,
    borderColor:BimColors.border , 
    borderWidth : 0,
  } ,      
});

export default BimListItemSingleRow;

