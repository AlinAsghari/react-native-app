import React from 'react';
import BimLogView from './app/components/BimLogView';

// BimLogger.log( "Application Started App  ... " + new Date().toLocaleString() );
// BimLogger.log( "apiUrl ==> " + BimConfiguration.currentSettings().apiUrl )
// BimLogger.log(  "fakeServerIPInData ==> " + BimConfiguration.currentSettings().fakeServerIPInData )
// BimLogger.log(  "isProductionEnvironment ==> " + BimConfiguration.isProductionEnvironment() )

export default function App() {
  const [logMessage , setLogMessagee] = React.useState("salam ...");

  return ( 
      <BimLogView visible={true} logMessage = {logMessage}  />
    ); 
} 