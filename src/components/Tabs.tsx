import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from 'utils/styles';
import { SButton } from './Styled/SButton';
import { SText } from './Styled/SText';

interface IProps {
  items: Array<{
    title: string,
    value: number;
  }>
  activeTab: number;
  setActiveTab: (val: number) => void;
}

export const Tabs = ({ items, activeTab, setActiveTab }: IProps) => {
  return (
    <View style={styles.tabs}>
      {items.map((it, index) => (
        <SButton
          onPress={() => setActiveTab(it.value)}
          key={index}
          borderRadius={40}
          styleBtn={styles.tab}
          baseColor={activeTab === it.value ? Colors.White : Colors.transparent}
        >
          <SText
            textAlign="center"
            type={activeTab === it.value ? 'h3SemiBold' : 'h3'}
          >
            {it.title}
          </SText>
        </SButton>
      ))}
    </View>
  );
};


const styles = StyleSheet.create({
  tabs: {
    borderRadius: 50,
    backgroundColor: Colors.GrayBg,
    padding: 4,
    flexDirection: 'row',
  },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    flex: 1,
  },
});
