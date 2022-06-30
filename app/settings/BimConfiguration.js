import * as enviornment from './BimSettings'


const settings = {
    dev_Bank: {
      apiUrl: "http://192.168.50.80:9000/",
      fakeServerIPInData : '192.168.0.14',
    },
    dev_Home: {
      apiUrl: "http://192.168.50.1:9000/",
      fakeServerIPInData : '192.168.0.14',
    },
    staging: {
      apiUrl: "http://192.168.50.80:9000/",
      fakeServerIPInData : '192.168.0.14',
    },
    production: {
      apiUrl: "http://192.168.50.80:9000/",
      fakeServerIPInData : '192.168.0.14',
    },
  };
  
  const currentSettings = () => {
    if (__DEV__) return settings.dev_Bank;
    if (Constants.manifest.releaseChannel === "staging") return settings.staging;
    return settings.production;
  };
  
  const isProductionEnvironment = () => {
    if (__DEV__) return false;
    return true;
  };

const BimConfiguration =  {
    androidFontSize : 14,
    IosFontSize:15,    
    loadingBarSize:70,   
    //productType:'development' , // development , production 
    //deviceType:'emulator', // realDevice , emulator // real_device => emulator network is hostServerIPonEmulator , real device is on hostServeronWifiNetwork
    //hostServerIPonEmulator : '192.168.50.80',
    //hostServeronWifiNetwork : '192.168.1.50', 
    TehranLocation:{ latitude : 35.689198 , longitude : 51.388973 },
    locationDelta : {latitudeDelta: 0.01, longitudeDelta: 0.01}

}
const BimApiUrls =  {
    // fakeServerIPInData : '192.168.0.14',
    // realHostServerIP : (BimConfiguration.deviceType.toLowerCase() == 'emulator'.toLowerCase() )?
    //                          BimConfiguration.hostServerIPonEmulator : BimConfiguration.hostServeronWifiNetwork,

    // baseServiceURL : 'http://' + ((BimConfiguration.deviceType.toLowerCase() == 'emulator'.toLowerCase() )? 
    //                   BimConfiguration.hostServerIPonEmulator : BimConfiguration.hostServeronWifiNetwork) 
    //                   + ':9000',    
    baseServiceURL : currentSettings().apiUrl ,                                            
    fakeServerIPInData : currentSettings().fakeServerIPInData ,                                            
    endpoint_adverts:'/api/listings' ,
    endpoint_authentication:'/api/auth' ,
    endpoint_user:'/api/users' ,
    endpoint_images:'/assets/' ,
    endpoint_registerToken:'/api/expoPushTokens' ,
    endpoint_sendMessage:'/api/messages' ,

    
}
const getLocationOnMap = function( location ){
    if(!location) return location
    const currentLocationOnMap = {
        latitude : location.latitude , 
        longitude : location.longitude , 
        latitudeDelta : BimConfiguration.locationDelta.latitudeDelta , 
        longitudeDelta : BimConfiguration.locationDelta.longitudeDelta
      }
    return currentLocationOnMap;
}
//const isProductionEnvironment = () => enviornment.isProductionEnvironment() //!(BimConfiguration.productType === 'development' )
export { BimConfiguration , BimApiUrls , currentSettings , getLocationOnMap , isProductionEnvironment } 