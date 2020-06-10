import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Navigator from './navigation';

import {AppColor} from './constants';
const Ecommerce = () => {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={styles.wrapper}></SafeAreaView>
      <Navigator />
      {/* <SafeAreaView style={{backgroundColor: 'white'}} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: AppColor.appBackgroundColor,
  },
});
export default Ecommerce;
