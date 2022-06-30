import * as Location from "expo-location";
import React from 'react';
import BimLogger from "../helpers/BimLogger";

export default useLocation = () =>{
    const [location, setLocation] = React.useState();

    const requestLocationPermission = async () => 
    {
        try{
            const { status } = await Location.requestForegroundPermissionsAsync();
            //setHasLocationPermission(status === 'granted');
            if(!(status === 'granted'))
            {
              alert( "you need to have location permission...." );
              return
            }
            const result = await Location.getLastKnownPositionAsync( ); // get location.coords.latitude
            if (!result) {
              //alert("You have to your GPS location on ....")
              return null;
            } 
            const { latitude, longitude } = result.coords;
            setLocation({ latitude, longitude  , latitudeDelta: 0.01, longitudeDelta: 0.01});  

        }
        catch(error)
        {
          BimLogger.log( "useLocation error : " + error)
        }
    }  

    React.useEffect( () => { requestLocationPermission() } , []);
    
    return location;
};

//export default useLocation;