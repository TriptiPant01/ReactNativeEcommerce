import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {SimpleStepper} from 'react-native-simple-stepper';
import {useDispatch, useSelector} from 'react-redux';

import {Header, Divider, CommonButton} from '../../../commons';
import {HelperFunction} from '../../../helpers';
import {Items} from '../../../Dummydata';
import {AppColor} from '../../../constants';
import {AddToCart} from './Actions';
import {Images} from '../../../images';
import CommonListItems from './commons/ListItems';

const {height} = Dimensions.get('window');
var totalAmount = 0;

const Cart = ({navigation}) => {
  const dispatch = useDispatch();
  const stateItems = useSelector(state => state.Cart);

  const handleValueChanged = (i, value) => {
    dispatch(AddToCart(i, value));
  };
  const handleAddTotalAmount = () => {
    const keys = Object.keys(stateItems.selectedItems);
    const b = stateItems.selectedItems;
    const val = keys.reduce((a, i) => {
      const v1 = b[i];
      const count = v1['count'];
      const amount = v1['price'];
      const ap = count * amount + a;

      return ap;
    }, 0);

    return val;
    // console.log(val);
  };
  return (
    <View style={{flex: 1, marginHorizontal: HelperFunction.Scale(10)}}>
      <Text style={{fontSize: 30, color: AppColor.loginTextColor}}>Cart</Text>
      {/* <View style={{height: height, backgroundColor: 'red'}}> */}
      <CommonListItems Items={Items} />
      {/* </View> */}
      {/* </ScrollView> */}

      <View style={styles.checkoutContainer}>
        <Divider />
        <View style={styles.checkoutInnerContainer}>
          <View>
            <Text>TOTAL</Text>
            <Text style={styles.amountStyle}>${handleAddTotalAmount()}</Text>
            <Text>Free Domestic Shipping</Text>
          </View>
          {/* <View style={{flex: 1/2}}> */}
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: AppColor.orangeColor,
              borderRadius: 40,
              paddingVertical: 20,
              paddingHorizontal: 20,
              width: 160,
            }}
            onPress={() => navigation.navigate('Checkout')}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>CHECKOUT</Text>
            <Image
              source={Images.buttonSee}
              style={{
                height: 20,
                width: 20,
                resizeMode: 'contain',
                marginLeft: 10,
              }}
            />
          </TouchableOpacity>
          {/* </View> */}
        </View>
      </View>
    </View>
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

export default Cart;
