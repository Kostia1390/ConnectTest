import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styled from '@emotion/native';

const ConnectText = require(`../../assets/svg/ConnectText.png`);

const InfoWindows = ({ InfoMainText, InfoSubText, InfoImage }) => {
  return (
    <MainContainer>
      <Image source={ConnectText} style={{ width: 142, height: 26, marginTop: 20 }} />
      <Image source={InfoImage} style={{ width: 145, height: 154, marginTop: 73 }} />
      <MainText>{InfoMainText}</MainText>

      <SubText>{InfoSubText}</SubText>
    </MainContainer>
  );
};

const SubText = styled(Text)`
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  margin-top: 10px;
`;

const MainText = styled(Text)`
  font-size: 29px;
  font-weight: 800;
  line-height: 40px;
  margin-top: 113px;
`;

const MainContainer = styled(View)`
  align-items: center;
`;

export default InfoWindows;
