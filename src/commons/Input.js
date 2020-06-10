import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import FloatingLabelInput from 'react-native-floating-label-input';

import {AppColor} from '../constants';
import {HelperFunction} from '../helpers';
export const InputContent = ({
  placeholder,
  icon,
  autofocus,
  value,
  onChange,
  password,
}) => {
  return (
    <View style={styles.wrapper}>
      <Image
        source={icon}
        style={{
          width: HelperFunction.Scale(20),
          aspectRatio: 1,
          //   backgroundColor: 'red',
          resizeMode: 'contain',
        }}
      />
      <FloatingLabelInput
        isPassword={password}
        selectionColor="red"
        autoFocus={autofocus}
        containerStyles={{
          borderWidth: 0,
          flex: 1,
        }}
        inputStyles={{
          fontSize: HelperFunction.Scale(15),
          color: AppColor.loginTextColor,
        }}
        labelStyles={{
          paddingLeft: 14,
          paddingBottom: 1,
          fontSize: HelperFunction.Scale(12),
          color: AppColor.placeholderColor,
        }}
        label={placeholder || 'EMAIL'} // required
        value={value}
        onChange={val => onChange(val)} // required
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
});
