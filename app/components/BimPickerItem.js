import React , { useState } from 'react';
import reactDom from 'react-dom';
import { ImageBackground , StyleSheet , View , Image , Text , Modal , 
         TextInput, TouchableHighlight, TouchableWithoutFeedback , FlatList
       } from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons';


// import { BimIcon , BimButton , BimText  , BimMasterScreenModal , BimListItemSingleRow , BimItemSeprator} from '.'
import { BimColors , BimConfiguration } from '../settings';
import BimIcon from './BimIcon';
import BimButton from './BimButton';
import BimText from './BimText';
import BimMasterScreenModal from './BimMasterScreenModal';
import BimListItemSingleRow from './BimListItemSingleRow';
import BimItemSeprator from './BimItemSeprator';
import BimListItemCategory from './BimListItemCategory';

function BimPickerItem({
  name,
  placeholder = "...",
  items ,
  onSelectItem,
  selectItemVariable,
  iconName = "apps",
  iconSize = 30,
  iconColor="black" ,
  image , 
  imageUrl , 
  imageUrlSize,
  iconComponent,
  keyIconName = "apps",
  keyIconBackground = BimColors.iconBackground,                                      
  addStyle = "",
  textColor = BimColors.normalText,
  isBold = false,
  textAlign = 'left',
  width = "100%"
}) {
  const boldStyle = isBold? {fontWeight : "700"} : {}
  const [modalVisible , setModalVisible] = React.useState(false)
  return (
      <React.Fragment> 
        <TouchableWithoutFeedback onPress={ () => setModalVisible(true)} >
          <View style={[styles.boxWrapper , {width} ] } onPress={ () => setModalVisible(true)}>
              {
                iconName &&
                <MaterialCommunityIcons name={iconName} size={25} color={iconColor} onPress={ () => setModalVisible(true)}  />
              }
              <BimText 
                addStyle={{flex:1,paddingLeft:5}}
                textColor= {selectItemVariable? textColor : BimColors.placeHolderText } 
                textAlign = {textAlign} 
                onPress={ () => setModalVisible(true)} 
              >
                {selectItemVariable? selectItemVariable.value : placeholder}
              </BimText>
              <MaterialCommunityIcons name="chevron-down" size={25} color={iconColor}  onPress={ () => setModalVisible(true)} />
          </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="fade">
          <BimMasterScreenModal>
             <View style={styles.modalWrapper}>
              <View style={styles.modalHeader}>
                  <BimText textColor="white">Select Options...</BimText>
              </View>
              <View style={[styles.modalDataContainer]}>
                <FlatList 
                  style={styles.flatList}
                  data={items} 
                  keyExtractor={ x => x.key.toString() }
                  renderItem=
                  {
                    ({item}) =>
                            <BimListItemSingleRow 
                                text={item.value} 
                                image={image}
                                imageUrl={imageUrl} 
                                imageUrlSize = {imageUrlSize}
                                iconComponent = {iconComponent}
                                iconName = {item.iconName? item.iconName : keyIconName}
                                iconSize={iconSize}
                                iconBackground = {item.backgroundColor? item.backgroundColor : keyIconBackground}
                                onPress = {() => { 
                                  setModalVisible(false) ; 
                                  onSelectItem(item)} } 
                              /> 

                  }  
                  ItemSeparatorComponent = {BimItemSeprator}
                />   
              </View>
              <View style={[styles.modalFooter]}>
                <BimButton 
                  text="Close..." 
                  buttonColor={BimColors.submitButton} 
                  iconName= "close"  
                  iconSize={30} 
                  iconColor="#FB3944"  
                  onPress={ () => setModalVisible(false)} />
              </View>              
            </View>
          </BimMasterScreenModal>
        </Modal>
      </React.Fragment>      
    );
}

const styles = StyleSheet.create({   
  boxWrapper:{
    flexDirection : "row",
    // width: "100%",
    //backgroundColor : BimColors.background,
    borderRadius:15,
    // borderWidth:1,
    borderBottomWidth:2,
    borderColor:BimColors.border,
    height:50, 
    padding:10,
    // paddingLeft:20
    // marginTop:50,
  } ,
  flatList: 
  {
    flex:1,
   //  flexDirection : "column",
   //  justifyContent: 'flex-start',
   //  alignItems:'center',
    width:"100%",
    borderWidth:0,
    borderColor:BimColors.border,
    marginTop : 0,
    marginBottom :0,
    marginLeft : 5,
    marginRight : 5,
    padding : 0,
    paddingRight:5,
  },   
  modalDataContainer:{
    flex:1,
    width:"100%",
    borderWidth:1,
    borderBottomWidth:0,
    borderColor:BimColors.border,
    marginTop:0,
  } ,
  modalHeader:{
    width:"100%",
    height:50,
    borderRadius:5,
    borderBottomLeftRadius : 0,
    borderBottomRightRadius : 0,
    borderWidth:1,
    borderBottomWidth:1,
    borderColor:BimColors.border,
    backgroundColor:BimColors.boxHeader,
    paddingLeft:20,
    paddingTop:10
  },
  modalFooter:{
    width:"100%",
    height:60,
    borderRadius:5,
    borderTopLeftRadius : 0,
    borderTopRightRadius : 0,
    borderWidth:1,
    borderBottomWidth:1,
    borderColor:BimColors.border,
    paddingLeft:5,
    paddingTop:5
  }, 
  modalWrapper:{
    flex:1,
    width:'100%',
    justifyContent : 'flex-start' ,
    alignItems:'flex-start',
    padding:10,
    borderWidth:0,
    // borderBottomWidth:0,
    borderColor:'black'//BimColors.border,
  }
  });
export default BimPickerItem;

