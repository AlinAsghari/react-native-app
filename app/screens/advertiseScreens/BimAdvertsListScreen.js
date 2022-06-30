import React , {useState} from 'react';
import { Alert , ImageBackground , StyleSheet , View , Image , Text , 
  ScrollView , FlatList , TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import{BimText , BimButton , BimMasterScreen , BimItemSeprator} from '../../components'
import{ BimColors } from '../../settings';
import BimRoutes from '../../settings/BimRoutes';
import apiAdvertise from '../../api/apiAdvertise';
import BimAdvertCard from './BimAdvertCard';
import BimApiCallError from '../../components/BimApiCallError';
import { BimConfiguration } from '../../settings/BimConfiguration';
import BimActivityIndicator from '../../components/BimActivityIndicator';
import useApi from '../../utility/hooks/useApi';

function BimAdvertsListScreen({ navigation , route }) {

  const [refreshing , setRefreshing] = React.useState(false) //has data been refreshing = false
  var apiGetAdverts =  useApi(apiAdvertise.getAdverts);
  React.useEffect( () => { 
    apiGetAdverts.request() 
    // const response = await apiGetAdverts.request() 
    // BimLogger.log("=====================>" + JSON.stringify(response) )
  } , []);

  // const getallAdverts = () =>{
  //   apiGetAdverts =  useApi(apiAdvertsService.getAdverts);
  // }
  const handleDeleteBank = x => 
  {
    Alert.alert(
      "Delete Bank" , "Are you sure to delete Bank : " + x.id ,
      [
        {text: 'Yes', onPress: () => {
          const newMessages = banks.filter( z => z.id !== x.id);
          //setBanks(newMessages);
        }
      },
        {text: 'No'},
      ]
    );
  }
  // const handleTappedBank = x => 
  // {
  //   alert( "tapped on Bank Id ==> " + x.id );
  // }
  const handleRefreshList = () => {  
    apiGetAdverts.request();
  }
  return (
    <>
      <BimActivityIndicator visible={apiGetAdverts.loading} />        
      <BimMasterScreen>
          { 
            apiGetAdverts.hasError && 
            <BimApiCallError 
              errorCode={apiGetAdverts.errorCode} 
              errorDesc={apiGetAdverts.errorDesc} 
              onPress={() =>  apiGetAdverts.request()} 
            /> 
          }
          { !apiGetAdverts.hasError &&
            <FlatList 
              style={styles.flatList}
              data={apiGetAdverts.data}
              keyExtractor={ x => x.id.toString() }
              renderItem=
              {
                ({item}) => <BimAdvertCard 
                              id={item.id} 
                              title={item.title} 
                              price={item.price} 
                              imageUrl={item.images[0].url} 
                              thumbnailUrl={item.images[0].thumbnailUrl} 
                              //onPress = {() => handleTappedBank(item )} 
                              onPress = {() => navigation.navigate( BimRoutes.ADVERTISE_LIST_DETAIL , {item} )} 
                              onDelete = {() => handleDeleteBank(item)}
                              addStyle ={{padding:20}}
                            /> 
              }  
              // ItemSeparatorComponent = {BimItemSeprator}
              refreshing={refreshing}
              onRefresh = { () => handleRefreshList()}
            />
          }
      </BimMasterScreen>
    </>        
    );
}

const styles = StyleSheet.create( {
  loadingBar:{
    paddingTop:20,
  },
  flatList: 
  {
    flex:1,
    width:"100%",
    borderWidth:0,
    borderColor:BimColors.border,
    marginTop : 0,
    marginBottom :0,
    marginLeft : 0,
    marginRight : 0,
    padding : 0,
  },        
});

export default BimAdvertsListScreen;

