import React from 'react';
import { Colors } from 'utils/styles';
import { StyleSheet, View } from 'react-native';
import { SText } from '../Styled/SText';

interface IProps {
    icon: any,
    text: string,
}

const InfoItem = ({ icon, text }: IProps) => {
  return (
    <View style={styles.wrapper}>
      {icon}
      <SText type="h3medium">{text}</SText>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.GrayBg,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'flex-end',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 40,
  },
});

export default InfoItem;
