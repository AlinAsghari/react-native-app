import React from 'react';
import { useNetInfo } from '@react-native-community/netinfo';
//import { AsyncStorage } from  'react-native'
import AsyncStorage from  '@react-native-async-storage/async-storage'

//import moment from 'moment';
import dayjs from 'dayjs';
import BimLogger from './BimLogger';

const prefix = 'cache'
const expireTimeinMinutes = 6 * 30 * 12 * 60 // 6 Month


const store = async ( key , valueObject ) => 
{
  try 
  {
    const item =  {
      value  : valueObject ,
      timeStamp : Date.now()
    }
    await AsyncStorage.setItem( prefix + key , JSON.stringify(item));
    return true;
  } 
  catch (error) 
  {
    BimLogger.log(error);
    return false;
  }
};
const remove = async ( key ) => 
{
  try{
    await AsyncStorage.removeItem(prefix + key);
  }
  catch (error) 
  {
    BimLogger.log("remove cache error : " + error)
    return null;
  }
}
const get = async ( key ) => 
{
  try 
  {
    const value = await AsyncStorage.getItem(prefix + key);
    if (!value) 
      return null 
    const item =  JSON.parse(value); 
    if(!item) return null;
    if(isExpired(item)) 
    {
      cacheRemove(prefix + key)
      return null;
    }
    return item.value;
  } 
  catch (error) 
  {
    return null;
  }
};
const isExpired = ( item ) => 
{
  //const now = moment(Date.now());
  const now = dayjs();
  const storedTime = dayjs(item.timeStamp);
  // var duration = dayjs.duration(now.diff(storedTime));
  // const isExpired = duration.asMinutes() >  expireTimeinMinutes;  
  
  var duration = now.diff( storedTime , "minute" );
  const isExpired = duration >  expireTimeinMinutes;  

  return isExpired
}
export { get , store , remove }