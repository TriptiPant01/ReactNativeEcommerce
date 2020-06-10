import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {ImageContainer, WhiteContainer, Header} from '../../../commons';
import {AppColor} from '../../../constants';
import {Categories, Womens, Mens} from '../../../Dummydata';
import {HelperFunction} from '../../../helpers';

const {width, height} = Dimensions.get('window');
const AllCategories = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <Header crossIcon navigation={navigation} />
      <Text style={styles.allcategoriesStyle}>All Categories</Text>
      <View style={styles.innerWrapper}>
        <ScrollView
          contentContainerStyle={styles.leftScrollViewStyle}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          {Categories.map(i => (
            <TouchableOpacity onPress={() => alert(`${i.name} pressed`)}>
              <ImageContainer
                icon={i.icon}
                key={i.id}
                title={i.name}
                ImageExternalStyle={{
                  width: HelperFunction.Scale(65),
                  // height: HelperFunction.Scale(65),
                  // resizeMode: 'contain',
                  // backgroundColor: 'red',
                }}
                externalStyle={{justifyContent: 'center', alignItems: 'center'}}
                externaltextStyle={{
                  marginTop: -15,
                  fontSize: 15,
                  color: AppColor.loginTextColor,
                }}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <ScrollView
          contentContainerStyle={styles.rightScrollViewStyle}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <Text style={styles.titleStyle}>MEN’S APPAREL</Text>

          <WhiteContainer>
            {Mens.map(i => (
              <TouchableOpacity onPress={() => alert(`${i.name} pressed`)}>
                <Text style={styles.CategoryTextStle}>{i.name}</Text>
              </TouchableOpacity>
            ))}
          </WhiteContainer>
          <View
            style={{
              marginVertical: 30,
              backgroundColor: AppColor.borderColor,
              height: StyleSheet.hairlineWidth,
            }}
          />
          <Text style={styles.titleStyle}>WOMEN’S APPAREL</Text>

          <WhiteContainer>
            {Womens.map(i => (
              <TouchableOpacity onPress={() => alert(`${i.name} pressed`)}>
                <Text style={styles.CategoryTextStle}>{i.name}</Text>
              </TouchableOpacity>
            ))}
          </WhiteContainer>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  innerWrapper: {
    flexDirection: 'row',
    height: height - 200,
    marginBottom: 20,
    // flex: 1,
    // backgroundColor: 'red',
    marginRight: HelperFunction.Scale(20),
  },
  leftScrollViewStyle: {
    // flex: 1,w
    width: width / 3,
  },
  rightScrollViewStyle: {
    // flex: 2,,
    width: width / 1.5,
    // backgroundColor: AppColor.loginWhiteBackGround,
  },
  CategoryTextStle: {
    fontSize: 15,
    marginVertical: 15,
    paddingHorizontal: 30,
    color: AppColor.loginTextColor,
  },
  allcategoriesStyle: {
    fontSize: 30,
    color: AppColor.loginTextColor,
    marginLeft: HelperFunction.Scale(20),
    fontWeight: 'bold',
    marginBottom: HelperFunction.Scale(20),
  },
  titleStyle: {
    fontSize: 12,
    color: AppColor.loginTextColor,
    marginBottom: 10,
  },
});

export default AllCategories;
