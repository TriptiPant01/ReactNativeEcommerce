import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {AppColor} from '../../constants';
export const DefaultTabBar = props => {
  const handleNavigation = i => {
    props.goToPage(i);
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView
        scrollEventThrottle={16}
        horizontal={true}
        contentContainerStyle={styles.wrapper}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}>
        {props.tabs.map((tab, id) => (
          <TouchableOpacity
            style={styles.tabwrapper}
            onPress={() => handleNavigation(id)}
            key={id}>
            <Text
              style={[
                styles.tabTextStyle,
                id === props.activeTab
                  ? {color: AppColor.activeLogin}
                  : {color: AppColor.inactiveLogin},
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // flex: 1,
    height: 100,
    marginRight: 10,
  },
  tabwrapper: {marginRight: 30},
  tabTextStyle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
