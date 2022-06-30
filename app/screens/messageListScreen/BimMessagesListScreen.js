import React , {useState} from 'react';
import { Alert , ImageBackground , StyleSheet , View , Image , Text , 
         ScrollView , FlatList , TouchableWithoutFeedback 
       } from 'react-native';
import {GestureHandlerRootView} from "react-native-gesture-handler"

import BimMessageDeleteItem from './BimMessageDeleteItem';
import{BimListItemMultiRow , BimMasterScreen , BimItemSeprator} from '../../components'
import { BimColors , BimConfiguration } from '../../settings';
import BimLogger from '../../utility/helpers/BimLogger';


// react statefull component

function BimMessagesListScreen() {

  let intialMessages=[];
  function makeMessageList ( count ) {
    for( let i = 0 ; i <= count ; i++){
      intialMessages.push({
        id: i  + 1,
        title: "Ali Asghari_" + ( i + 1 ) ,
        subTitle:`Lorem Ipsum is simply dummy text of the printing and typesetting electronic typesetting, remaining essentially unchanged. It was` ,
        imageUrl: "https://picsum.photos/50/50" ,
        image : require("../../assets/user.jpg")
      })
    }
    return intialMessages;
  }

  const [messages , setMessages] = React.useState(intialMessages)
  const [refreshing , setRefreshing] = React.useState(false) // has data been refreshing = false
  const [isPostBack , setIsPostBack] = React.useState(false) // isPostBack is the after first time

  if(!isPostBack) { 
    makeMessageList(20);
    setIsPostBack(true);
  }

  const handleDelete = x => 
  {
    Alert.alert(
      "Delete message" , "Are you sure to delete message : " + x.id ,
      [
        {text: 'Yes', onPress: () => {
          const newMessages = messages.filter( z => z.id !== x.id);
          setMessages(newMessages);
        }
      },
        {text: 'No'},
      ]
    );
  }
  const handleTapped = x => 
  {
    alert( "tapped on message Id : " + x.id + " Message ==> \n " + x.subTitle );
  }
  const handleRefreshList = () => {
    var random = Math.floor(Math.random() * 6) + 1
    setMessages(makeMessageList(random))
  }
  return (
      <BimMasterScreen>
          <FlatList 
            style={styles.flatList}
            data={messages} 
            keyExtractor={ x => x.id.toString() }
            renderItem=
            {
              ({item}) => <BimListItemMultiRow 
                            title={item.title} 
                            subTitle={item.subTitle} 
                            image={item.image}
                            // imageUrl={item.imageUrl} 
                            // imageUrlSize = {70}
                            maxnumberOfLines={2}
                            onRenderRightAction = {() => <BimMessageDeleteItem onPress={() => BimLogger.log(item)} /> }
                            onPress = {() => handleTapped(item )} 
                            onDelete = {() => handleDelete(item)}
                          /> 
            }  
            ItemSeparatorComponent = {BimItemSeprator}
            refreshing={refreshing}
            onRefresh = { () => handleRefreshList()}
          />
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
});

export default BimMessagesListScreen;

