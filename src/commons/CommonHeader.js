import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  Platform,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Images} from '../images';

export const Header = ({crossIcon, navigation}) => {
  return (
    <View style={styles.MainContainer}>
      <StatusBar
        barStyle="dark-content"
        // dark-content, light-content and default
        hidden={true}
        //To hide statusBar
        backgroundColor="red"
        //Background color of statusBar
        translucent={false}
        //allowing light, but not detailed shapes
        networkActivityIndicatorVisible={true}
      />
      <TouchableOpacity
        style={styles.headerStyle}
        onPress={() => navigation.goBack()}>
        {crossIcon && (
          <View style={styles.crossStyle}>
            <Image source={Images.cross} />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    height: Platform.OS === 'ios' ? 54 : 60,
  },
  crossStyle: {
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
  },
});
