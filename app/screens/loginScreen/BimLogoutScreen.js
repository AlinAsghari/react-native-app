import React from 'react';
import { BimMasterScreen } from '../../components';
import BimActivityIndicator from '../../components/BimActivityIndicator';
import useAuth from '../../utility/hooks/useAuth';

function BimLogoutScreen(props) {
  const {user , logOut} = useAuth();
  // React.useEffect(() => {
  //   setUser(null);
  //   BimSecureStorage.removeToken();    
  // }, []);

  const onLayoutEvent = () => {
    logOut();  
  };

  return ( 
        <>
          <BimActivityIndicator visible={true} />    
          <BimMasterScreen onLayout={onLayoutEvent} />
        </>
        )
}


export default BimLogoutScreen;

