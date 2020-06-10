import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {WhiteContainer, CommonButton, InputContent} from '../../commons';

import {AppColor} from '../../constants';
import {Images} from '../../images';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.loginWrapper}>
      <WhiteContainer>
        <InputContent
          placeholder="USERNAME/EMAIL"
          icon={Images.username}
          autofocus={true}
          onChange={val => setEmail(val)}
          value={email}
        />
        <InputContent
          placeholder="PASSWORD"
          icon={Images.password}
          password
          onChange={val => setPassword(val)}
          value={password}
        />
      </WhiteContainer>
      <CommonButton
        title="LOG IN"
        externalStyle={{backgroundColor: AppColor.orangeColor}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginWrapper: {
    marginHorizontal: 20,
  },
});
