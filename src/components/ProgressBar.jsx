import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';
import styled, { css } from '@emotion/native';
import { useNavigation } from '@react-navigation/native';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 1) {
          return 0;
        }
        const newProgress = oldProgress + 1 / 16;
        return newProgress > 1 ? 1 : newProgress;
      });
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <MainContainer>
      <ProgressText>Шаг 1/16</ProgressText>
      <View style={styles.container}>
        <Progress.Bar
          progress={progress}
          width={274}
          height={3}
          color={'#2F2F2F'}
          unfilledColor={'#E8E7ED'}
          borderColor={'#E8E7ED'}
        />
      </View>
    </MainContainer>
  );
};

const MainContainer = styled(View)`
  flex-direction: column;
  padding-left: 34px;
`;

const ProgressText = styled(Text)`
  font-size: 17px;
  font-weight: 600;
  line-height: 23px;
  padding-bottom: 9px;
`;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});

export default ProgressBar;
