import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import styled, { css } from '@emotion/native';
import { useNavigation } from '@react-navigation/native';

const HeaderMessage = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  const goToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <>
      <MainContainer>
        <TouchableOpacity onPress={goToHome}>
          <Image
            source={require('../../assets/svg/Back.png')}
            style={{ width: 40, height: 40, marginRight: 10 }}
          />
        </TouchableOpacity>
        <Image source={require('../../assets/svg/Logo1.png')} style={{ width: 40, height: 40 }} />
        <MessageTextWrapper>
          <TextUser>Ксения Миро</TextUser>
          <TextMessage>@ksenia2303</TextMessage>
        </MessageTextWrapper>

        <Image
          source={require('../../assets/svg/camera.png')}
          style={{ width: 24, height: 24, marginLeft: 30 }}
        />
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image source={require('../../assets/svg/Etc.png')} style={{ width: 40, height: 40 }} />
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <ModalContainer>
            <ModalWrapper>
              <TextModal>Ответить</TextModal>
              <TextModal>Скопировать</TextModal>
              <TextModal>Изменить</TextModal>
              <TextModal user>Удалить</TextModal>
              <TouchableOpacity onPress={closeModal}>
                <TextModal back>Отмена</TextModal>
              </TouchableOpacity>
            </ModalWrapper>
          </ModalContainer>
        </Modal>
      </MainContainer>
    </>
  );
};

const TextModal = styled(Text)`
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  padding: 25px 0px 10px 0px;
  ${(props) =>
    props.user &&
    css`
      font-weight: 500;
      color: #fc6d64;
    `}
  ${(props) =>
    props.back &&
    css`
      font-weight: 300;
      margin-top: 15px;
      color: #2c2c2c;
    `}
`;

const ModalWrapper = styled(View)`
  width: 338px;
  height: 290px;
  border-radius: 20px;
  padding: 0px 30px 10px 30px;
  align-items: center;
  background-color: #f3f2f8;
`;

const ModalContainer = styled(View)`
  padding-top: 400px;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.85);
`;

const MessageTextWrapper = styled(View)`
  flex-direction: column;
`;

const TextUser = styled(Text)`
  font-size: 17px;
  font-weight: 600;
  line-height: 23px;
`;

const TextMessage = styled(Text)`
  font-size: 11px;
  font-weight: 300;
  line-height: 15px;
`;

const MainContainer = styled(View)`
  padding: 50px 30px 10px 30px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: #e8e7ed;
`;

export default HeaderMessage;
