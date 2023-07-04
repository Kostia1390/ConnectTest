import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { SFlex } from './Styled/SFlex';
import Logo from 'assets/icons/logo.svg';
import NotificationSvg from 'assets/icons/notification.svg';
import { SButton } from './Styled/SButton';
import { Colors } from 'utils/styles';
import { BackgroundBlur } from './BackgroundBlur';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const TopBar = () => {

  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.wrapper,
        {
          paddingTop: insets.top + 12,
        },
      ]}
    >
      <SFlex justifyContent="space-between" zIndex={2}>
        <Image source={require('assets/images/avatar.png')} />
        <Logo />
        <SButton
          onPress={() => {}}
          baseColor={Colors.LightGray}
          styleBtn={styles.notificationBtn}
          borderRadius={50}
        >
          <NotificationSvg />
        </SButton>
      </SFlex>
      <BackgroundBlur
        borderBottomLeftRadius={20}
        borderBottomRightRadius={20}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 10,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 1,
  },
  logo: {
    width: 60,
    height: 60,
  },
  notificationBtn: {
    padding: 10,
  },
});

export default TopBar;
