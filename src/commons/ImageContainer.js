import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export const ImageContainer = ({
  title,
  externalStyle,
  ImageExternalStyle,
  icon,
  externaltextStyle,
}) => {
  return (
    <View style={(styles.wrapper, {...externalStyle})}>
      <Image source={icon} style={{...ImageExternalStyle}} />
      <Text style={(styles.textStyle, {...externaltextStyle})}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    marginHorizontal: 5,
  },
  textStyle: {
    textAlign: 'center',
  },
});
