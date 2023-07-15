import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import styled from '@emotion/native';
import HeaderInfo from '../src/components/HeaderInfo';
import CustomInput from '../src/components/CustomInput';
import CustomButton from '../src/components/CustomButton';
import DatePickerCustom from '../src/components/DatePickerCustom';
import CustomSelect from '../src/components/CustomSelect';
import { useNavigation } from '@react-navigation/native';

const HideEyeIcon = require(`../assets/svg/HideEye.png`);
const ShowEyeIcon = require(`../assets/svg/ShowEye.png`);

export const EnterPassword = () => {
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const isError = submitted && password.length < 8;

  const handleChangePassword = (newPassword) => {
    setPassword(newPassword);
    setSubmitted(false);
  };

  const navigation = useNavigation();
  const goToNewPage = () => {
    navigation.navigate('NewPage');
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const genderOptions = [
    { label: 'Мужской', value: 'Мужской' },
    { label: 'Женский', value: 'Женский' },
    { label: 'Другое', value: 'Другое' },
  ];

  const toggleIsHidden = () => setIsHidden((current) => (current ? false : true));
  const toggleIcon = isHidden ? HideEyeIcon : ShowEyeIcon;

  return (
    <MainContainer>
      <HeaderInfo />
      <TextContainer>
        <MainText>Введите пароль</MainText>
        <SubText>Пароль к аккаунту +380978906765</SubText>
      </TextContainer>
      <CustomInput
        onChangePassword={handleChangePassword}
        error={isError}
        label="Пароль"
        placeholder="Введите пароль"
        errorMessage="Неверный пароль"
        isHidden={isHidden}
        rightIcon={() => (
          <TouchableWithoutFeedback onPress={toggleIsHidden}>
            <PasswordWrapper>
              <Image source={toggleIcon} style={{ width: 20, height: 20 }} />
            </PasswordWrapper>
          </TouchableWithoutFeedback>
        )} // rightIcon
      />
      <TouchableOpacity>
        <ForgotPassword>Забыли пароль?</ForgotPassword>
      </TouchableOpacity>
      <CustomSelect
        options={genderOptions}
        onSelect={(value) => console.log(value)}
        selectedValue="Не выбрано"
        label="Ваш пол"
      />
      <CustomSelect
        options={genderOptions}
        onSelect={(value) => console.log(value)}
        selectedValue="Не выбрано"
        label="Ваш пол"
      />
      {/* <DatePickerCustom /> */}
      <TouchableOpacity onPress={goToNewPage}>
        <CustomButton
          disabled={password === ''}
          onSubmit={password !== '' ? goToNewPage : handleSubmit}
        />
      </TouchableOpacity>
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
