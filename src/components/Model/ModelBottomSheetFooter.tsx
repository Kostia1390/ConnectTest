import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomSheetFooter, BottomSheetFooterProps } from '@gorhom/bottom-sheet';
import { StyleSheet, View } from 'react-native';
import { SFlex } from 'components/Styled/SFlex';
import { SButton } from 'components/Styled/SButton';
import CloseSvg from 'assets/icons/close.svg';
import FollowSvg from 'assets/icons/follow.svg';
import { Colors } from 'utils/styles';

interface CustomFooterProps extends BottomSheetFooterProps {
  close: () => void;
  openConnection: () => void;
}

export const ModelBottomSheetFooter = ({ animatedFooterPosition, close, openConnection }: CustomFooterProps) => {

  const insets = useSafeAreaInsets();

  return (
    <BottomSheetFooter
      animatedFooterPosition={animatedFooterPosition}
    >
      <View style={[
        styles.footer,
        {
          paddingBottom: insets.bottom + 5,
        },
      ]}
      >
        <SFlex gap={9} paddingLeft={26} paddingRight={26}>
          <SButton
            onPress={() => close()}
            styleBtn={styles.btn}
            baseColor={Colors.LightGray}
            borderRadius={40}
          >
            <CloseSvg />
          </SButton>
          <View style={{ flex: 1 }}>
            <SButton
              onPress={() => openConnection()}
              styleBtn={styles.btn}
              baseColor={Colors.DarkGray}
              borderRadius={40}
            >
              <SFlex justifyContent="center">
                <FollowSvg />
              </SFlex>
            </SButton>
          </View>
        </SFlex>
      </View>
    </BottomSheetFooter>
  );
};

const styles = StyleSheet.create({
  footer: {
    paddingTop: 8,
    backgroundColor: Colors.BackgroundModal,
  },
  btn: {
    paddingHorizontal: 30,
    paddingVertical: 21,
  },
});
