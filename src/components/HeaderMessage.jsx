import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import styled, { css } from '@emotion/native';

const HeaderMessage = () => {
  return (
    <MainContainer>
      <Image
        source={require('../../assets/svg/Back.png')}
        style={{ width: 40, height: 40, marginRight: 10 }}
      />
      <Image source={require('../../assets/svg/Logo1.png')} style={{ width: 40, height: 40 }} />
      <MessageTextWrapper>
        <TextUser>Ксения Миро</TextUser>
        <TextMessage>@ksenia2303</TextMessage>
      </MessageTextWrapper>
      <Image
        source={require('../../assets/svg/camera.png')}
        style={{ width: 24, height: 24, marginLeft: 30 }}
      />
      <Image source={require('../../assets/svg/Etc.png')} style={{ width: 40, height: 40 }} />
    </MainContainer>
  );
};

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
