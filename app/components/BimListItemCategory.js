import React from 'react';
import { ImageBackground , StyleSheet , View , Image , Text , TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
// import { BimIcon , BimButton , BimText } from '.'
import { BimColors , BimConfiguration } from '../settings';
import BimText from './BimText';
import BimIcon from './BimIcon';


// react statless component
function BimListItemCategory({
  text,
  image , 
  imageUrl , 
  imageUrlSize,
  iconName,
  iconSize,
  iconBackground,
  iconComponent,
  onPress , 
  addListItemStyle = "",
  textAlign,
  numberOfColumnsInARow
 }) 
 {
     return (
        <TouchableHighlight style={[styles.hilighter , getWidth(numberOfColumnsInARow) ]} underlayColor=  {BimColors.touchHighlight} onPress={onPress}>
          <View style= {[styles.listItemContainer , addListItemStyle] } >
            <View style={[styles.imageWrapper]}>
              { imageUrl && imageUrlSize && <Image style={[styles.image , {width:imageUrlSize , height : imageUrlSize , borderRadius: imageUrlSize * 0.5}]} resizeMode='stretch' source={{ uri: imageUrl }} />}
              { image && <Image style={styles.image} resizeMode='stretch' source={image} />}
              { iconComponent }
              { iconName && <BimIcon name={iconName} size={70} backgroundColor = {iconBackground} /> }
            </View> 
            <View style={styles.textWrapper}>
              {
                text && 
                <View style={styles.textBox}>
                  <BimText textAlign={textAlign} maxnumberOfLines={2}> {text} </BimText>
                </View>
              }
            </View>            
          </View>
        </TouchableHighlight>
    );
}
const getWidth = function(numberOfColumnsInARow){
  return {
    width: Math.floor( 100 / numberOfColumnsInARow) + "%"
  }
}
const styles = StyleSheet.create( {      
  listItemContainer: 
  {
    // width:100,
    flexDirection : "column",
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:BimColors.background,
    borderWidth:0,
    borderColor: BimColors.border,
    borderRadius : 0 ,
    overflow: 'hidden',
    marginBottom:0,

    width:"100%",
    paddingVertical:15,
    paddingHorizontal:30,
  },     
  imageWrapper: 
  {
    // width:80,
    flexDirection : "column",
    justifyContent: 'center',
    alignItems:'center',
    //alignSelf:"center",
    //alignSelf:"flex-start",
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
    // flex:1,
    flexDirection : "row",
    justifyContent: 'center',
    alignItems:'center',
    width:'100%',
    borderWidth:0,
    borderColor: BimColors.border,
    //paddingRight:1,
    margin:10,
    //marginLeft:5
  },   
  textBox :{
    width:"100%",
    // flexDirection : "row",
    // justifyContent: "center",
    // alignItems:"center",    
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
    // width:'100%',
    // borderWidth:1,
    // borderColor:"red"
  }, 
  image :{
    width:60,
    height:60,
    borderRadius:30,
    borderColor:BimColors.border , 
    borderWidth : 0,
  } ,      
});

export default BimListItemCategory;

