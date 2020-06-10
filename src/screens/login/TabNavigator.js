import React from 'react';
import {View, Text} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import {Login, Signup, ForgetPassword, DefaultTabBar} from './index';
export const TabNavigator = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollableTabView renderTabBar={() => <DefaultTabBar />}>
        <Signup tabLabel="Sign Up" />

        <Login tabLabel="Log In" />
        <ForgetPassword tabLabel="Forgot Password" />
      </ScrollableTabView>
    </View>
  );
};
