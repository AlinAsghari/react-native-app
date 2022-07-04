import React from 'react';
import { View , StyleSheet , Image , ScrollView} from 'react-native';
import Constants from 'expo-constants';

import{ BimColors , BimConfiguration } from '../settings';
import BimText from './BimText';
import { useNavigation  , useRoute , DrawerActions} from '@react-navigation/native'; 
import { MaterialCommunityIcons  } from '@expo/vector-icons'
import * as BimNetwork from '../utility/helpers/BimNetwork'
import uuid from 'react-native-uuid';
import NetInfo  from '@react-native-community/netinfo';

function BimLogView( { visible = false , logMessage }) {

   if(!visible ) return null;
    return (
          //<ScrollView style={styles.scroller}>
            <View style={styles.container}>
                <BimText 
                    // width={300} 
                    textColor={BimColors.black} 
                    maxnumberOfLines={10}
                  >
                  {logMessage} 
                </BimText>
            </View> 
          //</ScrollView>          
    );
}

const styles = StyleSheet.create({ 
  container: {
    flexDirection : "row",
    justifyContent: 'flex-start',
    alignItems:'flex-start',        
    borderColor:BimColors.border,
    backgroundColor:BimColors.logBar,
    height: 200,
    
    paddingTop: Constants.statusBarHeight,
    width: "100%",
    paddingLeft:10,
  },     
  scroller:{
    width:'100%' ,
    height:200,
    flex:1,
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
  },         
  });
export default BimLogView;

