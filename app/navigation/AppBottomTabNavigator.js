import React from "react";
import { DrawerActions , NavigationContainer , useNavigation  , useRoute} from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BimRoutes from "../settings/BimRoutes";
import { BimColors } from "../settings";
import BimBanksListScreen from "../screens/banksListScreen/BimBanksListScreen";
import BimUserAccountScreen from "../screens/accountSceen/BimUserAccountScreen";
import BimMessagesListScreen from "../screens/messageListScreen/BimMessagesListScreen";
import { MaterialCommunityIcons , Ionicons  } from '@expo/vector-icons'
import { BimIcon, BimMasterScreenHeader, BimText } from "../components";
import { View } from 'react-native';
import BimBanksNavigator from "../screens/banksListScreen/BimBanksNavigator";
import BimTabButton from "../components/BimTabButton";
import BimDataEntryScreen from "../screens/dataEntryForm/BimDataEntryScreen";
import BimLoginScreen from "../screens/loginScreen/BimLoginScreen";
// import AppDrawerNavigator from "./AppDrawerNavigator";
import { getHeaderTitle } from '@react-navigation/elements';
import AuthContext from "../utility/contexts/authContext";
import BimLogoutScreen from "../screens/loginScreen/BimLogoutScreen";
import { BimAdvertiseNavigator } from "../screens/advertiseScreens/BimAdvertiseNavigator";
import BimCreateAdvertiseScreen from "../screens/advertiseScreens/BimCreateAdvertiseScreen";
//import AppDrawerNavigator from "./AppDrawerNavigator";


const Tab = createBottomTabNavigator();
const AppBottomTabNavigator = ( ) => (
  //<NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: BimColors.white,
        tabBarActiveTintColor : BimColors.tabActiveItem , 
        tabBarInactiveBackgroundColor : BimColors.white,
        tabBarInactiveTintColor : BimColors.medium,

        headerShown : true,
        //headerShown : false,
        //header : () => <BimMasterScreenHeader /> ,
        header : ({navigation, route , options}) => { 
          const headerTitle = getHeaderTitle(options, route.name);
          return <BimMasterScreenHeader isDrawerMenuActive={true} headerTitle={headerTitle} /> 
        } ,
        headerLeftLabelVisible : false,
        headerStatusBarHeight:30,
        headerTitleContainerStyle: { paddingVertical: 10 } ,
        headerStyle:{
          //paddingBottom:10,
          backgroundColor : BimColors.closeButton
        }
      }}
    >
        <Tab.Screen  
          name={BimRoutes.BANK_LIST_NAVIGATOR} 
          component={BimBanksNavigator}  
          options = {{
              tabBarIcon : ( { size , color } ) => ( <MaterialCommunityIcons name="bank" size={size} color={color} />),
              title: 'Banks List ....',
              // headerTitle: () => (
              //   <Image style={{ width: 50, height: 50 }} source={require("./logo.png")} />
              // ),            
          }}  
                
        />
        {/* <Tab.Screen  
          name={BimRoutes.DRAWER} 
          component={AppDrawerNavigator} 
          listeners={({ navigation }) => ({
            tabPress: e => {
              navigation.dispatch(DrawerActions.openDrawer());
              e.preventDefault();
              //navigation.openDrawer();
            }
          })}        
          options= {
            ( {navigation , route} ) => (
              {
                tabBarIcon : ( {size , color} ) => ( <MaterialCommunityIcons name="menu" size={size} color={color} /> )
              }) }
        />           */}
        <Tab.Screen  
          name={BimRoutes.ADVERTISE_NAVIGATOR} 
          component={BimAdvertiseNavigator} 
          options= {
            ( {navigation , route} ) => (
              {
                tabBarIcon : ( {size , color} ) => (  <Ionicons name={'apps'} size={size} color={color} headerTitle="AAA" /> ),
                title: 'Advertisements List ....',
              }) }
        />             
        <Tab.Screen  
          name={BimRoutes.MESSAGE_LIST} 
          component={BimMessagesListScreen} 
          options= {
            ( {navigation , route} ) => (
              {
                tabBarIcon : ( {size , color} ) => ( <MaterialCommunityIcons name="message" size={size} color={color} /> )
              }) }
        />      

        <Tab.Screen  
          name={BimRoutes.USER_ACCOUNT_DETAIL} 
          component={BimUserAccountScreen} 
          options= {
            ( {navigation , route} ) => (
              {
                tabBarIcon : ( {size , color} ) => ( <MaterialCommunityIcons name="camera" size={size} color={color} /> )
              }) }
        />      
        {/* <Tab.Screen  
          name={BimRoutes.USER_LOGIN} 
          component={BimLoginScreen} 
          options= {
            ( {navigation , route} ) => (
              {
                tabBarIcon : ( {size , color} ) => ( <Ionicons name="person-circle-outline" size={size} color={color} /> )
              }) }
        />    */}

        <Tab.Screen  
                name={BimRoutes.USER_LOGOUT} 
                component={BimLogoutScreen} 
                options= {
                  ( {navigation , route} ) => (
                    {
                      tabBarIcon : ( {size , color} ) => (  <Ionicons name={'log-out'} size={size} color={color} headerTitle="AAA" />)
                    }) }
              />   

        <Tab.Screen  
          name={BimRoutes.USER_REGISTRATION} 
          component={BimDataEntryScreen} 
          options= {
            ( 
              {navigation , route} ) => (
              {        
                tabBarButton : () => ( <BimTabButton size={40} onPress={() => navigation.navigate(BimRoutes.USER_REGISTRATION)} />),
                // tabBarIcon : ( {size , color} ) => ( <MaterialCommunityIcons name="message" size={size} color={color} /> )
              }) }
        />   

        <Tab.Screen  
          name={BimRoutes.ADVERTISE_NEW} 
          component={BimCreateAdvertiseScreen} 
          options= {
            ( 
              {navigation , route} ) => (
              {        
                tabBarButton : () => ( <BimTabButton 
                                            size={40} 
                                            backgroundColor = {BimColors.buttonTypeA}
                                            onPress={() => navigation.navigate(BimRoutes.ADVERTISE_NEW)} />),
                // tabBarIcon : ( {size , color} ) => ( <MaterialCommunityIcons name="message" size={size} color={color} /> )
              }) }
        />   

    </Tab.Navigator>
  //</NavigationContainer> 
)


export default AppBottomTabNavigator