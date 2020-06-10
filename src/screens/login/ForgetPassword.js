import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {Images} from '../../images';
import {AppColor} from '../../constants';
import {
  WhiteContainer,
  InputContent,
  CommonButton,
  commonStyles,
} from '../../commons';
export const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  return (
    <View style={commonStyles.LoginHorizontalMwargin}>
      <WhiteContainer>
        <InputContent
          placeholder="EMAIL"
          icon={Images.email}
          value={email}
          onChange={val => setEmail(val)}
        />
      </WhiteContainer>
      <CommonButton
        title="SEND EMAIL"
        externalStyle={{backgroundColor: AppColor.orangeColor}}
      />
    </View>
  );
};
