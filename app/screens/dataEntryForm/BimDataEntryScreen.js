import React from 'react';
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
import { BimColors , BimConfiguration } from '../../settings';
import useLocation from '../../utility/hooks/useLocation'
import BimActivityIndicator from '../../components/BimActivityIndicator';
import BimLogger from '../../utility/helpers/BimLogger';

function BimDataEntryScreen(props) {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [imageUrls , setImageUrls] = React.useState([]);
  const[ isLoading , setIsLoading] = React.useState(false);

const handleSubmit = function(values , {resetForm})
{
  //alert( values );
  setIsLoading(true);
  alert("{ title : " + values.bimTitle +  " , price : " + values.bimPrice + " , Description : " +  values.bimDescription +
        " , category : "  + values.bimPersonType + " , favoriteType : " + values.bimFavoriteType  + 
        " , bimPersonImage :" + values.bimPersonImage + " , bimPersonPictures : " + values.bimPersonPictures + 
        " }");
  setIsLoading(false);
  resetForm();
}
const personTypes = [
  { key : 1 , value : "Full Time"},
  { key : 2 , value : "Part Time" , backgroundColor : "#F6C644" , iconName :"camera"},
  { key : 3 , value : "Full and Part Time" , backgroundColor : "#4CB2B0" , iconName :"football"},
  
]

const favoriteTypes = [
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
const arcTriumph = { latitude: 48.87389506, longitude: 2.295039178 , latitudeDelta: 0.01, longitudeDelta: 0.01};
const revolutionSquare = { latitude: 35.7012505, longitude: 51.39113148 , latitudeDelta: 0.01, longitudeDelta: 0.01};
const markers =
[
  {Id : 1 , region : arcTriumph , title : "Arc de Triumph in France..." , description :"Arc de Triumph in France..."},
  {Id : 2 , region : revolutionSquare , title : "Revolution Square in Iran..." , description :"Revolution Square in Iran..."},
];

const personTypeChanged = function(item)
{
  BimLogger.log( " personType : { key :  " + item.key + " , value : " + item.value + " }" );
}
const favoriteTypeChanged = function(item)
{
  BimLogger.log( " favoriteType : { key :  " + item.key + " , value : " + item.value + " }" );
}
const PersonImageChanged = function(uri)
{
  BimLogger.log( " PersonImag uri : " + uri );
}




//const location = useLocation()

const addImage = (newUri) => {
  setImageUrls( [...imageUrls , newUri ] ); // add an item to list
}
const removeImage = (delUri) => {
  setImageUrls(imageUrls.filter( x => x !== delUri)); // remove an item from a list
}  

const validationSchema = Yup.object().shape({
  bimTitle :  Yup.string().required("title required").min(1 , "min is 1").label("Title"),
  bimPrice :  Yup.number("just number...").required("price is required").min(1 , "min is 1").max(10000 , "max is 1000").label("Price"),
  bimDescription :  Yup.string().label("Description"),
  bimPersonType :   Yup.object().required().nullable().label("PersonType"),
  bimFavoriteType : Yup.object().required().nullable().label("Favorite"),
  bimPersonImage :  Yup.string().required().nullable().label("PersonImage"),
  bimPersonPictures :  Yup.array().test({ message: 'please select and image', test: arr => arr.length !== 0}).required().nullable().label("PersonPictures"),
})

// const {latitude , longitude} = useLocation()
const location = useLocation() 
//const currentUserLocation = {  latitude: location.latitude, longitude: location.longitude , latitudeDelta: 0.01, longitudeDelta: 0.01};
 
BimLogger.log(location)
  return (
    <>
    <BimActivityIndicator visible={isLoading} />    
      <BimMasterScreen isLoginVisible={false}>
        <ScrollView style={styles.scroller}>
          <BimFormikForm
            initialValues={{ 
                             bimTitle :"" , 
                             bimPrice :"" , 
                             bimDescription :"" , 
                             bimPersonType : null , 
                             bimFavoriteType : null,
                             bimPersonImage : null,
                             bimPersonPictures : [],
                          }}
            onSubmit={handleSubmit} 
            validationSchema = {validationSchema}
          >
            <View style={styles.contextWrapper}>
                <View style={styles.modalHeader}>
                    <BimText textColor="white">Data Entry Info...  </BimText>
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
                    <BimFormikPickerList
                      name = "bimPersonType"  
                      items={personTypes}
                      onSelectItem= {(item) => personTypeChanged(item)} 
                      placeholder='PersonType' 
                      maxLength={8}
                    />
                  </View>   
                  <View style={styles.componentWarpper}>
                    <BimFormikPickerCategory
                      name = "bimFavoriteType"  
                      items={favoriteTypes}
                      onSelectItem= {(item) => favoriteTypeChanged(item)} 
                      placeholder='FavoriteType' 
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
                      <View style={[styles.modalWrapper , {flex:1 , marginRight:5}]}>
                          <View style={styles.modalHeader}>
                              <BimText textColor="white">Image in Formik model </BimText>
                          </View>
                          <View style={[styles.imageDataContainer]}>
                            <BimFormikImageInput  
                              name="bimPersonImage"
                              onChangeImage={PersonImageChanged} 
                              // placeholder="Picture"
                              canCropImage={true} 
                              width = {80} 
                              height = {80} 
                            />                             
                          </View>
                      </View>
                      <View style={[styles.modalWrapper  , {flex:2 }]}>
                          <View style={styles.modalHeader}>
                              <BimText textColor="white">ImageList in Formik ... </BimText>
                          </View>
                          <View style={[styles.imageDataContainer]}>
                            <BimFormikImageInputList 
                              name="bimPersonPictures"
                              onAddImage={(item) => BimLogger.log(" added new image to list =>" + item)}
                              onRemoveImage={(item) => BimLogger.log(" remove new image from list =>" + item)}
                              // placeholder="picture list"
                              canCropImage={false} 
                              width = {80} 
                              height = {80} 
                            />                             
                          </View>
                      </View>
                  </View>                    
                  <View style={styles.componentWarpperColumnar}>
                      <View style={[styles.modalWrapper , {flex:1 , marginRight:5 }]}>
                          <View style={styles.modalHeader}>
                              <BimText textColor="white"> Image out of Formik model </BimText>
                          </View>
                          <View style={[styles.imageDataContainer]}>
                              <BimImageInput  
                                name = "ImgUserImage"
                                // placeholder="normal"
                                canCropImage={false} 
                                width = {80} 
                                height = {80} 
                                onChangeImage={(uri) => setSelectedImage(uri)} 
                                imageUrl= {selectedImage} 
                              />                          
                          </View>
                      </View>  
                      <View style={[styles.modalWrapper , {flex:2 }]}>
                          <View style={styles.modalHeader}>
                              <BimText textColor="white">ImageList out of Formik... </BimText>
                          </View>
                          <View style={[styles.imageDataContainer]}>
                            <BimImageInputList
                              name="PersonPicturesList"
                              width= {80} 
                              height= {80} 
                              imageUrls= {imageUrls}                             
                              onAddImage={addImage}
                              onRemoveImage={removeImage}
                              canCropImage={false} 
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
                                initialRegion ={revolutionSquare}
                                regionMarkers = {markers}
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
    //backgroundColor : BimColors.background,
    borderRadius:15,
    borderWidth:1,
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
  dataContainer:{
    // flex:1,
    width:"100%",
    borderWidth:1,
    borderColor:BimColors.border,
    marginTop:0,
    //height:400,
    padding:1,
  } ,
  imageDataContainer:{
    // flex:1,
    width:"100%",
    borderWidth:1,
    borderColor:BimColors.border,
    marginTop:0,
    //height:400,
    padding:10,
  } ,

  mapDataContainer:{
    // flex:1,
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
    // borderBottomWidth:0,
    borderColor:'black'//BimColors.border,
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


export default BimDataEntryScreen;

