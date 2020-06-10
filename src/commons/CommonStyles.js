import React from 'react';
import {StyleSheet} from 'react-native';
import {HelperFunction} from '../helpers';

export const commonStyles = StyleSheet.create({
  LoginHorizontalMwargin: {
    marginHorizontal: 20,
  },
  errorStyle: {
    fontSize: 15,
    color: 'red',
    textAlign: 'center',
  },
  HomeHorizontalMargin: HelperFunction.Scale(25),
});
