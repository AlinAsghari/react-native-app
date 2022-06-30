import React from 'react';
import { ImageBackground , StyleSheet , View , Image , Text , TouchableHighlight , Swipeable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import{BimIcon , BimButton , BimText , BimCachableImage } from '../../components'
import { BimColors , BimConfiguration } from '../../settings';


// react statless component
function BimBankCard( { title , subTitle, imageUrl , thumbnailUrl, 
  onPress , onDelete , showDelete=true , 
  maxnumberOfLines = 4 ,
  addStyle ,
  ImageHeight = 200
  } ) {
    //BimLogger.log(imageUrl);
    //BimLogger.log(thumbnailUrl);
    return (
      <TouchableHighlight style={[styles.hilighter]} underlayColor= {BimColors.touchHighlight} onPress={onPress}>
          <View style={[styles.cardBox , addStyle]} >
            <View style={styles.titleWrapper}>
              <View style={styles.titleWrapperLeftPanel}>
                <BimText isBold={true} textColor={BimColors.headerText}> {title} </BimText>
              </View>
              <View style={styles.titleWrapperRightPanel}>
                { showDelete &&
                <BimIcon name="trash-can" size={40} backgroundColor="white" hasBorder={true} 
                         iconColor={BimColors.deleteIcon} onPress={ onDelete } />
                }
              </View>
            </View>
            <View style={styles.imageWrapper}>
            { imageUrl && 
                      <BimCachableImage  
                        height={ImageHeight}
                        tint='light' 
                        thumbnailUrl={thumbnailUrl}
                        imageUrl={imageUrl}  
                      />            
              //<ImageCachable style={styles.image} uri={imageUrl} /> 
            }
            </View>
            <View style={styles.subTitleWrapper}>
              <BimText maxnumberOfLines={maxnumberOfLines}> {subTitle} </BimText>
            </View>
          </View>
        </TouchableHighlight>
    );
}
const styles = StyleSheet.create( {    
  cardBox: 
  {
    flexDirection : "column",
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:"#fff",
    width:'100%',
    borderWidth:1,
    borderColor:BimColors.border,
    borderRadius : 20 ,
    overflow: 'hidden',
    padding:15,
    //paddingRight: 10,
    paddingTop:5,
    paddingBottom :15 ,
    // marginBottom:10,
  },     
  imageWrapper: 
  {
    flexDirection : "column",
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:"#fff",
    width:'100%',
    borderWidth:0,
    // borderBottomWidth:0,
    borderBottomColor:BimColors.border,
    borderTopLeftRadius : 20 ,
    borderTopRightRadius : 20 ,
  },   
  image :{
    width:'100%',
    height:200,
    marginRight :1 ,
    marginLeft :1 ,
    marginTop :1 ,
    marginBottom :1 ,
    borderRadius:10,
  } ,
  titleWrapper: 
  {
    //flex:1,
    flexDirection : "row",
    justifyContent: 'flex-start',
    alignItems:'center',
    backgroundColor:"#fff",
    width:'100%',
    borderWidth:0,
    borderBottomWidth : 1,
    borderColor: BimColors.border,
    paddingRight:10,
    margin:0,
    marginBottom:10,
    height:50
  },  
  titleWrapperLeftPanel: 
  {
    flex:6,
    flexDirection : "row",
    justifyContent: 'flex-start',
    alignItems:'center',
    backgroundColor:"#fff",
    width:'100%',
    borderWidth:0,
    borderBottomWidth : 0,
    borderColor: BimColors.border,
    padding:10,
    paddingLeft:1,
  },    
  titleWrapperRightPanel: 
  {
    flex:1,
    flexDirection : "row",
    justifyContent: 'flex-end',
    alignItems:'center',
    backgroundColor:"#fff",
    width:'100%',
    borderWidth:0,
    borderBottomWidth : 0,
    borderColor: BimColors.border,
    paddingRight:0,
    paddingVertical:1,
    margin:0
  },    
  subTitleWrapper: 
  {
    flexDirection : "row",
    justifyContent: 'flex-start',
    alignItems:'center',
    backgroundColor:"#fff",
    width:'100%',
    borderTopWidth:1,
    borderColor:BimColors.border,
    padding:10,
    marginHorizontal:5,
    marginTop:10,
  },       
  hilighter:{
    borderRadius : 0 ,
    padding:10

  }
});

export default BimBankCard;

