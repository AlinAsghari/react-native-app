import React from 'react';
import { ImageBackground , StyleSheet , View , Image , Text } from 'react-native';
import Modal from 'react-native-modal';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import { BimColors , BimConfiguration } from '../settings';
import BimText from './BimText';
import * as Progress from 'react-native-progress';
import { color } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';
import uuid from 'react-native-uuid';

function BimUploadProgressBar({ 
  onDoneCallback,
  visible = false ,
  progress = 0
  }) {
    return (
            <Modal
              hasBackdrop={true}
              backdropOpacity={1}
              backdropColor={'rgba(0, 0, 0, 0.8)'}
              isVisible={visible} 
              >
              <View style={styles.container}> 
                {( progress < 1 )? 
                  ( [ 
                      <React.Fragment key={uuid.v4()}>
                        <BimText key={uuid.v4()} textAlign='center' isBold={true} fontSize={20}> {progress * 100 } % </BimText>
                        <Progress.Bar key={uuid.v4()} progress={progress} color={BimColors.uploadProgressBar} width={200} /> 
                      </React.Fragment>
                    ]
                  )
                  : 
                  (
                    <LottieView 
                    key="lottieView"
                    autoPlay
                    loop={false}
                    onAnimationFinish={onDoneCallback}
                    source={require('../assets/animations/uploadDataDone.json')} 
                    style={{
                      zIndex:100,
                      position: 'absolute',
                    }}                         
                  />  
                  )}
              </View>
            </Modal>
          );
  }

  const styles = StyleSheet.create({   
    container: 
      {
        flex:1,
        flexDirection:'column',
        justifyContent : "center",
        alignItems : 'center',
      },     
      progressText:{
      }    
    });
export default BimUploadProgressBar;

