import React , {useState} from 'react';
import { Alert , ImageBackground , StyleSheet , View , Image , Text , ScrollView , FlatList , TouchableWithoutFeedback } from 'react-native';
//import {styles}  from '../settings/AppStyles'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import{BimText , BimButton , BimMasterScreen , BimItemSeprator} from '../../components'
import { BimColors , BimConfiguration } from '../../settings';
import BimAdvertCard from './BimAdvertCard';

function BimAdvertsListItemScreen({ navigation , route}) {
  const item = route.params.item
  //consolBimLoggere.log( "url : " +  JSON.stringify(item) )
  return (
      <BimMasterScreen >
        <View style={styles.container}>
          <BimAdvertCard 
            id={item.id} 
            title={item.title} 
            price={item.price} 
            thumbnailUrl={item.images[0].thumbnailUrl} 
            imageUrl={item.images[0].url} 
            showDelete= {false}
            enableSendMessage = {true}
            ImageHeight={400}
            />        
          </View>
      </BimMasterScreen>        
    );
}

const styles = StyleSheet.create( {
  container:{
    width : '100%',
  }
});

export default BimAdvertsListItemScreen;

