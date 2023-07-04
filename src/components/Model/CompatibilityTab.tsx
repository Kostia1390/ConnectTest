import React from 'react';
import { SText } from '../Styled/SText';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const CompatibilityTab = () => {

  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom + 90 }]}>
      <SText
        type="h3bold"
        color={Colors.Text}
        opacity={0.6}
        marginBottom={10}
      >
        Описание в любви
      </SText>
      <SText
        type="description"
        color={Colors.Text}
        opacity={0.8}
        marginBottom={40}
      >
        Встретить двух похожих внешне и духовно людей – невозможно. Все мы
        разные по характеру, по темпераменту и своим взглядам на жизнь. Диву
        даешься, как мы умудряемся понимать, принимать и постигать таинства души
        друг друга.
      </SText>
      <SText
        type="h3bold"
        color={Colors.Text}
        opacity={0.6}
        marginBottom={10}
      >
        Сценарий взаимодействия
      </SText>
      <SText
        type="description"
        color={Colors.Text}
        opacity={0.8}
        marginBottom={40}
      >
        Все мы разные по характеру, по темпераменту и своим взглядам на жизнь.
        Диву даешься, как мы умудряемся понимать, принимать и постигать таинства
        души друг друга. Встретить двух похожих внешне и духовно людей –
        невозможно.
      </SText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 26,
    paddingTop: 18,
  },
});
