import React from "react";
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions'
import {create} from 'apisauce'
import apiUser from '../../api/apiUser';
import { navigationRef } from "../variables/globalVariables";
import BimLogger from "../helpers/BimLogger";
// import * as navigation from "../../navigation/rootNavigation";

export default usePushNotification = ( NotificationReceivedListener , NotificationClickedListener) => {
  var apiRegisterToken =  useApi(apiUser.registerToken);

  const [expoPushToken, setExpoPushToken] = React.useState('');
  const [notification, setNotification] = React.useState(false);
  const notificationListener = React.useRef();
  const responseListener = React.useRef();

  React.useEffect(() => {
    //registerForPushNotification().then(token => setExpoPushToken(token));
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
      const message = {
        title : notification.request.content.title ,
        body : notification.request.content.body ,
        data : JSON.stringify(notification.request.content.data)
      }      
      if( NotificationReceivedListener) 
        NotificationReceivedListener( message );

    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      const message = {
        title : response.notification.request.content.title ,
        body : response.notification.request.content.body ,
        data : JSON.stringify(response.notification.request.content.data)
      }

      if( NotificationClickedListener) 
          NotificationClickedListener(message);
  
    });  
 
    //schedulePushNotificationTestMessage(); 
    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };    
  } , []);


  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });
  async function schedulePushNotificationTestMessage() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "You've got mail!",
        body: 'Here is the notification body',
        data: { _displayInForeground: 'true' },
      },
      trigger: { seconds: 2 },
    });
  }
  const sendLocalNotification = async ( title , message) => {
    // if (Platform.OS === 'android') {
    //   Notifications.setNotificationChannelAsync('default', {
    //     name: 'default',
    //     importance: Notifications.AndroidImportance.MAX,
    //     vibrationPattern: [0, 250, 250, 250],
    //     lightColor: '#FF231F7C',
    //   });
    // }    
    await Notifications.scheduleNotificationAsync({
      content: {
        title: title,
        body: message,
        data: { _displayInForeground: 'true' },
      },
      trigger: { seconds: 1 },
    });
  }

  const registerForPushNotification = async () =>{
    try {
      //return;
      const permission = await Notifications.requestPermissionsAsync();
      if(!permission.granted) return;
      const _token = await Notifications.getExpoPushTokenAsync();

      if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });
      }
      const token = JSON.stringify(_token.data);
      BimLogger.log( "push notification taken token : " + JSON.stringify(token));
      apiRegisterToken.request(_token.data);
      return token;
    }
    catch(error){
      BimLogger.log( " use push notification error in getting a push notiofication token : " + error);
    }
  }

  return {registerForPushNotification , expoPushToken , notification , sendLocalNotification}

};
