import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import styled from '@emotion/native';
import HeaderInfo from '../src/components/HeaderInfo';
import CustomInput from '../src/components/CustomInput';
import CustomButton from '../src/components/CustomButton';
import DatePickerCustom from '../src/components/DatePickerCustom';
import CustomSelect from '../src/components/CustomSelect';
import CustomRadioButton from '../src/components/CustomRadioButton';
import CustomCheckBox from '../src/components/CustomCheckBox';
import CustomMaps from '../src/components/CustomMaps';
import CustomChip from '../src/components/CustomChip';
import CustomTextArea from '../src/components/CustomTextArea';
import InfoWindows from '../src/components/InfoWindows';

const HideEyeIcon = require(`../assets/svg/HideEye.png`);
const ShowEyeIcon = require(`../assets/svg/ShowEye.png`);
const BigLike = require(`../assets/svg/BigLike.png`);

export const NewPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [chosenOption, setChosenOption] = useState(false);

  const handlePress = (option) => {
    setSelectedOption(option);
  };

  const handleCheckBoxPress = () => {
    setChosenOption((prev) => !prev);
  };

  const handleChipClose = () => {
    setSelectedOption(null);
  };

  return (
    <MainContainer>
      {/* <HeaderInfo />
      <TextContainer>
        <MainText>Введите пароль</MainText>
        <SubText>Пароль к аккаунту +380978906765</SubText>
      </TextContainer> */}

      {/* <DatePickerCustom /> */}
      {/* <CustomRadioButton
        textRadio={'На жизнь хватает'}
        isSelected={selectedOption === 'На жизнь хватает'}
        onPress={() => handlePress('На жизнь хватает')}
      />
      <CustomRadioButton
        textRadio={'Вариант 2'}
        isSelected={selectedOption === 'Вариант 2'}
        onPress={() => handlePress('Вариант 2')}
      />
      <CustomRadioButton
        textRadio={'Вариант 3'}
        isSelected={selectedOption === 'Вариант 3'}
        onPress={() => handlePress('Вариант 3')}
      />
      {selectedOption && <CustomChip selectedOption={selectedOption} onClose={handleChipClose} />} */}
      {/* <CustomCheckBox
        textCheck={'Вариант 3'}
        isChose={chosenOption}
        onPress={handleCheckBoxPress}
      /> */}
      {/* <CustomMaps /> */}

      <CustomTextArea />
      {/* <InfoWindows
        InfoMainText="Поздравляем!"
        InfoSubText="Вы успешно прошли регистрацию, сейчас ваш профиль находится на верификации, некоторые функции будут ограничены"
        InfoImage={BigLike}
      /> */}
      <CustomButton />
    </MainContainer>
  );
};

const PasswordWrapper = styled(View)`
  position: absolute;
  right: 20px;
  top: 23px;
`;

const TextContainer = styled(View)`
  padding: 40px 0px 20px 0px;
`;

const ForgotPassword = styled(Text)`
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  padding-bottom: 15px;
  text-decoration: underline;
`;

const MainText = styled(Text)`
  font-size: 27px;
  font-weight: 800;
  line-height: 36px;
  padding-bottom: 10px;
`;

const SubText = styled(Text)`
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  opacity: 0.8;
`;

const MainContainer = styled(View)`
  padding: 50px 25px 10px 25px;
  flex: 1;
  background-color: '#fff';
`;
