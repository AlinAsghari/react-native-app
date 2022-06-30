import React , {useState} from 'react';
import { Alert , ImageBackground , StyleSheet , View , Image , Text , ScrollView , FlatList , TouchableWithoutFeedback } from 'react-native';
//import {styles}  from '../settings/AppStyles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import BimCardBank from './BimBankCard';

import{BimText , BimButton , BimMasterScreen , BimItemSeprator} from '../../components'
import { BimColors , BimConfiguration } from '../../settings';

function BimBanksListItemScreen({ navigation , route}) {
  const item = route.params.item
  //alert(item.imageUrl)
  return (
      <BimMasterScreen >
        <ScrollView style={styles.scroller}>
         <BimCardBank 
            title={item.title} 
            subTitle={item.subTitle} 
            imageUrl={item.imageUrl} 
            //addStyle ={{padding:20}}
            maxnumberOfLines={20}
            showDelete= {false}
            ImageHeight={400}
          />         
        </ScrollView>
      </BimMasterScreen>        
    );
}

const styles = StyleSheet.create( {
  scroller:{
    width:'100%' ,
    height:'100%',
    flex:1,
  },
 
});

export default BimBanksListItemScreen;

