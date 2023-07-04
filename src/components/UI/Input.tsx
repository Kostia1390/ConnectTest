import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, KeyboardTypeOptions, Animated, TextInput } from 'react-native';
import { typography } from 'utils/typography';
import { Colors, Fonts } from 'utils/styles';

interface IProps {
  type: 'text' | 'password',
  mask?: string;
  errorText?: string | null;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  defaultValue?: string;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  maxLength?: number;
  autoFocus?: boolean;
  valid?: boolean;
  onChangeText: (value: string) => void;
  onBlur?: (e: any) => void;
  onForgotPassword?: () => void;
}

export const Input = ({
  type,
  errorText,
  placeholder,
  defaultValue,
  keyboardType,
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  maxLength,
  autoFocus,
  valid,
  onBlur,
  onChangeText,
}: IProps) => {

  const [isActive, setIsActive] = useState(false);
  const focusAnimated = useRef(new Animated.Value(0)).current;

  const marginStyles = { marginTop, marginBottom, marginLeft, marginRight };

  useEffect(() => {
    Animated.timing(focusAnimated, {
      toValue: isActive || defaultValue || errorText ? 1 : 0,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [focusAnimated, defaultValue, isActive, errorText]);

  const onFocusHandler = () => {
    //setIsActive(false);
  };

  const onBlurHandler = (e: any) => {
    //setIsActive(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <View style={[styles.inputWrapper, marginStyles]}>
      <Animated.View
        style={[
          {
            top: focusAnimated.interpolate({
              inputRange: [0, 1],
              outputRange: [8, -16],
            }),
          },
          styles.labelContainer,
        ]}
      >
        <Animated.Text
          style={[
            {
              fontSize: focusAnimated.interpolate({
                inputRange: [0, 1],
                outputRange: [16, 14],
              }),
              color: valid && defaultValue ? Colors.DarkGray : errorText ? Colors.Red : Colors.Gray,
            },
            styles.label,
          ]}
        >
          {isActive && errorText ? errorText : placeholder}
        </Animated.Text>
      </Animated.View>
      {type === 'text' && (
        <TextInput
          onChangeText={e => {
            onChangeText(e);
            if (!isActive) setIsActive(true);
          }}
          defaultValue={defaultValue}
          placeholder={errorText ? placeholder : ''}
          keyboardType={keyboardType}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          autoFocus={autoFocus}
          style={[
            styles.input,
            marginStyles,
            {
              borderColor: errorText ? Colors.Red : Colors.Gray,
            },
          ]}
          placeholderTextColor={Colors.Gray}
          maxLength={maxLength}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    position: 'relative',
  },
  input: {
    paddingBottom: 5,
    //alignContent: 'center',
    //textAlignVertical: 'center',
    borderWidth: 1,
    borderRadius: 40,
    paddingHorizontal: 20,
    height: 50,
    color: Colors.DarkGray,
    ...typography.description,
  },
  eyeBtn: {
    position: 'absolute',
    right: 0,
  },
  passwordContainer: {
    justifyContent: 'center',
  },
  forgotPassword: {
    color: Colors.Text,
    marginTop: 5,
  },
  labelContainer: {
    position: 'absolute',
    left: 0,
    flexDirection: 'row',
    marginBottom: 41,
  },
  label: {
    fontFamily: Fonts.medium,
    lineHeight: 32,
    letterSpacing: 0.2,
    paddingHorizontal: 20,
  },
});
