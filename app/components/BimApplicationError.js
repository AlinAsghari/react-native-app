import React from 'react';
import { View , StyleSheet , Image} from 'react-native';
import Constants from 'expo-constants';

// import{ BimText } from '.'
import{ BimColors , BimConfiguration } from '../settings';
import BimText from './BimText';
import { useNavigation  , useRoute , DrawerActions} from '@react-navigation/native'; 
import { MaterialCommunityIcons  } from '@expo/vector-icons'
//import useNetwork from '../hooks/useNetwork';
//import { useNetInfo } from '@react-native-community/netinfo';
import * as BimNetwork from '../utility/helpers/BimNetwork'
import uuid from 'react-native-uuid';
import NetInfo  from '@react-native-community/netinfo';

function BimApplicationError() {
  const [isInternetReachable, setIsInternetReachable] = React.useState(false);
  const [isAppServiceRunning, setIsAppServiceRunning] = React.useState(false);
  const [isWifiEnabled, setIsWifiEnabled] = React.useState(false);

  // NetInfo.addEventListener((state) => {
  //   setIsInternetReachable(state.isInternetReachable);
  //   setIsWifiEnabled(state.isWifiEnabled);
  // });

  var network = BimNetwork.getNetwork()
  // this.timeoutCheck = setTimeout(() => {
  //   BimLogger.log('This will run every second!');
  //   }, 100);

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     BimLogger.log('This will run every second!');
  //   }, 1000);
  //   //return () => clearInterval(interval);
  // }, []);  
  // setTimeout(() => { 
  //     BimLogger.log('....dddd')
  //     network = BimNetwork.getNetwork(); 
  //     BimLogger.log(JSON.stringify(network)); 
  //   } , 1000);

  //React.useEffect(() => { network = BimNetwork.getNetwork() });  
  //BimLogger.log(JSON.stringify(network));
  // setIsInternetReachable(network.isInternetReachable);
  // setIsWifiEnabled(network.isWifiEnabled);
  // setIsAppServiceRunning(network.isAppServiceRunning);

  // const setConnectivity = () =>{
  //   const network = BimNetwork.getNetwork()
  //   setIsInternetReachable(network.isInternetReachable);
  //   setIsWifiEnabled(network.isWifiEnabled);
  //   setIsAppServiceRunning(network.isAppServiceRunning);
  // }
  // React.useEffect(() => { setConnectivity();}, []);


  // BimLogger.log("=================== " + uuid.v4())
  //network = BimNetwork.getNetwork()

//   var network = BimNetwork.getNetwork()
//   NetInfo.addEventListener('change',this.onConnectivityChange);   
//   onConnectivityChange = (status) => {
//     BimLogger.log("=================== " + uuid.v4())
//     const network = BimNetwork.getNetwork()
//     setIsInternetReachable(network.isInternetReachable);
//     setIsWifiEnabled(network.isWifiEnabled);
//     setIsAppServiceRunning(network.isAppServiceRunning);

// }  
 
// const network = BimNetwork.getNetwork()
// setIsInternetReachable(network.isInternetReachable);
// setIsWifiEnabled(network.isWifiEnabled);
// setIsAppServiceRunning(network.isAppServiceRunning);

   if(network.isInternetReachable && network.isAppServiceRunning ) 
       return null;
    return (
          <View style={styles.container}>
              <BimText 
                  width={300} 
                  textColor={BimColors.white} 
                  addStyle={!network.isInternetReachable?{display:'flex'} : {display:'none'}}
                > No Internet Connection.... 
              </BimText>
              <BimText 
                width={300} 
                textColor={BimColors.white}
                addStyle={(network.isInternetReachable && !network.isAppServiceRunning) ?{display:'flex'} : {display:'none'}}
              > Application Server is not running... 
              </BimText>
          </View> 
    );
}

const styles = StyleSheet.create({ 
  container: {
    flexDirection : "row",
    justifyContent: 'center',
    alignItems:'center',        
    borderColor:BimColors.border,
    backgroundColor:BimColors.connectionErrorBar,
    height: 60,
    
    paddingTop: Constants.statusBarHeight,
    //position: "absolute",
    //top: Constants.statusBarHeight,
    //top: 400,
    width: "100%",
    //zIndex: 1,
  },     
  headerWrapper: 
  {
    flexDirection : "row",
    justifyContent: 'center',
    alignItems:'center',    
    width:"100%",
    height:50 ,
    borderWidth:0,
    borderColor:BimColors.border,
    backgroundColor:BimColors.connectionErrorBar,
    margin : 0,
    //display:'none',
    //position: "absolute",
    //top: Constants.statusBarHeight,
    //zIndex: 1,
  },         
  });
export default BimApplicationError;

