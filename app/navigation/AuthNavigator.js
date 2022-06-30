import react from "react";
import { NavigationContainer , useNavigation  , useRoute} from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createDrawerNavigator } from "@react-navigation/drawer";

import BimRoutes from "../settings/BimRoutes";
import BimWelcomeScreen from "../screens/loginScreen/BimWelcomeScreen";
import BimLoginScreen from "../screens/loginScreen/BimLoginScreen";
import BimDataEntryScreen from "../screens/dataEntryForm/BimDataEntryScreen";
import BimRegisterUserScreen from "../screens/loginScreen/BimRegisterUserScreen";
import { BimColors } from "../settings";
import { getHeaderTitle } from '@react-navigation/elements';
import { BimMasterScreenHeader } from "../components";

const Stack = createStackNavigator();
const AuthNavigator = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown : true,
        header : ({navigation, route , options}) => { 
          const headerTitle = getHeaderTitle(options, route.name);
          return <BimMasterScreenHeader headerTitle={headerTitle} /> 
        },
        headerLeftLabelVisible : false,
        headerStatusBarHeight:30,
        headerTitleContainerStyle: { paddingVertical: 10 } ,
        headerStyle:{
          backgroundColor : BimColors.closeButton
        }
      }
    }
    >
      <Stack.Screen name={BimRoutes.WELCOME} component={BimWelcomeScreen} options={{headerShown:false}} />
      <Stack.Screen name={BimRoutes.USER_LOGIN} component={BimLoginScreen} options={{ title: 'Login ....' }} />
      <Stack.Screen name={BimRoutes.USER_REGISTRATION} component={BimRegisterUserScreen} options={{ title: 'Create New User ....' }} />
      <Stack.Screen name={BimRoutes.DATA_ENTRY_EXAMPLE_FORM} component={BimDataEntryScreen} options={{ title: 'Data Entry Form....' }} />
    </Stack.Navigator>
)

export default AuthNavigator