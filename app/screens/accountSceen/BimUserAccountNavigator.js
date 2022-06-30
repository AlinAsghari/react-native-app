import react from "react";
import { NavigationContainer , useNavigation  , useRoute} from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createDrawerNavigator } from "@react-navigation/drawer";

import BimRoutes from "../../settings/BimRoutes";
import BimWelcomeScreen from "../loginScreen/BimWelcomeScreen";
import BimLoginScreen from "../loginScreen/BimLoginScreen";
import BimDataEntryScreen from "../dataEntryForm/BimDataEntryScreen";
import BimUserAccountScreen from "./BimUserAccountScreen";
import BimBanksListScreen from "../banksListScreen/BimBanksListScreen";
import BimMessagesListScreen from "../messageListScreen/BimMessagesListScreen";
import BanksNavigator from "../banksListScreen/BimBanksNavigator";

// it's not used in the project
const Stack = createStackNavigator();
const BimUserAccountNavigator = () => (
    <Stack.Navigator mod="modal">
      <Stack.Screen name={BimRoutes.USER_ACCOUNT_DETAIL} component={BimUserAccountScreen} options={{headerShown:false}} />
      <Stack.Screen name={BimRoutes.BANK_LIST} component={BanksNavigator} options={{headerShown:false}} />
      <Stack.Screen name={BimRoutes.MESSAGE_LIST} component={BimMessagesListScreen} options={{headerShown:false}} />
      <Stack.Screen name={BimRoutes.PICTURES} component={BimMessagesListScreen} options={{headerShown:false}} />
      <Stack.Screen name={BimRoutes.LOGOUT} component={BimWelcomeScreen}  options={{headerShown:false}}/>
    </Stack.Navigator>
)

export default BimUserAccountNavigator