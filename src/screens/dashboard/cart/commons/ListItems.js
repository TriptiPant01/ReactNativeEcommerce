import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {SimpleStepper} from 'react-native-simple-stepper';

import {useDispatch, useSelector} from 'react-redux';
import {AddToCart} from '../Actions';

import {HelperFunction} from '../../../../helpers';
import {AppColor} from '../../../../constants';

const {width} = Dimensions.get('window');
const componentName = ({Items}) => {
  const dispatch = useDispatch();
  const stateItems = useSelector(state => state.Cart);

  const handleValueChanged = (i, value) => {
    dispatch(AddToCart(i, value));
  };
  return (
    <ScrollView
      contentContainerStyle={{
        paddingVertical: 30,
        paddingHorizontal: 10,
      }}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}>
      {Items.map(i => {
        return (
          <View style={styles.innerContainer} key={i.id}>
            <View style={styles.imageContainer}>
              <Image source={i.icon} style={styles.imageStyle} />
            </View>
            <View
              style={{
                flex: 1,
                marginRight: 30,
                height: 120,
              }}>
              <View>
                <Text
                  style={{
                    ...styles.textStyle,
                    color: AppColor.loginTextColor,
                  }}>
                  {i.title}
                </Text>
                <Text style={{...styles.textStyle}}>Pink</Text>
              </View>
              <Text
                style={{
                  ...styles.textStyle,
                  color: AppColor.orangeColor,
                  marginVertical: 20,
                }}>
                $ {i.price}
              </Text>
              <SimpleStepper
                containerStyle={{
                  borderWidth: 0,
                  flexDirection: 'row',
                  overflow: 'hidden',
                  alignItems: 'center',
                }}
                separatorStyle={{
                  width: 0,
                }}
                initialValue={i.count}
                showText={true}
                textStyle={{color: '#727C8E', marginHorizontal: 10}}
                incrementImageStyle={{
                  height: HelperFunction.Scale(20),
                  width: HelperFunction.Scale(20),
                  borderRadius: HelperFunction.Scale(10),
                  backgroundColor: '#DBDEE3',
                }}
                decrementImageStyle={{
                  height: HelperFunction.Scale(20),
                  width: HelperFunction.Scale(20),
                  borderRadius: HelperFunction.Scale(10),
                  backgroundColor: '#DBDEE3',
                }}
                // incrementStepStyle={{fontSize: 1, backgroundColor: '#727C8E'}}
                valueChanged={value => handleValueChanged(i, value)}
              />
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  amountStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: HelperFunction.Scale(3),
  },
  checkoutContainer: {
    height: 100,
  },
  checkoutInnerContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
    marginTop: HelperFunction.Scale(30),
    marginHorizontal: 20,
  },
  textStyle: {
    fontSize: 15,
  },
  innerContainer: {
    flexDirection: 'row',
    marginBottom: HelperFunction.Scale(20),
    // backgroundColor: 'red',

    // justifyContent: 'center',
  },
  imageContainer: {
    backgroundColor: 'white',
    // padding: 10,
    borderRadius: 50,
    height: HelperFunction.Scale(100),
    width: HelperFunction.Scale(100),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: HelperFunction.Scale(20),
    marginBottom: HelperFunction.Scale(20),
  },
  imageStyle: {
    height: HelperFunction.Scale(64),
    width: HelperFunction.Scale(59),
    // flex: 1,
  },
});
export default componentName;
