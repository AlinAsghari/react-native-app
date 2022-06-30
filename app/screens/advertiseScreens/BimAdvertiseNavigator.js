import react from "react";
import { NavigationContainer , useNavigation  , useRoute} from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createDrawerNavigator } from "@react-navigation/drawer";

import BimRoutes from "../../settings/BimRoutes";
import BimAdvertsListScreen from "./BimAdvertsListScreen";
import BimAdvertsListItemScreen from "./BimAdvertsListItemScreen";

const Stack = createStackNavigator();
const BimAdvertiseNavigator = () => (
    <Stack.Navigator>
      <Stack.Screen name={BimRoutes.ADVERTISE_LIST} component={BimAdvertsListScreen} options={{headerShown:false}} />
      <Stack.Screen name={BimRoutes.ADVERTISE_LIST_DETAIL} component={BimAdvertsListItemScreen} options={{headerShown:false}} />
    </Stack.Navigator>
)

export { BimAdvertiseNavigator }  