import React from 'react';
import { ImageBackground , StyleSheet , View , Image , Text , ScrollView , Dimensions  ,
  TouchableWithoutFeedback , Alert} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import{
  BimText , BimButton , BimMasterScreen , BimTextInput ,BimFormikTextInput , BimIcon , BimMapView,
  BimFormikButton , BimFormikForm , BimPickerItem  , BimImageInput, BimImageInputList, BimItemSeprator,
  BimLoginScreen
} from '../../components'
import { BimColors , BimConfiguration } from '../../settings';

// import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import * as Camera from "expo-camera";
import MapView , {Marker}  from 'react-native-maps';
import useLocation from '../../utility/hooks/useLocation';

import { NavigationContainer , useNavigation  , useRoute} from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

global.SCREEN_TWEETS = 'Tweets';
global.SCREEN_TWEETDETAIL = 'TweetDetails';
global.SCREEN_ACCOUNTS = 'Accounts';
global.STACK_NAVIGATOR = 'StackNavigator';

function BimTabNavigatorScreen() {
  const LinkToTweetDetail = () => {
    const navigation = useNavigation()
    const route = useRoute()
    return (
      <BimButton text="show tweet details " onPress={() => navigation.navigate(global.SCREEN_TWEETDETAIL , 
        {  
          tweetId : route.params.tweetId , 
          tweetDetailId : route.params.tweetDetailId
        })}  />
    )
  }
  const Accounts = ({ navigation , route }) =>(
    <BimMasterScreen>
      <BimText> Accounts .... {route.params.accountId} </BimText>
    </BimMasterScreen>
  )  
  const Tweets = ({ navigation , route }) =>(
      <BimMasterScreen>
        <BimText> Tweets .... { route.params.tweetId }</BimText>
        {/* <BimButton text="click" onPress={() => navigation.navigate(global.SCREEN_1 , {tweetDetailId:1000})}  /> */}
        <LinkToTweetDetail />
      </BimMasterScreen>
  )
  const TweetDetails = ({ navigation , route }) =>(
    <BimMasterScreen>
      <BimText> Tweet Details... { route.params.tweetDetailId } </BimText>
      <BimButton text="show Next tweet  " onPress={() => navigation.navigate(global.SCREEN_TWEETS , 
        { 
          tweetId : route.params.tweetId + 1 ,
          tweetDetailId:route.params.tweetDetailId + 1           
        })}  />
    </BimMasterScreen>
  )

  const Stack = createStackNavigator();
  const StackNavigator = () => (
      <Stack.Navigator
        screenOptions={{
          headerStyle : { backgroundColor : "dodgerblue"},
          headerTintColor : "white",
          headerShown : false
        }}
      >
        <Stack.Screen 
            name={global.SCREEN_TWEETS} 
            component={Tweets} 
            initialParams={{tweetId:1 , tweetDetailId:101}} 
            //options= {( {route} ) => ({title : " Tweet Id : " + route.params.tweetId}) }
            options = {{
                headerStyle : { backgroundColor : "tomato"},
                headerTintColor : "white",
                headerShown : false
            }}
        />

        <Stack.Screen 
            name={global.SCREEN_TWEETDETAIL} 
            component={TweetDetails} 
            initialParams={{tweetDetailId:1050}}  
            options= {( {route} ) => ({title : " Tweet Detail Id : " + route.params.tweetDetailId}) }
        />
      </Stack.Navigator>
  )
  
  const Tab = createBottomTabNavigator();
  const TabNavigator = () => (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: "tomato",
        tabBarActiveTintColor : "white" , 
        tabBarInactiveBackgroundColor : BimColors.inActive,
        tabBarInactiveTintColor : BimColors.dark,
        headerShown : false
      }}
     >
        <Tab.Screen  
          name={global.SCREEN_TWEETS} 
          component={StackNavigator}  
          //initialParams={{tweetId:1 , tweetDetailId:101}}   
          options = {{
              tabBarIcon : ( {size , color} ) => ( <MaterialCommunityIcons name="home" size={size} color={color} /> )
          }}          
        />
        <Tab.Screen  
          name={global.SCREEN_ACCOUNTS} 
          component={Accounts} 
          initialParams={{accountId:20}}     
          options= {
            ( {route} ) => (
              {
                //title : " Tweet Detail Id : " + route.params.accountId,
                tabBarIcon : ( {size , color} ) => ( <MaterialCommunityIcons name="camera" size={size} color={color} /> )
              }) }
        />
    </Tab.Navigator>
  )


  return (

        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
        
    );
}

const styles = StyleSheet.create( {

});

export default BimTabNavigatorScreen;

