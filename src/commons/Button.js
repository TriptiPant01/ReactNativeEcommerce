import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {Button} from 'react-native-elements';

import {Images} from '../images';
import {Metrics, HelperFunction} from '../helpers';

const {width} = Dimensions.get('window');
export const CommonButton = ({title, externalStyle, onPress}) => {
  return (
    <Button
      onPress={onPress}
      title={title}
      buttonStyle={{
        borderRadius: 23,
        height: HelperFunction.VerticalScale(46),
        ...externalStyle,
      }}
      containerStyle={{marginTop: 20}}
      titleStyle={{
        fontWeight: 'bold',
        fontSize: 12,
        width: width - 100,
      }}
      iconRight
      icon={
        <View
          style={{
            width: 50,
            // alignSelf: 'flex-end',
          }}>
          <Image
            source={Images.buttonSee}
            style={{
              width: HelperFunction.Scale(28),
              height: HelperFunction.Scale(29),
              // alignSelf: 'flex-end',
              marginLeft: 20,
              // backgroundColor: 'red',
            }}
          />
        </View>
      }
      iconContainerStyle={{backgroundColor: 'red', width: 100}}
    />
  );
};
