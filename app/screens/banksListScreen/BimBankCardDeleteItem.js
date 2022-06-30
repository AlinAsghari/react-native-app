import React from 'react';
import { ImageBackground , StyleSheet , View , Image , Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { BimColors , BimConfiguration } from '../../settings';

// react statless component
function BimBankCardDeleteItem() {
    return (
      <View style={styles.container}>  
          <BimButton title="delete" buttonColor="#3BCE8A" iconName= "content-save"  iconSize={30} iconColor="dodgerblue"  onPress={ () => alert("delete") } />
      </View>
    );
}

const styles = StyleSheet.create({    
  container: 
  {
    borderWidth:1,
    height:70 , 
    borderColor: BimColors.border,
  },         
});
export default BimBankCardDeleteItem;

