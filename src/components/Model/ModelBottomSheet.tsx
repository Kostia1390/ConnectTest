import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from 'utils/styles';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { ModelBottomSheetFooter } from './ModelBottomSheetFooter';
import { Tabs } from 'components/Tabs';
import PagerView from 'react-native-pager-view';
import { InfoTab } from './InfoTab';
import { CompatibilityTab } from './CompatibilityTab';

interface IProps {
  close: () => void;
  setActiveTab: (val: number) => void;
  activeTab: number;
  openConnection: () => void;
}

export const ModelBottomSheet = ({ close, setActiveTab, activeTab, openConnection }: IProps) => {

  const bottomSheetRef = useRef<BottomSheet>(null);
  const pagerRef = useRef<PagerView>(null);

  return (
    <>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={['17%', '82%']}
        footerComponent={props => (
          <ModelBottomSheetFooter
            {...props}
            close={close}
            openConnection={() => {
              bottomSheetRef.current?.snapToIndex(0);
              openConnection();
            }}
          />
        )}
        handleStyle={styles.handleStyle}
      >
        <View style={styles.wrapper}>
          <Tabs
            items={[
              {
                title: 'Совместимость',
                value: 0,
              },
              {
                title: 'Инфо',
                value: 1,
              },
            ]}
            activeTab={activeTab}
            setActiveTab={e => {
              setActiveTab(e);
              pagerRef.current?.setPage(e);
            }}
          />
        </View>
        <PagerView
          style={styles.pagerView}
          initialPage={activeTab}
          onPageSelected={e => {
            if (e.nativeEvent.position !== activeTab) {
              setActiveTab(e.nativeEvent.position);
            }
          }}
          ref={pagerRef}
          scrollEnabled={false}
        >
          <View key="1">
            <BottomSheetScrollView contentContainerStyle={styles.container}>
              <CompatibilityTab />
            </BottomSheetScrollView>
          </View>
          <View key="2">
            <BottomSheetScrollView contentContainerStyle={styles.container}>
              <InfoTab />
            </BottomSheetScrollView>
          </View>
        </PagerView>
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 26,
    paddingVertical: 12,
    backgroundColor: Colors.BackgroundModal,
  },
  container: {
    flexGrow: 1,
    backgroundColor: Colors.BackgroundModal,
  },
  handleStyle: {
    backgroundColor: Colors.BackgroundModal,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  pagerView: {
    flex: 1,
  },
});
