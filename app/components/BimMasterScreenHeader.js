import React from 'react';
import { View , StyleSheet , Image} from 'react-native';
import Constants from 'expo-constants';

// import{ BimText } from '.'
import{ BimColors , BimConfiguration } from '../settings';
import BimText from './BimText';
import { useNavigation  , useRoute , DrawerActions} from '@react-navigation/native'; 
import { MaterialCommunityIcons  } from '@expo/vector-icons'

// react statless component
function BimMasterScreenHeader({children , headerTitle , isHeaderVisible = true , isDrawerMenuActive = false}) {
  const navigation = useNavigation()
  // const route = useRoute()

  // const headerTitle= route.params?.query ?? ''
  // alert(route.params)
  if(!isHeaderVisible)
    return null
  
    return (
      <View style={[styles.headerWrapper]}>
        <View style={styles.headerTitle}>
          {
            isDrawerMenuActive &&
            <MaterialCommunityIcons style={{paddingRight:10}} name="menu" size={25} color="black" onPress={(e) =>{
              //alert('1.....')
              //DrawerActions.openDrawer();
              navigation.dispatch(DrawerActions.openDrawer());
              e.preventDefault();
            }} />
          }
        <BimText textColor={BimColors.headerBarText} isBold={true} fontSize={18}> {headerTitle} </BimText>
        </View>
        <View style={styles.logoContainer}>
          <Image style={styles.logoImage} source={require("../assets/logo-red.png")} />
        </View>
      </View> 
    );
}

const styles = StyleSheet.create({    
  headerWrapper: 
  {
    flexDirection : "row",
    justifyContent: 'flex-start',
    alignItems:'center',
    width:"100%",
    height:50 + Constants.statusBarHeight,
    paddingRight:50,
    paddingLeft:10,
    paddingTop: Constants.statusBarHeight,
    paddingBottom:10,
    borderWidth:0,
    borderColor:'black',
    backgroundColor:BimColors.headerColor
  },     
  logoContainer: 
  {
    position:'absolute',
    top : 10,
    right:20,
    flexDirection : "column",
    justifyContent: 'center',
    alignItems:'center' ,
    paddingTop:0 + Constants.statusBarHeight,     
  }, 
  headerTitle: 
  {
    flex:1,
    justifyContent:'flex-start',
    flexDirection:'row',
    paddingTop:8,
  },   
  logoImage: 
  {
    // marginTop:10,
    height:30 ,
    width: 30,
    borderRadius:10,
  },     
  });
export default BimMasterScreenHeader;

