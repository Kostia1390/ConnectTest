import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import styled, { css } from '@emotion/native';
import HeaderMessage from '../src/components/HeaderMessage';

const storiesData = [
  {
    id: 1,
    message: 'Привет',
    time: '9:30',
  },
  {
    id: 2,
    message: 'Как дела? Чем занимаешься?',
    time: '9:32',
  },
  {
    id: 3,
    message: 'Пример длинного текста, который переносится на следующую строку',
    time: '9:34',
  },

  {
    id: 4,
    message:
      'Пример длинного текста, который переносится на следующую строку переносится на следующую строку',
    time: '9:34',
  },
];

export const Chat = ({ navigation }) => {
  const [textInputValue, setTextInputValue] = useState('');
  return (
    <MainContainer>
      <HeaderMessage />
      <MessageWrapper>
        {storiesData.slice(0, 3).map((story) => (
          <MessageOponent key={story.id}>
            <TextUser>{story.message}</TextUser>
            <TextTime>{story.time}</TextTime>
          </MessageOponent>
        ))}
      </MessageWrapper>
      <MessageUser>
        <TextUser user>Пример длинного текста, который переносится на следующую строку</TextUser>
        <TextTime user>9:34</TextTime>
      </MessageUser>

      <MessageOponent>
        <TextUser>{storiesData[3].message}</TextUser>
        <TextTime>{storiesData[3].time}</TextTime>
      </MessageOponent>

      <CallOponent>
        <Image source={require('../assets/svg/CameraOn.png')} style={{ width: 39, height: 39 }} />
        <TextUserCall>Пропущений</TextUserCall>
        <TextTimeCall>9:34</TextTimeCall>
      </CallOponent>

      <CallOponent>
        <Image source={require('../assets/svg/CameraOn.png')} style={{ width: 39, height: 39 }} />
        <TextUserCall>Пропущений</TextUserCall>
        <TextTimeCall>9:34</TextTimeCall>
      </CallOponent>

      <CallUser>
        <Image source={require('../assets/svg/CameraOn.png')} style={{ width: 39, height: 39 }} />
        <TextUserCall user>Пропущений</TextUserCall>
        <TextTimeCall user>9:34</TextTimeCall>
      </CallUser>
      <CallUser>
        <Image source={require('../assets/svg/CameraOn.png')} style={{ width: 39, height: 39 }} />
        <TextUserCall user>Пропущений</TextUserCall>
        <TextTimeCall user>9:34</TextTimeCall>
      </CallUser>
      <IntputWrapper>
        <TextInput
          style={styles.textInput}
          placeholder="Сообщение..."
          value={textInputValue}
          onChangeText={setTextInputValue}
        />
        <Image
          source={require('../assets/svg/micro.png')}
          style={{ width: 30, height: 30, marginTop: 10 }}
        />
        <Image
          source={require('../assets/svg/add.png')}
          style={{ width: 30, height: 30, marginTop: 10 }}
        />
      </IntputWrapper>
    </MainContainer>
  );
};
const IntputWrapper = styled(View)`
  margin-top: 50px;
  height: 50px;
  background-color: #f0eded;
  flex-direction: row;
  position: absolute;
  bottom: 0px;
`;

const styles = StyleSheet.create({
  textInput: {
    width: 300,
    height: 30,
    backgroundColor: '#E8E7ED',
    marginTop: 10,
    marginLeft: 20,
    borderTopColor: '#E8E7ED',
    borderRadius: 18,
  },
});

const MessageWrapper = styled(View)``;

const CallOponent = styled(View)`
  align-self: flex-start;
  margin-top: 10px;
  margin-left: 10px;
  padding: 10px;
  border-radius: 20px;
  background-color: #e8e7ed;
  flex-direction: row;
`;

const CallUser = styled(View)`
  align-self: flex-start;
  margin-top: 10px;
  margin-left: 225px;
  padding: 10px;
  border-radius: 20px;
  background-color: #2f2f2f;
  flex-direction: row;
`;

const MessageOponent = styled(View)`
  align-self: flex-start;
  margin-top: 10px;
  margin-left: 10px;
  padding: 10px;
  border-radius: 20px;
  background-color: #e8e7ed;
`;

const MessageUser = styled(View)`
  align-self: flex-start;
  margin-top: 10px;
  margin-left: 75px;
  padding: 10px;
  border-radius: 20px;
  background-color: #2f2f2f;
`;

const TextUserCall = styled(Text)`
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  padding: 10px 20px 0px 5px;
  ${(props) =>
    props.user &&
    css`
      color: #fff;
    `}
`;

const TextTimeCall = styled(Text)`
  font-size: 10px;
  font-weight: 400;
  line-height: 15px;
  position: absolute;
  bottom: 5px;
  right: 5px;
  ${(props) =>
    props.user &&
    css`
      color: #fff;
    `}
`;

const TextUser = styled(Text)`
  font-size: 16px;
  font-weight: 300;
  line-height: 22px;
  padding: 0px 20px 0px 5px;
  ${(props) =>
    props.user &&
    css`
      color: #fff;
    `}
`;

const TextTime = styled(Text)`
  font-size: 10px;
  font-weight: 400;
  line-height: 15px;
  position: absolute;
  bottom: 5px;
  right: 5px;
  ${(props) =>
    props.user &&
    css`
      color: #fff;
    `}
`;

const MainContainer = styled(View)`
  height: 100%;
  flex: 1;
  background-color: '#fff';
`;
