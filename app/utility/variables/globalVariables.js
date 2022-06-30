import React from "react";

const navigationRef = React.createRef();

const navigate = (name , param) => {
    if(navigationRef.current)
    {
        navigationRef.current.navigate( name , param );
    }
}

// const pushNotification  = usePushNotification( 
//     (message) => 
//     {
//       .log( "notification recieved : " + JSON.stringify(message) );
//     }  
//     , 
//     (message) => 
//     {
//       console.log( "notification clicked : " + JSON.stringify(message));
//       //navigation.navigate( BimRoutes.MESSAGE_LIST )      
//     } 
//   );

export { navigationRef , navigate }