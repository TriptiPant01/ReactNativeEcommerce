import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {AppColor} from '../constants';
export const Divider = ({params}) => <View style={styles.wrapper} />;

const styles = StyleSheet.create({
  wrapper: {
    height: StyleSheet.hairlineWidth,
    width: '100%',
    backgroundColor: AppColor.loginTextColor,
  },
});
