import React , {useState , useCallback} from 'react';
import { 
    StyleSheet, Text, View , Image,SafeAreaView , ScrollView  ,
    Alert , Platform , StatusBar, Dimensions , Button
} from 'react-native';

import {styles}  from './app/settings/AppStyles'
import WelcomeScreen  from './app/screens/loginScreen/BimWelcomeScreen';
import BimBanksListScreen from './app/screens/banksListScreen/BimBanksListScreen';
import BimMessagesListScreen from './app/screens/messageListScreen/BimMessagesListScreen';
import BimMasterScreen from './app/components/BimMasterScreen';
import BimTextInput from './app/components/BimTextInput';
import BimItemSeprator from './app/components/BimItemSeprator';
import BimPickerItem from './app/components/BimPickerItem';
import BimComponentTestScreen from './app/screens/permissionScreen/BimTestScreen';
import BimAccountScreen from './app/screens/accountSceen/BimUserAccountScreen';
import BimLoginScreen from './app/screens/loginScreen/BimLoginScreen';
import BimDataEntryScreen from './app/screens/dataEntryForm/BimDataEntryScreen';
import BimPermissionsScreen from './app/screens/permissionScreen/BimTestScreen';
import BimTestScreen from './app/screens/permissionScreen/BimTestScreen';
import BimStackNavigatorScreen from './app/screens/navigatorsExampleScreen/BimStackNavigatorScreen';
import BimTabNavigatorScreen from './app/screens/navigatorsExampleScreen/BimTabNavigatorScreen';
import BimAdvertsListScreen from './app/screens/advertiseScreens/BimAdvertsListScreen';
import BimAdvertiseNavigator from './app/screens/advertiseScreens/BimAdvertiseNavigator';
import BimAdvertiseScreen from './app/screens/advertiseScreens/BimCreateAdvertiseScreen';
import BimCreateAdvertiseScreen from './app/screens/advertiseScreens/BimCreateAdvertiseScreen';

import {Ionicons , MaterialCommunityIcons} from '@expo/vector-icons'
import { NavigationContainer , useNavigation  , useRoute} from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthNavigator from './app/navigation/AuthNavigator'
import AppBottomTabNavigator from './app/navigation/AppBottomTabNavigator'
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomDrawerContent } from './app/navigation/AppDrawerContent ';
import AppDrawerNavigator from './app/navigation/AppDrawerNavigator';
import Constants from 'expo-constants';
import BimSecureStorage from './app/utility/helpers/BimSecureStorage';
//import AppLoading from 'expo-app-loading';
//import { AppLoading, SplashScreen } from 'expo';
import * as SplashScreen from 'expo-splash-screen';
import AuthContext from './app/utility/contexts/authContext';
import BimApplicationError from './app/components/BimApplicationError';
import { navigationRef } from './app/utility/variables/globalVariables';
import { BimRoutes } from './app/settings';
import usePushNotification from './app/utility/hooks/usePushNotification';
import * as navigation from "./app/utility/variables/globalVariables";
import BimLogger from './app/utility/helpers/BimLogger';
//import * as BimConfig from './app/settings/BimConfiguration';

import * as BimConfiguration from './app/settings/BimConfiguration';
import BimLogView from './app/components/BimLogView';
//import prompt from 'react-native-prompt-android';

// BimLogger.log( "Application Started App  ... " + new Date().toLocaleString() );
// BimLogger.log( "apiUrl ==> " + BimConfiguration.currentSettings().apiUrl )
// BimLogger.log(  "fakeServerIPInData ==> " + BimConfiguration.currentSettings().fakeServerIPInData )
// BimLogger.log(  "isProductionEnvironment ==> " + BimConfiguration.isProductionEnvironment() )

export default function App() {
  const Drawer = createDrawerNavigator();
  const [user , setUser] = React.useState();
  const [logMessage , setLogMessagee] = React.useState("");
  const [isAppReady , setIsAppReady] = React.useState(false);

  BimLogger.start(); // start of logging
  const pushNotification  = usePushNotification( (message) => 
    {
      BimLogger.log( "notification recieved : " + JSON.stringify(message) );
    }  
    , 
    (message) => 
    {
      BimLogger.log( "notification clicked : " + JSON.stringify(message));
      navigation.na
      navigation.navigate( BimRoutes.MESSAGE_LIST )      
    } 
  );

  React.useEffect(() => _loadResourcesAsync(), []);
  
  const restoreUser = async() =>{
    BimLogger.log( logMessage + " => Step_7 ");
    const user = await BimSecureStorage.getUser()
    if(user)
      setUser(user);
  }

  const _loadResourcesAsync = async () => {
    try {
      BimLogger.log(logMessage + " => Step_1 ");
      await SplashScreen.preventAutoHideAsync();
      BimLogger.log(logMessage + " => Step_2 ");
      await restoreUser();
      BimLogger.log(logMessage + " => Step_3 ");
      await pushNotification.registerForPushNotification();
      BimLogger.log(logMessage + " => Step_4 ");

      //await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (e) {
      BimLogger.log( " _loadResourcesAsync function error : " + e);
      BimLogger.log( logMessage + " ==> Step_5 " + " _loadResourcesAsync function error : " + e);
    } finally {
      setIsAppReady(true);
      BimLogger.log( logMessage + " ==> Step_10 ");
      //await SplashScreen.hideAsync();
    }
  }  
  const onLayoutRootView = useCallback(async () => {
      if (isAppReady) {
        BimLogger.log( logMessage + " ==> Step_6");
        await SplashScreen.hideAsync();
      }
    }, [isAppReady]);
    

  if (!isAppReady) 
      return null // just app is showing splash screen...
  
  if (isAppReady) 
  return ( 
    <> 
      <View onLayout={onLayoutRootView} />
      <BimLogView visible={false} logMessage = {logMessage}  />
      <BimApplicationError/>      
      <AuthContext.Provider value={ { user , setUser } } >
        <NavigationContainer ref={navigationRef} >
          { !user && <AuthNavigator  /> }
          { user  &&  <AppDrawerNavigator  /> }
        </NavigationContainer>  
      </AuthContext.Provider>
    </>

    ); 
} 