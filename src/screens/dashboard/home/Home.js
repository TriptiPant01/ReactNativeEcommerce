import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  SafeAreaView,
} from 'react-native';

import {
  ImageContainer,
  commonStyles,
  Header,
  CommonSlider,
  WhiteContainer,
} from '../../../commons';
import {Images} from '../../../images';
import {AppColor} from '../../../constants';
import {HelperFunction} from '../../../helpers';
import {SliderImages, Items} from '../../../Dummydata';

const {width, height} = Dimensions.get('screen');
const Home = ({navigation}) => {
  return (
    <ScrollView
      style={{
        marginHorizontal: commonStyles.HomeHorizontalMargin,
        // marginVertical: 40,
      }}>
      {/* {alert(width)} */}
      <Header />
      <Text style={styles.categoryStyle}>Categories</Text>
      <View style={styles.imagewrapper}>
        <TouchableOpacity
          style={{
            marginRight: HelperFunction.Scale(12),
          }}>
          <ImageContainer
            icon={Images.apparel}
            title="Apparel"
            ImageExternalStyle={{
              width: HelperFunction.Scale(65),
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={{marginRight: 12}}>
          <ImageContainer
            icon={Images.beauty}
            title="Beauty"
            ImageExternalStyle={{width: HelperFunction.Scale(65)}}
          />
        </TouchableOpacity>

        <TouchableOpacity style={{marginRight: 12}}>
          <ImageContainer
            icon={Images.shoes}
            title="Shoes"
            ImageExternalStyle={{
              width: HelperFunction.Scale(65),
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AllCategory')}>
          <ImageContainer
            icon={Images.seeAllBig}
            title="Show All"
            externalStyle={{}}
            ImageExternalStyle={{
              width: HelperFunction.Scale(65),
            }}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.latestStyle}>Latest</Text>

      <ScrollView
        contentContainerStyle={{
          marginHorizontal: 20,
          marginTop: -20,
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {SliderImages.map(i => (
          <CommonSlider
            key={i.id}
            icon={i.icon}
            title={i.title}
            externalStyle={{marginTop: 30}}
          />
        ))}
      </ScrollView>
      <View style={styles.footerStyleContainer}>
        {Items.map((i, index) => (
          <View style={styles.footerItemsStyle} key={index}>
            <Image source={i.icon} />

            <Text style={styles.titleStyle}>{i.title}</Text>
            <Text style={styles.priceStyle}>$ {i.price}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  priceStyle: {
    fontSize: 12,
  },
  imagewrapper: {
    flexDirection: 'row',
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // width: width,
    // height: 200,
  },
  categoryStyle: {
    fontSize: 30,
    color: AppColor.loginTextColor,
    fontWeight: 'bold',
  },
  sliderStyle: {
    backgroundColor: 'red',
    // width: width,
    height: HelperFunction.Scale(180),
    flex: 1,
  },
  latestStyle: {
    color: AppColor.loginTextColor,
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
  },
  footerItemsStyle: {
    backgroundColor: AppColor.loginWhiteBackGround,
    marginRight: 8,
    height: HelperFunction.Scale(135),
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: HelperFunction.Scale(95),
  },
  footerStyleContainer: {
    flexDirection: 'row',
  },
  titleStyle: {
    fontSize: 12,
    color: AppColor.loginTextColor,
  },
});
