import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import React , {useState} from 'react';
import { 
    StyleSheet, Text, View , Image,SafeAreaView , ScrollView  ,
    Alert , Platform , StatusBar, Dimensions , Button , TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

export function AppDrawerContent  (props) {
    const navigation = useNavigation();
    const [ tabs, setTabs ] = useState([
        { 
            name: 'Help',
            icon: 'ios-call',
            borderColor: '#e7c53f',
            backgroundColor: '#fff',
            color: '#e7c53f',
            fontWeight: '500'
        },{ 
            name: 'Share',
            icon: 'ios-megaphone',
            borderColor: '#e7c53f',
            backgroundColor: '#fff',
            color: '#e7c53f',
            fontWeight: '500'
        },{ 
            name: 'Logout',
            icon: 'ios-log-out',
            borderColor: '#e7c53f',
            backgroundColor: '#fff',
            color: '#e7c53f',
            fontWeight: '500'
        }
    ]);

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <View style={styles.tabContainer}>
                <View style={styles.mainContainer}>
                    {
                        tabs.map((tab) => {
                            return (
                                <TouchableOpacity
                                    key={tab.name}
                                    style={[styles.block , { borderColor: tab.borderColor,  backgroundColor: tab.backgroundColor}]}
                                    onPress={() => {
                                        if(tab.name == 'Logout') {
                                            //navigation.toggleDrawer();
                                            alert('Logout');
                                        }

                                        if(tab.name == 'Share') {
                                            // onShare();
                                            alert('Share');
                                        }

                                        if(tab.name == 'Help') {
                                            alert('Help');
                                            //props.navigation.navigate('DrawerHelp');
                                        }
                                    }}>
                                    <Ionicons name={tab.icon} size={18} style={{ color: tab.color }} />
                                    <Text style={{ color: tab.color, fontWeight: tab.fontWeight }}>
                                         {tab.name}
                                    </Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </View>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create( {    
    tabContainer: 
    {
      padding : 15,
    },     
    mainContainer : { 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        height: 50,
        alignItems: 'center'
    },
    block:{
        height: '100%',
        flex: 0.32,
        alignItems: 'center',
        borderWidth: 0.5,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }

});     

