import React , {useState} from 'react';
import { Alert , ImageBackground , StyleSheet , View , Image , Text , ScrollView , FlatList ,VirtualizedList } from 'react-native';
import {GestureHandlerRootView} from "react-native-gesture-handler"
import BimMessageDeleteItem from '../messageListScreen/BimMessageDeleteItem';

import{BimIcon , BimListItem , BimMasterScreen , BimItemSeprator} from '../../components'
import { BimColors , BimConfiguration } from '../../settings';
import BimRoutes from '../../settings/BimRoutes';
import AuthContext from '../../utility/contexts/authContext';
import BimSecureStorage from '../../utility/helpers/BimSecureStorage';


function BimUserAccountScreen({navigation, route}) {
  const {user , setUser} = React.useContext(AuthContext)
  //const currentUser = authContext.user
  const userAccount =  
  { 
    userName:user.name , 
    userDesc:"Android developer at Bim bank ( Id: " + user.userId + " email: "+ user.email +" )...",
    imageUrl:"https://picsum.photos/50/50"
  }
  const userActions = 
  [
    { id : 1 , title : "Banks List", icon : { name : "bank" , backgroundColor : "#FF8072"} ,  targetScreen: BimRoutes.BANK_LIST  } ,
    { id : 2 , title : "Messages", icon : { name : "message" , backgroundColor : "#78CED1"} , targetScreen: BimRoutes.MESSAGE_LIST } ,
    { id : 3 , title : "Pictures", icon : { name : "picture-in-picture-bottom-right", backgroundColor : "#FFD133"} , targetScreen: BimRoutes.PICTURES } , 
  ]
  const handleLogOut = () => {
    setUser(null);
    BimSecureStorage.removeToken();
  }
  return (
    <BimMasterScreen 
        //isHeaderPaddingActive={false}
        //addScreenStyle={{backgroundColor : BimColors.white}} 
        >
        <View style={styles.mainContainer}>
            <View style={styles.userAccount}>
                <BimListItem 
                      //addListItemStyle = {{height:100}}
                      title={userAccount.userName} 
                      subTitle={userAccount.userDesc} 
                      // imageUrl={userAccount.imageUrl} 
                      // imageUrlSize = {70}
                      image={require("../../assets/user.jpg")} 
                /> 
              </View>
              <View style={styles.actionItems}>
                  <FlatList 
                      style={styles.flatList}
                      data={userActions} 
                      keyExtractor={ x => x.id.toString() }
                      renderItem=
                      {
                        ({item}) => <BimListItem 
                                      subTitle={item.title} 
                                      // imageUrl={item.imageUrl} 
                                      // onPress={ () => navigation.navigate(item.targetScreen)}
                                      onPress={ () => alert(item.targetScreen)}
                                      iconComponent = {<BimIcon name={item.icon.name} backgroundColor = {item.icon.backgroundColor} /> }
                                    /> 
                      }  
                      ItemSeparatorComponent = {BimItemSeprator}
                   />                
              </View>
              <View style={styles.logOut}>
                <BimListItem 
                  subTitle= "log out" 
                  //onPress={ () => navigation.navigate(BimRoutes.LOGOUT)}
                  onPress={ handleLogOut }
                  iconComponent = {<BimIcon name="logout" backgroundColor = "red" /> }
                 />
              </View>
          </View>
      </BimMasterScreen>        
    );
}

const styles = StyleSheet.create( {
  scroller:{
    width:'100%' ,
    height:'100%',
    flex:1,
    },
  mainContainer:{
    flex:1,
    flexDirection : "column",
    justifyContent: 'flex-start',
    alignItems:'center',    
    width:"100%",
    borderWidth: 0,
    borderColor: BimColors.border,
    paddingTop:10,
  },
  flatList: 
  {
   // flex:1,
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
  userAccount:
  {
    width: "100%",
    borderWidth: 0,
    borderColor: BimColors.border,    
    marginTop : 0
  },  
  actionItems:
  {
    width: "100%",
    // minHeight:200,
    borderWidth: 0,
    borderColor: BimColors.border,    
    marginTop : 50
  },
  logOut:
  {
    width: "100%",
    height:300,
    borderWidth: 0,
    borderColor: BimColors.border,    
    marginTop : 30
  },  
});

export default BimUserAccountScreen;

