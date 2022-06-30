import React from "react";
import { NavigationContainer , useNavigation  , useRoute} from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from "@react-navigation/drawer";
import BimRoutes from "../settings/BimRoutes";
import { BimColors } from "../settings";
import { MaterialCommunityIcons , Ionicons  } from '@expo/vector-icons'
import { BimIcon, BimMasterScreen, BimMasterScreenHeader, BimText } from "../components";
import { Platform, View } from 'react-native';
import BimWelcomeScreen from "../screens/loginScreen/BimWelcomeScreen";
import BimUserAccountScreen from "../screens/accountSceen/BimUserAccountScreen";
import BimLoginScreen from "../screens/loginScreen/BimLoginScreen";
import { AppDrawerContent  } from "./AppDrawerContent ";
import { getHeaderTitle } from '@react-navigation/elements';
import AppBottomTabNavigator from "./AppBottomTabNavigator";
import BimLogoutScreen from "../screens/loginScreen/BimLogoutScreen";
//import usePushNotification from "../utility/hooks/usePushNotification";

const Drawer = createDrawerNavigator();
const AppDrawerNavigator = () =>
{ 
  return (
    //<NavigationContainer>
      <Drawer.Navigator 
        screenOptions={{
          tabBarActiveBackgroundColor: BimColors.white,
          tabBarActiveTintColor : BimColors.tabActiveItem , 
          tabBarInactiveBackgroundColor : BimColors.white,
          tabBarInactiveTintColor : BimColors.medium,
    
          headerShown : true,
          header : ({navigation, route , options}) => { 
            const headerTitle = getHeaderTitle(options, route.name);
            return <BimMasterScreenHeader isDrawerMenuActive={true} headerTitle={headerTitle} /> 
          } ,
          headerLeftLabelVisible : false,
          headerStatusBarHeight:30,
          headerTitleContainerStyle: { paddingVertical: 10 } ,
          headerStyle:{
            backgroundColor : BimColors.closeButton
          }
        }}
        drawerStyle={{ backgroundColor:'#ffffff', width:'85%', paddingBottom: 50 }} 
        drawerContent={props => ( <AppDrawerContent  {...props} /> )}
      >
        <Drawer.Screen name="Offline system" component={AppBottomTabNavigator} 
            options={{
                drawerIcon: config => <Ionicons name={'camera'} size={18} color={'#444'}/>,
                headerShown: false,
            }}
        />

        {/* <Drawer.Screen name="Adverties" component={BimAdvertiseNavigator_OnDrawer} options={{
            drawerIcon: config => <Ionicons name={'ios-home'} size={18} color={'#444'} headerTitle="AAA" />,
        }} />

        <Drawer.Screen name="New Adverties" component={BimCreateAdvertiseScreen} options={{
            drawerIcon: config => <Ionicons name={'ios-newspaper' } size={18} color={'#444'} headerTitle="AAA" />,
        }} /> */}

        {/* <Drawer.Screen name="Login" component={BimLoginScreen} 
            options={{
                drawerIcon: config => <Ionicons name={'person-circle-outline'} size={18} color={'#444'}/>,
                title: 'Log in ....',
            }}
        /> */}

        <Drawer.Screen name="Logout" 
            component={BimLogoutScreen} 
            options={{
                drawerIcon: config => <Ionicons name={'log-out-outline'} size={18} color={'#444'} onPress={() => alert("Log out")} />,
                title: 'Log out ....',
            }}
        />

      </Drawer.Navigator>  
    //</NavigationContainer> 
    );
};


export default AppDrawerNavigator