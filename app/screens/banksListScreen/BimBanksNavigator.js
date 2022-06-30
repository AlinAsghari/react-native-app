import react from "react";
import { NavigationContainer , useNavigation  , useRoute} from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createDrawerNavigator } from "@react-navigation/drawer";

import BimRoutes from "../../settings/BimRoutes";
import BimWelcomeScreen from "../loginScreen/BimWelcomeScreen";
import BimLoginScreen from "../loginScreen/BimLoginScreen";
import BimDataEntryScreen from "../dataEntryForm/BimDataEntryScreen";
import BimBanksListItemScreen from "./BimBanksListItemScreen";
import BimBanksListScreen from "./BimBanksListScreen";

const Stack = createStackNavigator();
const BimBanksNavigator = () => (
    <Stack.Navigator>
      <Stack.Screen name={BimRoutes.BANK_LIST} component={BimBanksListScreen} options={{headerShown:false , title: 'Banks Lists ....' } }  />
      <Stack.Screen name={BimRoutes.BANK_LIST_DETAIL} component={BimBanksListItemScreen} options={{headerShown:false , title: 'Banks detail ....' }}/>
    </Stack.Navigator>
)

export default BimBanksNavigator