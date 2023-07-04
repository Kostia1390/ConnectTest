import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Colors, screenWidth } from 'utils/styles';
import MailSvg from 'assets/icons/mail.svg';
import { SText } from '../Styled/SText';
import { ModalWrapper } from '../ModalWrapper';
import { SButton } from '../Styled/SButton';
import { Input } from '../UI/Input';

interface IProps {
  isVisible: boolean;
  close: () => void;
}

export const ConnectionModal = ({ isVisible, close }: IProps) => {
  return (
    <ModalWrapper
      isVisible={isVisible}
      close={close}
    >
      <ScrollView contentContainerStyle={styles.wrapper}>
        <View style={styles.content}>
          <MailSvg width={155} height={135}/>
          <SText type="subtitle" marginTop={60} textAlign="center">
              Отправка коннекта
          </SText>
          <SText type="description" marginTop={10} textAlign="center">
              Мы отправим ваше предложение пользователю, так же вы можете отправить
              приветственное сообщение
          </SText>
        </View>
        <View style={styles.inputContainer}>
          <Input
            defaultValue=""
            onChangeText={e => {
              console.log(e);
            }}
            type="text"
            placeholder="Введите сообщение"
          />
        </View>
        <SButton
          onPress={() => {}}
          baseColor={Colors.DarkGray}
          styleBtn={styles.button}
          borderRadius={55}
          marginBottom={10}
        >
          <SText color={Colors.White} textAlign="center" type="h3bold">
              Отправить коннект
          </SText>
        </SButton>
      </ScrollView>
    </ModalWrapper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    //paddingTop: 60,
    paddingHorizontal: 26,
    flexGrow: 1,
  },
  content: {
    alignItems: 'center',
  },
  button: {
    paddingVertical: 19,
    width: screenWidth - 52,
  },
  inputContainer: {
    paddingVertical: 40,
  },
});
