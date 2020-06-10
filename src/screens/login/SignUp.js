import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {
  WhiteContainer,
  InputContent,
  CommonButton,
  commonStyles,
} from '../../commons';

import {HelperFunction} from '../../helpers';
import {AppColor} from '../../constants';
import {Images} from '../../images';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleonPress = () => {
    if (!email || !userName || !password) {
      setError('None of the field can be empty');
    } else if (HelperFunction.validNumber(email)) {
      setError('Please enter email address in correct format');
    } else {
      alert('navigate');
    }
  };
  const handleEmailOnChange = email => {
    setEmail(email);
    setError('');
  };
  const handleUsername = val => {
    setUserName(val);
    setError('');
  };
  const handlePassword = val => {
    setPassword(val);
    setError('');
  };
  return (
    <View style={commonStyles.LoginHorizontalMwargin}>
      <WhiteContainer>
        <InputContent
          placeholder="EMAIL"
          icon={Images.email}
          value={email}
          onChange={val => handleEmailOnChange(val)}
        />
        <InputContent
          placeholder="USERNAME"
          icon={Images.username}
          value={userName}
          onChange={val => handleUsername(val)}
        />
        <InputContent
          placeholder="PASSWORD"
          icon={Images.password}
          value={password}
          onChange={val => handlePassword(val)}
          password
        />
      </WhiteContainer>
      <Text style={[commonStyles.errorStyle]}>{error}</Text>

      <CommonButton
        title="SIGN UP"
        externalStyle={{backgroundColor: AppColor.orangeColor}}
        onPress={handleonPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
