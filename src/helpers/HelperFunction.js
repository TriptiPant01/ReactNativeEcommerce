import {Dimensions} from 'react-native';

const ValidEmail = email => {
  const checker = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
  return checker.test(email);
};
const validNumber = number => {
  const checker = /^\d*$/;
  return checker.test(number);
};

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const Scale = size => (width / guidelineBaseWidth) * size;
const VerticalScale = size => (height / guidelineBaseHeight) * size;
const ModerateScale = (size, factor = 0.5) =>
  size + (Scale(size) - size) * factor;

export default {
  ValidEmail,
  Scale,
  VerticalScale,
  ModerateScale,
  validNumber,
};
