import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import styled from '@emotion/native';

const storiesData = [
  {
    id: 1,
    name: 'Инна К.',
    photo: require('../../assets/svg/photo1.png'),
  },
  {
    id: 2,
    name: 'Анаста...',
    photo: require('../../assets/svg/photo2.png'),
  },
  {
    id: 3,
    name: 'Инна К.',
    photo: require('../../assets/svg/photo3.png'),
  },
  {
    id: 4,
    name: 'Инна К.',
    photo: require('../../assets/svg/photo4.png'),
  },
  {
    id: 5,
    name: 'Инна К.',
    photo: require('../../assets/svg/photo5.png'),
  },
];

const StoryMenu = () => {
  return (
    <>
      <TextContainer>
        <StyledText>Запросы коннект</StyledText>
      </TextContainer>
      <StoryWrapper>
        {storiesData.map((story, index) => (
          <SingleStory key={story.id} style={index > 0 && { marginLeft: 2 }}>
            <Image source={story.photo} style={{ width: 50, height: 50 }} />
            <TextStory>{story.name}</TextStory>
          </SingleStory>
        ))}
      </StoryWrapper>
    </>
  );
};

const TextStory = styled(Text)`
  font-size: 13px;
  font-weight: 500;
  line-height: 17px;
  align-items: center;
`;

const StoryWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const StyledText = styled(Text)`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
`;

const SingleStory = styled(View)`
  margin-left: 10px;
  padding-left: 17px;
`;

const TextContainer = styled(View)`
  padding: 0px 30px 10px 25px;
`;

export default StoryMenu;
