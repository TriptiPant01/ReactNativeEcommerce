import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';

import {SliderImages} from '../Dummydata';
import {HelperFunction} from '../helpers';

const {width, height} = Dimensions.get('window');
export const CommonSlider = ({icon, title, externalStyle}) => {
  return (
    <View
      style={{
        // overflow: 'hidden',
        borderRadius: width / 2,
        width: width,
        height: HelperFunction.Scale(180),

        ...externalStyle,
      }}>
      <ImageBackground
        source={icon}
        style={{
          width: width,
          height: HelperFunction.Scale(200),
          //   resizeMode: 'stretch',
        }}>
        <View style={styles.textCotaniner}>
          <Text style={{color: 'white', fontSize: 18}}>{title}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: 100,
    width: '100%',
    flexDirection: 'row',
  },
  textCotaniner: {
    position: 'absolute',
    top: 20,
    width: 200,
    flex: 1,
    left: 80,
  },
});
