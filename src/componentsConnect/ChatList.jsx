import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';

const storiesData = [
  {
    id: 1,
    name: 'Ксения Миро',
    message: 'Привет! Росскажи о себе',
    time: '11:00',
    photo: require('../assets/svg/Logo1.png'),
  },
  {
    id: 2,
    name: 'Анна Вишневская',
    message: 'Тут будет длиное сообщение ...',
    time: '10:00',
    photo: require('../assets/svg/Logo2.png'),
  },
  {
    id: 3,
    name: 'Алина Шевченко',
    message: 'Печатает...',
    time: '9:00',
    photo: require('../assets/svg/Logo3.png'),
  },
  {
    id: 4,
    name: 'Ксения Миро',
    message: 'Пример сообщения',
    time: '7:30',
    photo: require('../assets/svg/Logo4.png'),
  },

  {
    id: 5,
    name: 'Алина Шевченко',
    message: 'Это да',
    time: '9:00',
    photo: require('../assets/svg/Logo5.png'),
  },
  {
    id: 6,
    name: 'Ксения Миро',
    message: 'Пример сообщения',
    time: '7:30',
    photo: require('../assets/svg/Logo6.png'),
  },

  {
    id: 7,
    name: 'Алина Шевченко',
    message: 'Это да',
    time: '9:00',
    photo: require('../assets/svg/Logo5.png'),
  },
];

const ChatList = () => {
  const navigation = useNavigation();
  const goToChat = () => {
    navigation.navigate('Chat');
  };
  return (
    <>
      <TextContainer>
        <StyledText>Сообщения</StyledText>
      </TextContainer>
      <ScrollView>
        <MessageWrapper>
          {storiesData.map((story, index) => (
            <TouchableOpacity onPress={goToChat} key={story.id}>
              <MessageContainer>
                <SingleMessage>
                  <Image source={story.photo} style={{ width: 64, height: 64 }} />
                  <MessageTextWrapper>
                    <TextUser>{story.name}</TextUser>
                    <TextMessage>{story.message}</TextMessage>
                  </MessageTextWrapper>
                </SingleMessage>
                <MessageRightInfo>
                  <TextTime>{story.time}</TextTime>
                  {index === 0 && (
                    <Image
                      source={require('../assets/svg/Frame.png')}
                      style={{ width: 20, height: 18, marginLeft: 15 }}
                    />
                  )}
                </MessageRightInfo>
              </MessageContainer>
            </TouchableOpacity>
          ))}
        </MessageWrapper>
      </ScrollView>
    </>
  );
};

const SingleMessage = styled(View)`
  flex-direction: row;
  margin-bottom: 15px;
`;

const MessageContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

const TextContainer = styled(View)`
  padding: 20px 30px 15px 30px;
`;

const TextTime = styled(Text)`
  font-size: 13px;
  font-weight: 400;
  line-height: 37px;
`;

const TextUser = styled(Text)`
  font-size: 17px;
  font-weight: 600;
  line-height: 23px;
  padding: 7px 0px 7px 0px;
`;

const TextMessage = styled(Text)`
  font-size: 13px;
  font-weight: 500;
  line-height: 17px;
`;

const MessageTextWrapper = styled(View)`
  flex-direction: column;
  padding-left: 20px;
`;

const MessageRightInfo = styled(View)`
  flex-direction: column;
  margin-top: 2px;
`;

const MessageWrapper = styled(View)`
  flex-direction: column;
  padding-left: 30px;
  padding-right: 20px;
`;

const StyledText = styled(Text)`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
`;

export default ChatList;
