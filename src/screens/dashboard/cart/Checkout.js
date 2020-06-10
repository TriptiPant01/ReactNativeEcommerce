import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useSelector} from 'react-redux';

import {Items} from '../../../Dummydata';

import {Header, Divider} from '../../../commons';
import {AppColor} from '../../../constants';
import {Images} from '../../../images';
import CommonListItems from './commons/ListItems';

const CheckOut = ({navigation}) => {
  const items = useSelector(state => state.Cart);
  const selectedItems = items.selectedItems;

  const renderItems = () => {
    const keys = Object.values(selectedItems);
    console.log(keys);
    return <CommonListItems Items={keys} />;
  };

  return (
    <View style={styles.wrapper}>
      <Header crossIcon={true} navigation={navigation} />
      <View style={styles.innerContainerWrapper}>
        <Text style={styles.mainHeader}>Checkout</Text>

        <View style={styles.innerLocationContainer}>
          <View style={styles.innerLocationRowContainer}>
            <Text style={styles.shippingStyle}>SHIPPING ADDRESS</Text>

            <Text style={styles.shippingStyle}>House No.</Text>
            <Text style={styles.shippingStyle}>Main Street Address</Text>
            <Text style={styles.shippingStyle}>City Name, Province</Text>
            <Text style={styles.shippingStyle}>Country</Text>
          </View>
          <TouchableOpacity>
            <Image source={Images.smallArrow} />
          </TouchableOpacity>
        </View>
        <Divider />
        <TouchableOpacity style={styles.paymentStyleContainer}>
          <Text style={styles.shippingStyle}>Payment Method</Text>
        </TouchableOpacity>
        <Divider />
        {renderItems()}
        <View style={styles.itemListContainer}></View>
        <Divider />
        <TouchableOpacity style={styles.promoCodeContainer}>
          <View style={styles.promodeCodeCOntainer}>
            <Image source={Images.promoCode} />
            <Text style={styles.promoCodetext}>Add Promo Code</Text>
          </View>
          <Image source={Images.smallArrow} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  innerContainerWrapper: {
    marginHorizontal: 20,
  },
  mainHeader: {
    fontSize: 30,
    color: AppColor.borderColor,
    fontWeight: 'bold',
  },
  innerLocationContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paymentStyleContainer: {
    marginVertical: 30,
  },
  shippingStyle: {
    fontSize: 15,
  },
  promoCodeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  promoCodetext: {
    color: AppColor.orangeColor,
  },
  promodeCodeCOntainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerLocationRowContainer: {
    flexDirection: 'column',
  },
});
