import React from 'react';
import { StyleSheet, Pressable, View } from 'react-native';
import Modal from 'react-native-modal';
import CloseIcon from 'assets/icons/close-modal.svg';
import { Colors, screenHeight } from 'utils/styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface IProps {
  children: React.ReactNode,
  isVisible: boolean;
  close: () => void;
}

export const ModalWrapper = ({ children, isVisible, close }: IProps) => {
  const insets = useSafeAreaInsets();
  return (
    <Modal
      isVisible={isVisible}
      backdropColor="#000"
      backdropOpacity={0.7}
      style={[
        styles.modal,
      ]}
      onSwipeComplete={() => close()}
      useNativeDriverForBackdrop
      swipeDirection={['down']}
      propagateSwipe={true}
      avoidKeyboard
      deviceHeight={screenHeight}
    >
      <View style={[
        styles.modalWrapper,
        { paddingBottom: insets.bottom },
      ]}
      >
        <Pressable style={styles.close} onPress={() => close()}>
          <CloseIcon/>
        </Pressable>
        {children}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackdrop: {
    flex: 1,
  },
  blur: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
  },
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalWrapper: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: Colors.White,
  },
  close: {
    position: 'absolute',
    top: 14,
    right: 14,
    zIndex: 1,
  },
});
