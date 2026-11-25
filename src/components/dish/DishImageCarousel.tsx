import React, { useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { Image } from 'expo-image';
import { Colors } from '@/constants/theme';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const HERO_HEIGHT = 340;

interface DishImageCarouselProps {
  images: any[];
}

export const DishImageCarousel: React.FC<DishImageCarouselProps> = ({ images }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slide = Math.round(event.nativeEvent.contentOffset.x / SCREEN_WIDTH);
    if (slide >= 0 && slide < images.length) {
      setActiveSlide(slide);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.scrollView}
      >
        {images.map((img, index) => (
          <View key={index} style={styles.imageWrapper}>
            <Image
              source={img}
              style={styles.image}
              contentFit="cover"
              transition={250}
            />
          </View>
        ))}
      </ScrollView>

      {/* Pagination Dots */}
      {images.length > 1 && (
        <View style={styles.paginationContainer}>
          {images.map((_, index) => {
            const isActive = index === activeSlide;
            return (
              <View
                key={index}
                style={[
                  styles.dot,
                  isActive ? styles.dotActive : styles.dotInactive,
                ]}
              />
            );
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: HERO_HEIGHT,
    backgroundColor: Colors.surfaceAlt,
    position: 'relative',
  },
  scrollView: {
    width: SCREEN_WIDTH,
    height: HERO_HEIGHT,
  },
  imageWrapper: {
    width: SCREEN_WIDTH,
    height: HERO_HEIGHT,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 24,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    zIndex: 10,
  },
  dot: {
    height: 6,
    borderRadius: 3,
  },
  dotActive: {
    width: 20,
    backgroundColor: '#FFFFFF',
  },
  dotInactive: {
    width: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.55)',
  },
});
