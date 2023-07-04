import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { SFlex } from '../Styled/SFlex';
import { SText } from '../Styled/SText';
import LocationSvg from 'assets/icons/location.svg';
import InfoSvg from 'assets/icons/info.svg';
import { Colors, screenHeight, screenWidth } from 'utils/styles';
import { SButton } from '../Styled/SButton';
import Compatibility from 'assets/icons/compatibility.svg';

interface IProps {
  img: string;
  openProfile: () => void;
}

export const ModelCard = ({ img, openProfile }: IProps) => {
  return (
    <View style={styles.contentWrapper}>
      <ImageBackground
        source={{ uri: img }}
        resizeMode="cover"
        style={styles.wrapper}
        borderRadius={20}
      >
        <View style={styles.header}>
          <Compatibility/>
        </View>
        <SFlex justifyContent="space-between" zIndex={1}>
          <View>
            <SFlex gap={10} marginBottom={8}>
              <LocationSvg opacity={0.5}/>
              <SText color={Colors.White} type="h3" opacity={0.5}>
                London, UK
              </SText>
            </SFlex>
            <SFlex>
              <SText color={Colors.White} type="h1">
                Ксения M.
              </SText>
              <SText color={Colors.White} type="h1Light" marginStart={10}>
                24
              </SText>
            </SFlex>
          </View>
          <SButton
            onPress={() => openProfile()}
            baseColor={Colors.WhiteTransparent}
            borderRadius={50}
            styleBtn={{ padding: 15 }}
          >
            <InfoSvg />
          </SButton>
        </SFlex>
        <View style={styles.backdrop}/>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 30,
    height: screenHeight * 0.7,
    width: screenWidth - 40,
    justifyContent: 'space-between',
    padding: 20,
  },
  images: {
    borderRadius: 20,
    resizeMode: 'cover',
    flex: 1,
  },
  contentWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    //left: 20,
    //right: 20,
    borderRadius: 30,
    zIndex: 0,
  },
  header: {
    zIndex: 1,
    alignItems: 'flex-end',
  },
});
