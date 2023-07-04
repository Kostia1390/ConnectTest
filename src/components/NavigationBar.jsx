import React from 'react';
import { StyleSheet, View } from 'react-native';
import { screenWidth } from '../utils/styles';
import { SButton } from './Styled/SButton';
import HomeIcon from '../assets/icons/home.svg';
import ChatIcon from '../assets/icons/chat.svg';
import { SFlex } from './Styled/SFlex';
import { BackgroundBlur } from './BackgroundBlur';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const NavigationBar = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.wrapper}>
      <SFlex justifyContent="center" paddingTop={16} gap={100} paddingBottom={insets.bottom + 16}>
        {/* <SButton onPress={() => {}}>
          <HomeIcon />
        </SButton>
        <SButton onPress={() => {}}>
          <ChatIcon />
        </SButton> */}
      </SFlex>
      {/* <BackgroundBlur borderTopRightRadius={20} borderTopLeftRadius={20} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: screenWidth,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
