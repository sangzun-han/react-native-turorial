import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Animated,
  Image,
} from 'react-native';

//constants
import {images, theme} from '../../constants';
const {onboarding1, onboarding2, onboarding3} = images;

//theme
const {COLORS, FONTS, SIZES} = theme;

//dummy data
const onBoarding = [
  {
    title: "Let's Travelling",
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing',
    img: onboarding1,
  },
  {
    title: 'Navigation',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing',
    img: onboarding2,
  },
  {
    title: 'Destination',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing',
    img: onboarding3,
  },
];
const OnBoarding = () => {
  //render

  function renderContent() {
    return (
      <Animated.ScrollView
        horizontal
        padingEnabled
        scrollEnabled
        snapToAlignment="center">
        {onBoarding.map((item, index) => (
          <View key={index} style={{width: SIZES.width}}>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={item.img}
                resizeMode="cover"
                style={{width: '100%', height: '100%'}}
              />
            </View>
            {/* Text */}
            <View
              style={{
                position: 'absolute',
                bottom: '10%',
                left: 40,
                right: 40,
              }}>
              <Text
                style={{
                  ...FONTS.h1,
                  color: COLORS.gray,
                  textAlign: 'center',
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  ...FONTS.body3,
                  textAlign: 'center',
                  marginTop: SIZES.base,
                  color: COLORS.gray,
                }}>
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>{renderContent()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
});
export default OnBoarding;
