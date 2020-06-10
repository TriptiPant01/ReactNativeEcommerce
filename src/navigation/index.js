import React from 'react';

import {Image, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import {Images} from '../images'; //asdfa
import {AppColor} from '../constants';
import * as Screen from '../screens';
import {HelperFunction} from '../helpers';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack({navigation, route}) {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({tabBarVisible: false});
  } else {
    navigation.setOptions({tabBarVisible: true});
  }
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Screen.Home}
        options={{tabBarLabel: 'Settings!'}}
      />
      <Stack.Screen name="AllCategory" component={Screen.AllCategories} ta />
    </Stack.Navigator>
  );
}
function SearchStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Search" component={Screen.Search} />
    </Stack.Navigator>
  );
}
function CartStack({navigation, route}) {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({tabBarVisible: false});
  } else {
    navigation.setOptions({tabBarVisible: true});
  }
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Cart">
      <Stack.Screen name="Cart" component={Screen.Cart} />
      <Stack.Screen name="Checkout" component={Screen.Checkout} />
    </Stack.Navigator>
  );
}
function ProfileStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Cart" component={Screen.Profile} />
    </Stack.Navigator>
  );
}
function MoreStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Cart" component={Screen.More} />
    </Stack.Navigator>
  );
}
function IconWithBadge({name, badgeCount, color, size}) {
  return (
    <View style={{width: 30, height: 40, margin: 5}}>
      <Image
        source={Images.TabCart}
        style={{
          width: HelperFunction.Scale(18),
          resizeMode: 'contain',
          // tintColor: focused ? AppColor.orangeColor : AppColor.loginTextColor,
        }}
      />
      {badgeCount > 0 && (
        <View
          style={{
            // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
            position: 'absolute',
            left: -20,
            top: 10,
            backgroundColor: 'red',
            borderRadius: 7,
            width: 15,
            height: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
}
function HomeIconWithBadge(props) {
  // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
  return <IconWithBadge {...props} badgeCount={props.badgeCount} />;
}
export default function App() {
  const Count = useSelector(state => state.Cart);
  const {totalCount: badgeCount} = Count;

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = (
                <Image
                  source={Images.tabHome}
                  style={{
                    width: HelperFunction.Scale(18),
                    resizeMode: 'contain',
                    tintColor: focused
                      ? AppColor.orangeColor
                      : AppColor.loginTextColor,
                  }}
                />
              );
            }
            if (route.name === 'Search') {
              iconName = (
                <Image
                  source={Images.TabSearch}
                  style={{
                    width: HelperFunction.Scale(18),
                    resizeMode: 'contain',
                    tintColor: focused
                      ? AppColor.orangeColor
                      : AppColor.loginTextColor,
                  }}
                />
              );
            }
            if (route.name === 'Cart') {
              iconName = (
                <HomeIconWithBadge
                  badgeCount={badgeCount}
                  name={
                    focused ? (
                      <Image
                        source={Images.tabHome}
                        style={{
                          width: HelperFunction.Scale(18),
                          resizeMode: 'contain',
                          tintColor: focused
                            ? AppColor.orangeColor
                            : AppColor.loginTextColor,
                        }}
                      />
                    ) : (
                      <Image
                        source={Images.tabHome}
                        style={{
                          width: HelperFunction.Scale(18),
                          resizeMode: 'contain',
                          tintColor: focused
                            ? AppColor.orangeColor
                            : AppColor.loginTextColor,
                        }}
                      />
                    )
                  }
                  size={size}
                  color={color}
                />
              );
            }

            if (route.name === 'Profile') {
              iconName = (
                <Image
                  source={Images.TabProfile}
                  style={{
                    width: HelperFunction.Scale(18),
                    resizeMode: 'contain',
                    tintColor: focused
                      ? AppColor.orangeColor
                      : AppColor.loginTextColor,
                  }}
                />
              );
            }

            if (route.name === 'More') {
              iconName = (
                <Image
                  source={Images.tabMore}
                  style={{
                    width: HelperFunction.Scale(18),
                    resizeMode: 'contain',
                    tintColor: focused
                      ? AppColor.orangeColor
                      : AppColor.loginTextColor,
                  }}
                />
              );
            }
            return iconName;
          },
        })}
        tabBarOptions={{
          activeTintColor: AppColor.orangeColor,
          inactiveTintColor: AppColor.loginTextColor,
        }}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Search" component={SearchStack} />
        <Tab.Screen name="Cart" component={CartStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
        <Tab.Screen name="More" component={MoreStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
