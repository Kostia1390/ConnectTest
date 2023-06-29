import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styled, { css } from '@emotion/native';

const Message = ({ id, userId, type, message, time }) => {
  const isMissedCall = type === 'missed_call';
  const isText = type === 'text';
  return (
    <MessageContainer key={id} userId={userId} isMissedCall={type === 'missed_call'}>
      {isText && <TextUser userId={userId}>{message}</TextUser>}
      {isMissedCall && (
        <>
          <Image
            source={require('../../assets/svg/CameraOn.png')}
            style={{ width: 39, height: 39 }}
          />
          <TextUserCall userId={userId}>Пропущений</TextUserCall>
        </>
      )}
      <TextTime userId={userId}>{time}</TextTime>
    </MessageContainer>
  );
};

const MessageContainer = styled(View)`
  align-self: flex-start;
  margin-top: 10px;
  margin-left: ${(props) => (props.userId === 1 ? '10px' : 'auto')};
  margin-right: ${(props) => (props.userId === 2 ? '10px' : 'auto')};
  padding: 11px;
  border-radius: 20px;
  background-color: ${(props) => (props.userId === 1 ? '#e8e7ed' : '#2f2f2f')};
  ${(props) =>
    props.isMissedCall &&
    css`
      flex-direction: row;
    `}
`;

const TextUserCall = styled(Text)`
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  padding: 10px 20px 0px 5px;
  color: ${(props) => (props.userId === 1 ? '#000000' : '#ffffff')};
`;

const TextUser = styled(Text)`
  font-size: 16px;
  font-weight: 300;
  line-height: 22px;
  padding: 0px 20px 0px 5px;
  color: ${(props) => (props.userId === 1 ? '#000000' : '#ffffff')};
`;

const TextTime = styled(Text)`
  font-size: 10px;
  font-weight: 400;
  line-height: 15px;
  position: absolute;
  bottom: 5px;
  right: 5px;
  color: ${(props) => (props.userId === 1 ? '#000000' : '#ffffff')};
`;

export default Message;
