import React, { useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { onScrollEvent } from "../../utils/onScrollEvents";
import Animated, { interpolateColors, multiply } from "react-native-reanimated";
import { useValue } from "react-native-redash/lib/module/v1";
import { interpolateColor } from "react-native-redash";

import Slide, { SLIDE_HEIGHT } from "./Slide";
import Subslide from "./Subslide";

const { width, height } = Dimensions.get("window");

const BORDER_RADIUS = 75;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
});

const slides = [
  {
    title: "Relaxed",
    subtitle: "Find Your Outfits",
    description:
      "Confused about your outfits? Don't worry! Find the best of them",
    color: "#BFEAF5",
    right: false,
    // picture: require('../../assets/images/1.png'),
  },
  {
    title: "Playful",
    subtitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfits ideas",
    color: "#BEECC4",
    right: true,
    // picture: require('../../assets/images/2.png'),
  },
  {
    title: "Excentric",
    subtitle: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday",
    color: "#FFE4D9",
    right: false,
    // picture: require('../../assets/images/3.png'),
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    color: "#FFDDDD",
    right: true,
    // picture: require('../../assets/images/4.png'),
  },
];

const Onboarding = () => {
  const scroll = useRef<Animated.ScrollView>(null);
  const x = useValue(0);
  const onScroll = onScrollEvent({ x });
  const backgroundColor: Animated.Mapping = interpolateColors(x, {
    inputRange: slides.map((_, i) => i * width),
    outputColorRange: slides.map((slide) => slide.color),
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...{ onScroll }}
        >
          {slides.map(({ title }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <Animated.View
          style={[
            styles.footerContent,
            {
              width: width * slides.length,
              flex: 1,
              transform: [{ translateX: multiply(x, -1) }],
            },
          ]}
        >
          {slides.map(({ subtitle, description }, index) => (
            <Subslide
              key={index}
              last={index === slides.length - 1}
              onPress={() => {
                if (scroll.current) {
                  scroll.current
                    .getNode()
                    .scrollTo({ x: width * (index + 1), animated: true });
                }
              }}
              {...{ subtitle, description }}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
};

export default Onboarding;
