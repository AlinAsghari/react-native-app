import React , {useState} from 'react';
import { Alert , ImageBackground , StyleSheet , View , Image , Text , ScrollView , FlatList , TouchableWithoutFeedback } from 'react-native';
//import {styles}  from '../settings/AppStyles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import BimCardBank from './BimBankCard';

import{BimText , BimButton , BimMasterScreen , BimItemSeprator} from '../../components'
import { BimColors , BimConfiguration } from '../../settings';
import BimRoutes from '../../settings/BimRoutes';
import { BimApiUrls } from '../../settings/BimConfiguration';


// react statefull component

// const intialBanks = 
// [
//   {
//     id: 1,
//     title: "Bim Bank  Industry and Mine ...",
//     subTitle: "Bim Bank is one od the best Asian bank, that has been located in Iran, and exactly in the middle east where the peace is kinda rare thing" + 
//               "Bim Bank is one od the best Asian bank, that has been located in Iran, and exactly in the middle east where the peace is kinda rare thing",
//     imageUrl: "https://picsum.photos/400/200"
//   } ,
//   {
//     id: 2,
//     title: "Saderat Bank  ...",
//     subTitle: "Saderat Bank is one od the best Asian bank, that has been located in Iran, and exactly in the middle east where the peace is kinda rare thing",
//     imageUrl: "https://picsum.photos/400/200"
//   },
//   {
//     id: 3,
//     title: "EIH Bank  ...",
//     subTitle: "EIH Bank is one od the best Asian bank, that has been located in Iran, and exactly in the middle east where the peace is kinda rare thing",
//     imageUrl: "https://picsum.photos/400/200"
//   },
// ];

function BimBanksListScreen({navigation , route }) {

  let intialBanks=[];
  function makeBanksList ( count ) {
    for( let i = 0 ; i <= count ; i++){
      const imageUrl = BimApiUrls.baseServiceURL + BimApiUrls.endpoint_images + getRandomImage()
      intialBanks.push({
        id: i  + 1,
        title: "Bim Bank_" +  ( i + 1 ) +" Industry and Mine ..." ,
        subTitle: "Bim Bank is one od the best Asian bank, that has been located in Iran, and exactly in the middle east where the peace is kinda rare thing" + 
                  "Bim Bank is one od the best Asian bank, that has been located in Iran, and exactly in the middle east where the peace is kinda rare thing" + 
                  "Bim Bank is one od the best Asian bank, that has been located in Iran, and exactly in the middle east where the peace is kinda rare thing" + 
                  "Bim Bank is one od the best Asian bank, that has been located in Iran, and exactly in the middle east where the peace is kinda rare thing" + 
                  "Bim Bank is one od the best Asian bank, that has been located in Iran, and exactly in the middle east where the peace is kinda rare thing" + 
                  "Bim Bank is one od the best Asian bank, that has been located in Iran, and exactly in the middle east where the peace is kinda rare thing" + " ( " + i + " )",
        imageUrl: imageUrl ,
        thumbnailUrl : imageUrl
      })
    }
    return intialBanks;
  }
  function getRandomImage (  ) {
    const picNum = Math.floor(Math.random() * 6) + 1;
    switch(picNum){
      case 1 :
        return "camera2_full.jpg";
        break;
      case 2 :
        return "couch3_full.jpg";
        break;

      case 3 :
        return "shoes2_full.jpg";
        break;

      case 4 :
        return "jacket1_full.jpg";
        break;
  
      case 5 :
        return "couch2_full.jpg";
        break;

      case 6 :
        return "couch1_full.jpg";
        break; 
      default :
        return "shoes1_full.jpg";
        break;
    }
  }
  const [banks , setBanks] = React.useState(intialBanks)
  const [refreshing , setRefreshing] = React.useState(false) // has data been refreshing = false
  const [isPostBack , setIsPostBack] = React.useState(false) // isPostBack is the after first time

  if(!isPostBack) { 
    makeBanksList(20);
    setIsPostBack(true);
  }

  const handleDeleteBank = x => 
  {
    Alert.alert(
      "Delete Bank" , "Are you sure to delete Bank : " + x.id ,
      [
        {text: 'Yes', onPress: () => {
          const newMessages = banks.filter( z => z.id !== x.id);
          setBanks(newMessages);
        }
      },
        {text: 'No'},
      ]
    );
  }
  const handleTappedBank = x => 
  {
    alert( "tapped on Bank Id ==> " + x.id );
  }
  const handleRefreshList = () => {  
    var random = Math.floor(Math.random() * 6) + 1
    setBanks(makeBanksList(random))
  }
  return (
    //addChildContainerStyle={{padding:5}}
      <BimMasterScreen>
        {/* <ScrollView style={styles.scroller}> */}
          <FlatList 
            style={styles.flatList}
            data={banks} 
            keyExtractor={ x => x.id.toString() }
            renderItem=
            {
              ({item}) => <BimCardBank 
                            title={item.title} 
                            subTitle={item.subTitle} 
                            imageUrl={item.imageUrl} 
                            thumbnailUrl={item.thumbnailUrl}
                            //onPress = {() => handleTappedBank(item )} 
                            onPress = {() => navigation.navigate( BimRoutes.BANK_LIST_DETAIL , {item} )} 
                            onDelete = {() => handleDeleteBank(item)}
                            addStyle ={{padding:20}}
                          /> 
            }  
            // ItemSeparatorComponent = {BimItemSeprator}
            refreshing={refreshing}
            onRefresh = { () => handleRefreshList()}
          />
        {/* </ScrollView> */}
      </BimMasterScreen>        
    );
}

const styles = StyleSheet.create( {


   flatList: 
   {
     flex:1,
    //  flexDirection : "column",
    //  justifyContent: 'flex-start',
    //  alignItems:'center',
     width:"100%",
     borderWidth:0,
     borderColor:BimColors.border,
     marginTop : 0,
     marginBottom :0,
     marginLeft : 0,
     marginRight : 0,
     padding : 0,
   },        
   scroller:{
    width:'100%' ,
    height:'100%',
    flex:1,
  },
});

export default BimBanksListScreen;

