import React from 'react';
import {ImageBackground , StyleSheet , View , Image , Text , TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons } from '@expo/vector-icons'
import {useFormikContext} from 'formik'
import {Formik} from 'formik'
import {BimColors , BimConfiguration } from '../settings';


function BimFormikForm( { initialValues, onSubmit, validationSchema , handleSubmit , children } ) {

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema = {validationSchema}
    >
    {
      () => (
        <>
            {children}
        </>
      )
    }
  </Formik>


    );
}
const styles = StyleSheet.create( {

});

export default BimFormikForm;

