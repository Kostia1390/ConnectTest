import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import styled, { css } from '@emotion/native';

const Header = () => {
  return (
    <MainContainer>
      <Image source={require('../assets/svg/LogoAuthor.png')} style={{ width: 40, height: 40 }} />
      <Image source={require('../assets/svg/ConnectText.png')} style={{ width: 122, height: 22 }} />
      <Image source={require('../assets/svg/Notifacation.png')} style={{ width: 40, height: 40 }} />
    </MainContainer>
  );
};

const MainContainer = styled(View)`
  padding: 50px 30px 10px 30px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export default Header;
