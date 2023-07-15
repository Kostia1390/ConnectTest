import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import styled, { css } from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from './ProgressBar';

const HeaderInfo = () => {
  const navigation = useNavigation();
  const goToHome = () => {
    navigation.navigate('Home');
  };
  return (
    <MainContainer>
      <TouchableOpacity onPress={goToHome}>
        <Image source={require('../../assets/svg/Back.png')} style={{ width: 40, height: 40 }} />
      </TouchableOpacity>
      <ProgressBar />
    </MainContainer>
  );
};

const MainContainer = styled(View)`
  flex-direction: row;
`;

export default HeaderInfo;
