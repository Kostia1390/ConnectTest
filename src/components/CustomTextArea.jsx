import React, { useState } from 'react';
import { TextInput, Text, DefaultTheme } from 'react-native-paper';
import styled from '@emotion/native';

const CustomTextArea = () => {
  const [text, setText] = useState('');
  const [isTextAreaFocused, setTextAreaFocused] = useState(false);

  const handleTextChange = (inputText) => {
    setText(inputText);
  };

  const handleTextAreaFocus = () => {
    setTextAreaFocused(true);
  };

  const handleTextAreaBlur = () => {
    setTextAreaFocused(false);
  };

  const opacityStyle = { opacity: isTextAreaFocused ? 1 : 0.3 };

  const inputTheme = {
    ...DefaultTheme,
    roundness: 29,
    colors: {
      ...DefaultTheme.colors,
      primary: '#2F2F2F',
    },
  };

  return (
    <>
      <StyledTextArea
        mode="outlined"
        multiline
        numberOfLines={4}
        maxLength={250}
        placeholder="Введите текст"
        onChangeText={handleTextChange}
        value={text}
        theme={inputTheme}
        onFocus={handleTextAreaFocus}
        onBlur={handleTextAreaBlur}
        style={opacityStyle}
      />
      <CharacterCount style={opacityStyle}>{`${text.length}/250`}</CharacterCount>
    </>
  );
};

const StyledTextArea = styled(TextInput)`
  width: 338px;
  height: 211px;
`;

const CharacterCount = styled(Text)`
  text-align: right;
`;

export default CustomTextArea;
