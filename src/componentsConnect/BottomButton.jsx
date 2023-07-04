import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import styled, { css } from '@emotion/native';

const BottomButton = () => {
  return (
    <MainContainer>
      <Image source={require('../assets/svg/Button1.png')} style={{ width: 24, height: 24 }} />
      <Image source={require('../assets/svg/Button2.png')} style={{ width: 24, height: 24 }} />
      <Image source={require('../assets/svg/Button3.png')} style={{ width: 26, height: 24 }} />
      <Image source={require('../assets/svg/Button4.png')} style={{ width: 24, height: 24 }} />
    </MainContainer>
  );
};

const MainContainer = styled(View)`
  padding: 20px 50px 10px 50px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export default BottomButton;
