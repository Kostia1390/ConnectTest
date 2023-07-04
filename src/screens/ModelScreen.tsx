import React, { useState } from 'react';
import { Image, StatusBar, StyleSheet, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Colors, baseStyle, screenHeight, screenWidth } from 'utils/styles';
import { photoList } from 'utils/data';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ModelInfoHeader } from 'components/Model/ModelInfoHeader';
import { useNavigation } from '@react-navigation/native';
import { ModelMainInfo } from 'components/Model/ModelMainInfo';
import { ModelBottomSheet } from 'components/Model/ModelBottomSheet';
import { ConnectionModal } from 'components/Model/ConnectionModal';


export const ModelScreen = () =>  {

  const insets = useSafeAreaInsets();
  const { goBack } = useNavigation();
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [showConnection, setShowConnection] = useState(false);

  return (
    <View style={baseStyle.screenView}>
      <StatusBar
        barStyle="light-content"
        translucent={false}
      />
      <Carousel
        layout="default"
        data={photoList}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item }}
            style={styles.photo}
          />
        )}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        itemHeight={screenHeight}
        sliderHeight={screenHeight}
        activeSlideOffset={0}
        inactiveSlideScale={1}
        vertical={false}
        onSnapToItem={index => setActiveSlide(index)}
      />
      <View
        style={[
          styles.header,
          {
            top: insets.top,
          },
        ]}
      >
        <Pagination
          dotsLength={photoList.length}
          activeDotIndex={activeSlide}
          containerStyle={[
            styles.paginationContainer,
          ]}
          dotContainerStyle={[
            styles.dotContainerStyle,
            {
              width: (screenWidth - 52) / photoList.length - 14,
            },
          ]}
          dotStyle={[
            styles.dot,
            {
              width: (screenWidth - 52) / photoList.length - 14,
              backgroundColor: Colors.White,
            },
          ]}
          inactiveDotStyle={[
            styles.dot,
            {
              width: (screenWidth - 52) / photoList.length - 14,
              backgroundColor: Colors.InactiveDot,
            },
          ]}
          inactiveDotOpacity={1}
          inactiveDotScale={1}
        />
        <ModelInfoHeader
          goBack={() => goBack()}
          name="@kseniia2303"
        />
      </View>
      <View style={[
        styles.mainInfo,
        {
          bottom: screenHeight * 0.19,
        },
      ]}
      >
        <ModelMainInfo
          name="Ксения M."
          age={23}
          city="Sumy, UA"
        />
      </View>
      <ModelBottomSheet
        close={() => goBack()}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        openConnection={() => setShowConnection(true)}
      />
      <ConnectionModal
        isVisible={showConnection}
        close={() => setShowConnection(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  photo: {
    width: screenWidth,
    height: screenHeight,
    resizeMode: 'cover',
  },
  header: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 9999,
  },
  paginationContainer: {
    paddingVertical: 14,
  },
  dotContainerStyle: {
  },
  dot: {
    height: 2,
    borderRadius: 4,
    flex: 1,
  },
  mainInfo: {
    position: 'absolute',
    left: 0,
    right: 0,
    paddingHorizontal: 26,
  },
});
