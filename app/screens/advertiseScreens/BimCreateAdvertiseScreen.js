import React, { useState } from 'react';
import { ImageBackground , StyleSheet , View , Image , Text , 
  ScrollView , TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Formik } from 'formik';
import * as Yup  from 'yup';

import{
  BimText , BimButton , BimMasterScreen , BimTextInput ,BimFormikTextInput ,
  BimFormikButton , BimFormikForm , BimFormikPickerList, BimFormikPickerCategory,
  BimImageInput , BimFormikImageInput, BimFormikImageInputList, BimImageInputList,
  BimMapView
} from '../../components'
import { BimColors  } from '../../settings';
import useLocation from '../../utility/hooks/useLocation'
import { BimConfiguration, getLocationOnMap } from '../../settings/BimConfiguration';
import apiAdvertise from '../../api/apiAdvertise';
import BimUploadProgressBar from '../../components/BimUploadProgressBar';
import useUtility from '../../utility/helpers/BimCache';
import useApi from '../../utility/hooks/useApi';
import BimLogger from '../../utility/helpers/BimLogger';
//import {useNetInfo} from "@react-native-community/netinfo";

//BimLogger.log('=======================')
const categoryTypes = [
  { key : 1 , value : "Furniture", backgroundColor : "#EF6C60" , iconName :"table-furniture"},
  { key : 2 , value : "Cars", backgroundColor : "#EC9243" , iconName :"car-sports"},
  { key : 3 , value : "Cameras", backgroundColor : "#F6C644" , iconName :"camera"},
  { key : 4 , value : "Game", backgroundColor : "#5AC47F" , iconName :"gamepad"},
  { key : 5 , value : "Clothing", backgroundColor : "#4CB2B0" , iconName :"tshirt-v"},
  { key : 6 , value : "Sports", backgroundColor : "#4A94E2" , iconName :"football"},
  { key : 7 , value : "Movies & Music", backgroundColor : "#4976E2" , iconName :"music"},
  { key : 8 , value : "Books", backgroundColor : "#9064DB" , iconName :"book-account"},
  { key : 9 , value : "Other", backgroundColor : "#677A92" , iconName :"cellphone"},
]

function BimCreateAdvertiseScreen(props) {  
  
  const[ network , setNetwork] = React.useState(false);
  const[ uploadVisible , setUploadVisible] = React.useState(false);
  const[ progress , setProgress] = React.useState(0);
  const onUploadProgress = ( progress ) => setProgress(progress);
  const addAdvertApi =  useApi(apiAdvertise.addAdvert);

  const extractLocation = useLocation(); 
  const currentLocation = (!extractLocation)? extractLocation : BimConfiguration.TehranLocation;
  const currentLocationOnMap = getLocationOnMap(currentLocation);
  

  const handleSubmit = async ( values , { resetForm }) =>
  {
    const advertise = values;
    setProgress(0);
    setUploadVisible(true);
    const response = await addAdvertApi.request({ ...advertise , location : currentLocation} , onUploadProgress );
  
    if(!response.ok)
    {
      setUploadVisible(false)
      return alert('Could not save the advertise....')
    }
    alert('Success is Done ...')
    resetForm();
  }
  
  const validationSchema = Yup.object().shape({
    bimTitle: Yup.string().required("title required").min(1 , "min is 1").label("Title"),
    bimPrice: Yup.number("just number...").required("price is required").min(1 , "min is 1").max(10000 , "max is 1000").label("Price"),
    bimDescription:  Yup.string().label("Description"),
    bimCategoryType:   Yup.object().required().nullable().label("Category"),
    bimAdvertiseImages:  Yup.array().test({ message: 'please select and image', test: arr => arr.length !== 0}).required().nullable().label("PersonPictures"),
  })
  const categoryTypeChanged = function(item)
  {
    BimLogger.log( " categoryType : { key :  " + item.key + " , value : " + item.value + " }" );
  }
 
  return ( 
    <>
    <BimUploadProgressBar onDoneCallback={() => setUploadVisible(false) } visible={uploadVisible} progress={progress} />
    <BimMasterScreen isLoginVisible={false}>
        <ScrollView style={styles.scroller}>
          <BimFormikForm
            initialValues={{ 
                             bimTitle :"" , 
                             bimPrice :"" , 
                             bimDescription :"" , 
                             bimCategoryType : null , 
                             bimAdvertiseImages : [],
                          }}
            onSubmit={handleSubmit} 
            validationSchema = {validationSchema}>
            <View style={styles.contextWrapper}>
                <View style={styles.modalHeader}>
                    <BimText textColor="white"> Data Entry Info ...  </BimText>
                </View>
                <View style={[styles.dataContainer]}>
                  <View style={styles.componentWarpper}>
                    <BimFormikTextInput  
                      name="bimTitle"
                      placeholder='Title' 
                      maxLength={50}
                      iconName="subtitles" 
                    />                         
                  </View>  
                  <View style={styles.componentWarpper}>
                    <BimFormikTextInput
                      name = "bimPrice"  
                      placeholder='Price' 
                      maxLength={8}
                      keyboardType="numeric"
                      // width = {120}  
                    />
                  </View>   
                  <View style={styles.componentWarpper}>
                    <BimFormikPickerCategory
                      name = "bimCategoryType"  
                      items={categoryTypes}
                      onSelectItem= {(item) => categoryTypeChanged(item)} 
                      placeholder='CategoryType' 
                      numberOfColumns = {3}
                      maxLength={8}
                    />
                  </View>                     
                  <View style={styles.componentWarpper}>
                    <BimFormikTextInput
                      name = "bimDescription"  
                      placeholder='Description' 
                      multiline={true}
                      numberOfLines={3}
                      maxLength={200}
                    />
                  </View>   
                  <View style={[styles.componentWarpperColumnar]}>
                      <View style={[styles.modalWrapper  , {flex:2 }]}>
                          <View style={styles.modalHeader}>
                              <BimText textColor="white">ImageList in Formik ... </BimText>
                          </View>
                          <View style={[styles.imageDataContainer]}>
                            <BimFormikImageInputList 
                              name="bimAdvertiseImages"
                              onAddImage={( item ) => BimLogger.log(" added new image to list =>" + item )}
                              onRemoveImage={( item ) => BimLogger.log(" remove new image from list =>" + item )}
                              // placeholder="picture list"
                              canCropImage={false} 
                              width = {80} 
                              height = {80} 
                            />                             
                          </View>
                      </View>
                  </View>                    
                  <View style={styles.componentWarpperColumnar}>
                      <View style={[styles.modalWrapper , {flex:1 }]}>
                          <View style={styles.modalHeader}>
                              <BimText textColor="white"> location of user </BimText>
                          </View>
                          <View style={[styles.mapDataContainer]}>
                              <BimMapView
                                initialRegion={currentLocationOnMap}
                                // regionMarkers={markers}
                              />                    
                          </View>
                      </View>  
                  </View>     
                  <View style={styles.componentWarpper}>
                  </View>   
                </View>
                <View style={[styles.modalFooter]}>
                  <BimFormikButton
                    name = "btnSubmit" 
                    text="Post..." 
                    buttonColor={BimColors.submitButton} 
                    iconName= "login"  
                    iconSize={30} 
                    iconColor={BimColors.buttonIconColor}  //"#FB3944"  
                    />
                </View>              
            </View>
          </BimFormikForm>
        </ScrollView>          
      </BimMasterScreen>  
    </>            
    );
}

const styles = StyleSheet.create({   
  boxWrapper:{
    flexDirection : "row",
    width: "100%",
    borderRadius:15,
    borderWidth:1,
    borderColor:BimColors.border,
    height:50, 
    padding:10,
  } ,
  flatList: 
  {
    flex:1,
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
  dataContainer:{
    width:"100%",
    borderWidth:1,
    borderColor:BimColors.border,
    marginTop:0,
    padding:1,
  } ,
  imageDataContainer:{
    width:"100%",
    borderWidth:1,
    borderColor:BimColors.border,
    marginTop:0,
    padding:10,
  } ,

  mapDataContainer:{
    width:"100%",
    height:400,
    borderWidth:1,
    borderColor:BimColors.border,
    marginTop:0,
    padding:0,
  } ,
  modalHeader:{
    width:"100%",
    height:35,
    borderRadius:5,
    borderBottomLeftRadius : 0,
    borderBottomRightRadius : 0,
    borderWidth:1,
    borderBottomWidth:1,
    borderColor:BimColors.border,
    backgroundColor:BimColors.boxHeader,
    paddingLeft:10,
    paddingTop:3,
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
  contextWrapper:{
    flex:1,
    width:'100%',
    flexDirection :"column",
    justifyContent : 'flex-start' ,
    alignItems:'flex-start',
    padding:5,
    borderWidth:0,
    borderColor:'black'
  },
  componentWarpper :
  {
    borderWidth:0,
    borderColor:BimColors.border,
    margin:5,
    paddingBottom:5,
  },  
  scroller:{
    width:'100%' ,
    height:'100%',
    flex:1,
    },
  componentWarpperColumnar :
  {
    flexDirection : "row",
    justifyContent : 'flex-start' ,
    alignItems:'flex-start',
    borderWidth:0,
    borderColor:BimColors.border,
    margin:5,
    paddingBottom:5,
  },    
  });


export default BimCreateAdvertiseScreen;

