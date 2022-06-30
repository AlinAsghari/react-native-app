import { 
  StyleSheet, Platform , StatusBar, Dimensions 
} from 'react-native';
import {BimColors}  from './';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    screenArea: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight //Platform.OS === 'android' ? StatusBar.currentHeight : 0
      },
      logoicon: {
        top:5,
        left:20,
        position:'absolute',
        borderRadius:10,
        width:50 ,
        height:50 ,
        borderWidth:0,
        borderColor:'black'
      },
      logotext: {
        top:20,
        left:80,
        position:'absolute',
        fontWeight: "bold",
        fontSize : 12,
        textAlign:'left',
        lineHeight: 50
      },
    
      header: {
        height:60,
        borderWidth:0,
        width:'100%' ,
        backgroundColor:'#FBF3D5',
        alignItems:'center',
        justifyContent: 'center',
      },
      datacontainer:{
        flex:1,
        borderWidth:0,
        width:'100%' ,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
      },
      scroller:{
        width:'100%' ,
        height:'100%',
        flex:1,
      },
      imagebox: {
        borderRadius:10,
        width:200 ,
        height:300 ,
        backgroundColor:'red',
        borderWidth:1,
        borderColor:'red',
      },  
      dimension: {
        height:40 , 
        marginRight:10 , 
        marginLeft:10 , 
        marginTop:10 , 
        marginBottom:10 , 
        backgroundColor:"dodgerblue" ,
        borderWidth:1 ,
        borderColor:"#CCCCCC" ,
        borderRadius:5 , 
        alignItems:'center' , 
        justifyContent: 'center'
      },  
      bottomline: {
        height:1 , 
        marginRight : 10 ,
        marginLeft : 10  ,
        marginTop : 10  ,
        marginBottom : 10  ,
        borderTopWidth:1 ,
        borderBottomWidth:0 ,
        borderRightWidth:0 ,
        borderLeftWidth:0 ,
        borderColor: BimColors.border ,
        justifyContent: 'center',
        alignItems:'center' , 
      },    
      caption: {
        height:40 , 
        marginRight:0 , 
        marginLeft:0 , 
        marginTop:0 , 
        marginBottom:5 , 
        backgroundColor:"#C4C4C4" ,
        borderTopWidth:0 ,
        borderBottomWidth:2 ,
        borderRightWidth:0 ,
        borderLeftWidth:0 ,
        borderColor: BimColors.border ,
        borderRadius:0 , 
        alignItems:'center' , 
        justifyContent: 'center',
        fontWeight: "bold",
        fontSize : 12,
        lineHeight:20
      },  

      buttonLogin: {
        flexDirection : "row",
        justifyContent: 'center',
        alignItems:'center',
        fontWeight:'bold',
        height:50 ,
        width: '80%',
        borderRadius : 10 ,
        marginBottom : 10 ,
        backgroundColor:'gold'
        },   
      buttonRegister: {
        flexDirection : "row",
        justifyContent: 'center',
        alignItems:'center',
        fontWeight:'bold',    
        height:50 ,
        width: '80%',
        borderRadius : 10 ,
        backgroundColor:'#3BCE8A' ,
        marginBottom : 10 ,
        },  
 
      appTextIOS: {
        fontSize:20 ,
        fontFamily: "Avenir"
        },  
        appTextAndroid: {
        fontSize:20 ,
        fontFamily: "Roboto"
        },         
      appText: {
        fontSize:Platform.OS === 'android' ? 18 : 20 ,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir"
        },         
      buttonContainer: {
        flexDirection : "row",
        justifyContent: 'flex-start',
        alignItems:'center',
        borderWidth:0,
        borderColor:'black',
        },                              
  });

export { styles }