import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import styled, { css } from '@emotion/native';

const InputMessage = () => {
  const [textInputValue, setTextInputValue] = useState('');
  return (
    <IntputWrapper>
      <TextInput
        style={styles.textInput}
        placeholder="Сообщение..."
        value={textInputValue}
        onChangeText={setTextInputValue}
      />
      <Image
        source={require('../../assets/svg/micro.png')}
        style={{ width: 30, height: 30, marginTop: 10 }}
      />
      <Image
        source={require('../../assets/svg/add.png')}
        style={{ width: 30, height: 30, marginTop: 10 }}
      />
    </IntputWrapper>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: 310,
    height: 30,
    backgroundColor: '#E8E7ED',
    marginTop: 10,
    marginLeft: 20,
    borderTopColor: '#E8E7ED',
    borderRadius: 18,
  },
});

const IntputWrapper = styled(View)`
  margin-top: 50px;
  height: 50px;
  background-color: #f0eded;
  flex-direction: row;
  position: absolute;
  bottom: 0px;
`;

export default InputMessage;
