import { 
    StyleSheet, Text, View , Image,SafeAreaView , ScrollView  ,
    TouchableOpacity, TouchableWithoutFeedback , TouchableHighlight, TouchableNativeFeedback ,
    Alert , Platform , StatusBar, Dimensions , Button
} from 'react-native';

import {useDimensions , useDeviceOrientation } from '@react-native-community/hooks';
import {styles}  from './app/settings/AppStyles'
import WelcomeScreen  from './app/screens/banksListScreen/BimBanksListScreen';
import BimLogger from './app/utility/helpers/BimLogger';

BimLogger.log("Application Started ... " + new Date().toLocaleString());


const handlerHeaderClick = () => {
  alertMessage("header clicked...");
  };
const handlerTouchableWithoutFeedback = () => {
  alertMessage("TouchableWithoutFeedback tapped...");
  }
const handlerTouchableOpacity = () => {
  alertMessage("TouchableOpacity tapped...");
  }
const handlerTouchableHighlight = () => {
  alertMessage("TouchableHighlight tapped...");
  }    
const handlerTouchableNativeFeedback = () => {
  alertMessage("TouchableNativeFeedback tapped...");
  }    
function alertMessage( text  ){
  Alert.alert( "alert" , text , [ 
    { text : "Yes" , onPress: () => BimLogger.log("Yes tapped...")} , 
    {text : "No" , onPress: () => BimLogger.log("No tapped...")}
  ]);
}    
function errorMessage( text  ){
  Alert.alert( "error" , text , [ 
    { text : "Yes" , onPress: () => BimLogger.log("Yes tapped...")} , 
    {text : "No" , onPress: () => BimLogger.log("No tapped...")}
  ]);
}    
function showDimensions( ){
  var height = Dimensions.get("screen").height;
  var width = Dimensions.get("screen").width;
  var dim = "height: " + height + " & width: " + width
}       
function getCurrentDate(){

  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  return date + '-' + month + '-' + year;
}

export default function App() {
  var isPortrait = useDeviceOrientation().portrait
  var {portrait} = useDeviceOrientation()
  //BimLogger.log( "isPortrait = " + isPortrait)
  //BimLogger.log( "portrait = " + portrait)
  
  var imgUrl =  "https://picsum.photos/200/300" 
  return ( 
    <SafeAreaView style={styles.screenArea}>
      <WelcomeScreen />
      <View style={ [styles.header , header2] } >
          <Text numberOfLines={1} style={styles.logotext}  onPress={handlerHeaderClick}> Bim Accounting ...</Text>
          <Image style={styles.logoicon} source={require("./app/assets/favicon.png")} /> 
      </View>
      
      <View style={styles.datacontainer}>
        <ScrollView style={styles.scroller}>
            <View style={ styles.caption} ><Text> screen/window dimensions </Text></View>            
            <View>
              <TouchableOpacity onPress={showDimensions}>
                <View style={ styles.dimension} >
                    <Text> getScreenDimention </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={ styles.bottomline} />


            <View style={ styles.caption} ><Text> Flex Prop </Text></View>            
            <View style={{
                          flex:1 , flexDirection:"row-reverse", justifyContent : "center" , 
                          backgroundColor:"#337BB1" , height: 400, marginRight : 5 , marginLeft : 5 , borderRadius : 10 }}>
              <View style={{ flex:2 , backgroundColor:"#337BB1" }} />
              <View style={{ flex:1 , backgroundColor:"gold" }} />
              <View style={{ flex:2 , backgroundColor:"tomato" }} />
            </View>
            <View style={ styles.bottomline} />

            <View style={ styles.caption} ><Text> Flex  + justifyContent ( flex says the content is based on rows or cloumns  and justifyContent says where they start to be drawn) </Text></View>            
            <View style={{
                          flex:1 , 
                          flexDirection:"row", 
                          justifyContent : "center" , 
                          alignItems : "center",
                          backgroundColor:"white" , height: 200, marginRight : 5 , marginLeft : 5 , borderRadius : 10 }}>
              <View style={{ height:50 , width:50 , backgroundColor:"#337BB1" }} />
              <View style={{ height:100 , width:50 , backgroundColor:"gold" }} />
              <View style={{ height:150 , width:50 , backgroundColor:"tomato" }} />
            </View>
            <View style={ styles.bottomline} />

            <View style={ styles.caption} ><Text> Flex  + justifyContent  + alignItems + alignSelf</Text></View>            
            <View style={{
                          flex:1 , 
                          flexDirection:"row", 
                          justifyContent : "center" , 
                          alignItems : "center",
                          backgroundColor:"white" , height: 200, marginRight : 5 , marginLeft : 5 , borderRadius : 10 }}>
              <View style={{ height:50 , width:50 , alignSelf:"flex-end", backgroundColor:"#337BB1" }} />
              <View style={{ height:100 , width:50 , backgroundColor:"gold" }} />
              <View style={{ height:150 , width:50 , backgroundColor:"tomato" }} />
            </View>
            <View style={ styles.bottomline} />

            <View style={ styles.caption} ><Text> Flex  + justifyContent  + alignItems + warpping</Text></View>            
            <View style={{
                          flex:1 , 
                          flexDirection:"row", 
                          justifyContent : "center" , 
                          alignItems : "center",
                          alignContent:"center",
                          flexWrap : 'wrap',
                          backgroundColor:"white" , height: 400, marginRight : 5 , marginLeft : 5 , borderRadius : 10 }}>
              <View style={{ height:50 , width:400 , alignSelf:"flex-end", backgroundColor:"#337BB1" }} />
              <View style={{ height:100 , width:200 , backgroundColor:"gold" }} />
              <View style={{ height:150 , width:300 , backgroundColor:"tomato" }} />
            </View>
            <View style={ styles.bottomline} />

            <View style={ styles.caption} ><Text> TouchableWithoutFeedback </Text></View>            
            <TouchableWithoutFeedback onPress={handlerTouchableWithoutFeedback}>
                <View>
                  <Image style={styles.imagebox } source={{ uri: 'https://picsum.photos/200/300'}} /> 
                </View>
            </TouchableWithoutFeedback>
            <View style={ styles.bottomline} />

            <View style={ styles.caption} ><Text> TouchableNativeFeedback </Text></View>            
            <TouchableNativeFeedback onPress={handlerTouchableNativeFeedback}>
                <View  style={{ width:200 , height:100 , backgroundColor:'dodgerblue' , borderRadius:20}}/>
            </TouchableNativeFeedback>
            <View style={ styles.bottomline} />

            <View style={ styles.caption} ><Text> TouchableOpacity </Text></View>            
            <TouchableOpacity onPress={handlerTouchableOpacity}>
                  <Image style={styles.imagebox } source={{ uri: 'https://picsum.photos/200/300'}} /> 
            </TouchableOpacity>       
            <View style={ styles.bottomline} />             

            <View style={ styles.caption} ><Text> TouchableHighlight </Text></View>            
            <TouchableHighlight onPress={handlerTouchableHighlight}>
              <View>
                <Image style={styles.imagebox } source={{ uri: 'https://picsum.photos/200/300'}} /> 
                </View>
            </TouchableHighlight>
            <View style={ styles.bottomline} />

        </ScrollView>
      </View> 
    </SafeAreaView>
  );
} 

const header2 = {
}