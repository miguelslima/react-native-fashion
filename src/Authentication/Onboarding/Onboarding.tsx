import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  ImageRequireSource,
} from "react-native";
import { onScrollEvent } from "../../utils/onScrollEvents";
import Animated, {
  divide,
  Extrapolate,
  interpolate,
  interpolateColors,
  multiply,
} from "react-native-reanimated";
import { useValue } from "react-native-redash/lib/module/v1";
import { interpolateColor } from "react-native-redash";

import Slide, { SLIDE_HEIGHT } from "./Slide";
import Subslide from "./Subslide";
import Dot from "../../components/Dot";

import { makeStyles, Theme } from "../../components/Themes";

const { width, height } = Dimensions.get("window");

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: theme.borderRadii.xl,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: theme.borderRadii.xl,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    borderBottomRightRadius: theme.borderRadii.xl,
    overflow: "hidden",
  },
}));
const slides = [
  {
    title: "Relaxed",
    subtitle: "Find Your Outfits",
    description:
      "Confused about your outfits? Don't worry! Find the best of them",
    color: "#BFEAF5",
    right: false,
    picture: {
      src: require("../../assets/images/1.png"),
      width: 2513,
      height: 3583,
    },
  },
  {
    title: "Playful",
    subtitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfits ideas",
    color: "#BEECC4",
    right: true,
    picture: {
      src: require("../../assets/images/2.png"),
      width: 2791,
      height: 3744,
    },
  },
  {
    title: "Excentric",
    subtitle: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday",
    color: "#FFE4D9",
    right: false,
    picture: {
      src: require("../../assets/images/3.png"),
      width: 1757,
      height: 2551,
    },
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    color: "#FFDDDD",
    right: true,
    picture: {
      src: require("../../assets/images/4.png"),
      width: 2513,
      height: 3583,
    },
  },
];

const Onboarding = () => {
  const styles = useStyles();
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
        {slides.map(({ picture }, index) => {
          const opacity = interpolate(x, {
            inputRange: [
              (index - 0.5) * width,
              index * width,
              (index + 0.5) * width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });

          return (
            <Animated.View style={[styles.underlay, { opacity }]} key={index}>
              <Image
                source={picture.src}
                style={{
                  width: width - 75,
                  height: ((width - 75) * picture.height) / picture.width,
                }}
              />
            </Animated.View>
          );
        })}
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
          {slides.map(({ title, picture }, index) => (
            <Slide
              key={index}
              right={!!(index % 2)}
              {...{ title }}
              // picture={picture}
            />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />

        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} {...{ index }} />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: "row",
              width: width * slides.length,
              transform: [{ translateX: multiply(x, -1) }],
            }}
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
    </View>
  );
};

export default Onboarding;
