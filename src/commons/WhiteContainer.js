import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
import {AppColor} from '../constants';
import {Metrics} from '../helpers';

export const WhiteContainer = props => {
  return <View style={styles.wrapper}>{props.children}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: AppColor.loginWhiteBackGround,
    paddingTop: 10,
    borderRadius: 10,
  },
});
