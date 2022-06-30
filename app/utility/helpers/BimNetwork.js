import React , {useState} from 'react';
import { useNetInfo } from '@react-native-community/netinfo';
import {create} from 'apisauce'
import {BimApiUrls} from '../../settings/BimConfiguration';

const getNetwork = () => {
  const [isAppConnected , setIsAppConnected] = React.useState(true)
  const apiClient = create({ baseURL: BimApiUrls.baseServiceURL })
  apiClient.get( BimApiUrls.endpoint_adverts ).then( response => setIsAppConnected(response.ok))

  const network = useNetInfo();
  const result = { 
                    isInternetReachable : network.isInternetReachable , 
                    isWifiEnabled : network.isWifiEnabled ,
                    isAppServiceRunning : isAppConnected
                  };
    return result
  };

  export { getNetwork}