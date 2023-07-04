import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SFlex } from '../Styled/SFlex';
import { SButton } from '../Styled/SButton';
import { Colors } from 'utils/styles';
import ArrowBack from 'assets/icons/arrow-left.svg';
import { SText } from '../Styled/SText';

interface IProps {
  goBack: () => void;
  name: string;
}

export const ModelInfoHeader = ({ goBack, name }: IProps) => {
  return (
    <SFlex
      justifyContent="space-between"
      paddingLeft={26}
      paddingRight={26}
    >
      <SButton
        onPress={() => goBack()}
        baseColor={Colors.LightGray}
        borderRadius={50}
        styleBtn={styles.btn}
      >
        <ArrowBack width={20} height={20}/>
      </SButton>
      <View style={styles.nameWrapper}>
        <SText type="h2" color={Colors.White}>{name}</SText>
      </View>
    </SFlex>
  );
};

const styles = StyleSheet.create({
  nameWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: -1,
  },
  btn: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

