import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import styled, { css } from '@emotion/native';
import { useNavigation } from '@react-navigation/native';

const HeaderBack = () => {
  const navigation = useNavigation();
  const goToHome = () => {
    navigation.navigate('Home');
  };
  return (
    <TouchableOpacity onPress={goToHome}>
      <Image source={require('../../assets/svg/Back.png')} style={{ width: 40, height: 40 }} />
    </TouchableOpacity>
  );
};

export default HeaderBack;
