import React from 'react';
import { ImageBackground , StyleSheet , View , Image , Text , TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {Swipeable , GestureHandlerRootView} from "react-native-gesture-handler"

// import{BimIcon , BimButton , BimText } from '../components'
import { BimColors , BimConfiguration } from '../settings';

import BimText from './BimText';
import BimIcon from './BimIcon';
import BimButton from './BimButton';
import BimCachableImage from './BimCachableImage';


// react statless component
function BimListItemMultiRow({
  title , 
  subTitle,
  image , 
  imageUrl , 
  iconComponent,
  imageUrlSize,
  onPress , 
  onDelete , 
  onRenderRightAction,
  addListItemStyle = "",
  maxnumberOfLines = 1
 }) 
 {
   //const singleRowStyle = isSinglRow? {alignSelf:"flex-start"} : ""
    return (
      <GestureHandlerRootView>
        <Swipeable onRenderRightAction={onRenderRightAction}>
          <TouchableHighlight style={styles.hilighter} underlayColor=  {BimColors.touchHighlight} onPress={onPress}>
              <View style= {[styles.listItemContainer , addListItemStyle] } >
                <View style={[styles.imageWrapper , {alignSelf:"flex-start"}]}>
                  { imageUrl && imageUrlSize && 
                      <BimCachableImage 
                        width={imageUrlSize}
                        height={imageUrlSize}
                        borderRadius= {imageUrlSize * 0.5}
                        //style={[styles.image , {width:imageUrlSize , height : imageUrlSize , borderRadius: imageUrlSize * 0.5}]} 
                        resizeMode='stretch' 
                        imageUrl={imageUrl } 
                      />
                  }                  
                  { image && <Image style={styles.image} resizeMode='stretch' source={image} />}
                  { iconComponent }
                </View>
                <View style={styles.textWrapper}>
                  {
                    title &&
                    <View style={styles.titleBox}>
                      <View style={styles.viewDividerLeft}>
                        <View style={styles.titleTextWrapper}>
                          <BimText textColor = {BimColors.headerText} isBold={true} maxnumberOfLines={maxnumberOfLines}> {title} </BimText>
                        </View>
                      </View>
                      {
                        onDelete &&
                        <View style={styles.viewDividerRight}>
                          <BimIcon name="trash-can" size={40} backgroundColor="white" hasBorder={true} 
                              iconColor={BimColors.deleteIcon} onPress={ onDelete } />
                        </View>
                      }
                    </View>
                  }
                  {
                    subTitle && 
                    <View style={styles.subtitleBox}>
                      <BimText maxnumberOfLines={maxnumberOfLines}> {subTitle} </BimText>
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
    backgroundColor:BimColors.white,
    // backgroundColor : "red",
    width:'100%',
    borderWidth:0,
    borderBottomWidth : 0,
    borderColor: BimColors.border,
    borderRadius : 0 ,
    overflow: 'hidden',
    paddingBottom :10 ,
    marginBottom:0
  },     
  imageWrapper: 
  {
    width:100,
    flexDirection : "column",
    justifyContent: 'center',
    alignItems:'center',
    alignSelf:"center",
    borderWidth:0,
    borderColor: BimColors.border,
    paddingRight:0,
    margin:0,
    marginBottom:0,
    paddingTop:4,
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
    margin:0,
  },   
  subtitleBox :{
    width:"100%",
    flexDirection : "row",
    justifyContent: 'flex-start',
    alignItems:'center',    
    borderWidth:0,
    borderBottomWidth : 0,
    borderColor: 'red',
    paddingTop:0,
    paddingRight:4
  } ,  
  titleBox :{
    //alignSelf: 'flex-start' ,
    //minWidth:150,
     width:'100%',
    flexDirection : "row",
    justifyContent: 'flex-start',
    alignItems:'center',    
    borderWidth:0,
    borderBottomWidth : 0,
    borderColor: BimColors.border,
    paddingLeft:3
  } ,  
  viewDividerLeft: 
  {
    flex:1,
    flexDirection : "row",
    justifyContent: 'flex-start',
    alignItems:'center',
    width:'100%',
    borderWidth:0,
    borderBottomWidth : 0,
    borderColor: BimColors.border,
    padding:0,
  },    
  viewDividerRight: 
  {
    flex:1,
    flexDirection : "row",
    justifyContent: 'flex-end',
    alignItems:'center',
    width:'100%',
    borderWidth:0,
    borderBottomWidth : 0,
    borderColor: BimColors.border,
    padding:0,
    margin:5
  },   
  titleTextWrapper:
  {
    minWidth:150 , 
    borderBottomColor:BimColors.border , 
    borderBottomWidth : 1,
    paddingBottom : 5
  }  ,
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

export default BimListItemMultiRow;

