import React, { useState } from 'react';
import { TopBar } from 'components/Header';
import { NavigationBar } from 'components/NavigationBar';
import { ModelCard } from 'components/Model/ModelCard';
import Carousel from 'react-native-snap-carousel';
import { baseStyle, screenHeight, screenWidth } from 'utils/styles';
import Swipeable from 'react-native-swipeable';
import { modelList } from 'utils/data';
import { useNavigation } from '@react-navigation/native';
import { ScreenEnum } from 'utils/types';
import { View } from 'react-native';


export const MainScreen = () => {

  const [models, setModels] = useState(modelList);
  const { navigate } = useNavigation();

  const deleteModel = (index: number) => {
    const list = [...models];
    list.splice(index, 1);
    setModels(list);
  };

  return (
    <View style={baseStyle.screenView}>
      <Carousel
        layout="default"
        data={models}
        renderItem={({ item, index }) => (
          <>
            <Swipeable
              leftContent={<></>}
              rightContent={<></>}
              leftActionActivationDistance={90}
              rightActionActivationDistance={90}
              onLeftActionRelease={() => deleteModel(index)}
              onRightActionRelease={() => deleteModel(index)}
            >
              <ModelCard
                img={item}
                openProfile={() => navigate(ScreenEnum.Model)}
              />
            </Swipeable>
          </>
        )}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        itemHeight={screenHeight * 0.68}
        swipeThreshold={40}
        inactiveSlideOpacity={1}
        inactiveSlideScale={0.9}
        sliderHeight={screenHeight}
        vertical
      />
      <TopBar/>
      <NavigationBar/>
    </View>
  );
};

