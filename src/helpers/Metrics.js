import {Dimensions, Platform} from 'react-native';
import HelperFunction from './HelperFunction';
const {width, height} = Dimensions.get('window');
// Used via Metrics.baseMargin
const metrics = {
  marginHorizontal: HelperFunction.Scale(10),
  doubleMarginHorizontal: HelperFunction.Scale(20),
  marginVertical: HelperFunction.Scale(10),
  section: HelperFunction.Scale(25),
  baseMargin: HelperFunction.Scale(10),
  doubleBaseMargin: HelperFunction.Scale(20),
  smallMargin: HelperFunction.Scale(5),
  doubleSection: HelperFunction.Scale(50),
  horizontalLineHeight: HelperFunction.Scale(1),
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? 44 : 44,
  buttonRadius: HelperFunction.Scale(20),
  borderRadius: HelperFunction.Scale(5),
  icons: {
    tiny: HelperFunction.Scale(15),
    small: HelperFunction.Scale(20),
    medium: HelperFunction.Scale(30),
    large: HelperFunction.Scale(45),
    xl: HelperFunction.Scale(50),
  },
  images: {
    small: HelperFunction.Scale(20),
    medium: HelperFunction.Scale(40),
    large: HelperFunction.Scale(60),
    logo: HelperFunction.Scale(200),
  },
  button: {
    height: HelperFunction.Scale(40),
    smallWidth: HelperFunction.Scale(130),
    mediumWidth: HelperFunction.Scale(190),
    largeWidth: HelperFunction.Scale(360),
    verySmallWidth: HelperFunction.Scale(64),
    tinyWidth: HelperFunction.Scale(50),
  },
  field: {
    height: HelperFunction.Scale(40),
    largeWidth: HelperFunction.Scale(290),
    smallWidth: HelperFunction.Scale(125),
    width: HelperFunction.Scale(230),
  },
  platformType: Platform.OS === 'ios' ? 'ios' : 'android',
};

export default metrics;
