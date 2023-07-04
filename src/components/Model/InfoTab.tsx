import React from 'react';
import { SText } from '../Styled/SText';
import { SFlex } from '../Styled/SFlex';
import InfoItem from './InfoItem';
import LoveSvg from 'assets/icons/love.svg';
import GenderSvg from 'assets/icons/gender.svg';
import CollegeSvg from 'assets/icons/college.svg';
import HandsSvg from 'assets/icons/hands.svg';
import ChildrenSvg from 'assets/icons/children.svg';
import { StyleSheet, View } from 'react-native';
import { Colors } from 'utils/styles';
import LocationSvg from 'assets/icons/location-black.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export const InfoTab = () => {

  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingBottom: insets.bottom + 90 }}>
      <View style={styles.container}>
        <SText
          type="h3bold"
          opacity={0.6}
          marginBottom={10}
        >
          Информация о себе
        </SText>
        <SText
          type="description"
          opacity={0.8}
          marginBottom={40}
        >
          Привет! Встретить двух похожих внешне и духовно людей – невозможно.
          Все мы разные по характеру, по темпераменту и своим взглядам на жизнь.
        </SText>
        <SText
          type="h3bold"
          opacity={0.6}
          marginBottom={10}
        >
          Общая информация
        </SText>
        <SFlex flexWrap="wrap" gap={14}>
          <InfoItem icon={<LoveSvg />} text="гетеро" />
          <InfoItem icon={<GenderSvg />} text="нейтральное" />
          <InfoItem icon={<CollegeSvg />} text="высшее" />
          <InfoItem icon={<HandsSvg />} text="христианство" />
          <InfoItem icon={<ChildrenSvg />} text="нет и не хочу" />
        </SFlex>
      </View>
      <View style={styles.jobInfo}>
        <SText type="h3bold" opacity={0.6} marginBottom={10}>
          Ксения работает в
        </SText>
        <SText type="h1" marginBottom={28}>
          Netpeak Group
        </SText>
        <SText type="h3bold" opacity={0.6} marginBottom={10}>
          На должности
        </SText>
        <SText type="h1" marginBottom={10}>
          Маркетолог
        </SText>
        <SText
          type="h3bold"
          opacity={0.6}
          marginBottom={10}
          marginTop={24}
        >
          Местоположение
        </SText>
        <View style={styles.joblocation}>
          <SFlex flex={1} gap={10} paddingTop={17} paddingBottom={17} paddingLeft={18} paddingRight={18}>
            <LocationSvg />
            <SFlex flex={1}>
              <SText type="h3medium" numberOfLines={1}>
                Fitzrovia, 6 Market Place, London...
              </SText>
            </SFlex>
          </SFlex>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 26,
    paddingTop: 18,
  },
  jobInfo: {
    backgroundColor: Colors.GrayBg,
    paddingHorizontal: 26,
    paddingVertical: 24,
    marginTop: 32,
    borderRadius: 40,
  },
  joblocation: {
    backgroundColor: Colors.White,
    borderRadius: 14,
  },
});

