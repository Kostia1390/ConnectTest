import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { TextInput, DefaultTheme } from 'react-native-paper';
import styled from '@emotion/native';

const CustomSelect = ({ options, onSelect, selectedValue, label }) => {
  const [selectedItem, setSelectedItem] = useState(
    selectedValue || (options.length > 0 && options[0].value),
  );
  const [showOptions, setShowOptions] = useState(false);

  const handleValueChange = (itemValue) => {
    setSelectedItem(itemValue);
    setShowOptions(false);
    if (onSelect) {
      onSelect(itemValue);
    }
  };

  const pickerTheme = {
    ...DefaultTheme,
    roundness: 29,
    colors: {
      ...DefaultTheme.colors,
      primary: '#2F2F2F',
    },
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowOptions(!showOptions)}>
        <TextInput
          label={label}
          value={selectedItem}
          editable={false}
          mode="outlined"
          style={styles.input}
          theme={pickerTheme}
        />
      </TouchableOpacity>

      {showOptions && (
        <View style={styles.optionsContainer}>
          {options.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={index < options.length - 1 ? styles.optionWithBorder : styles.option}
              onPress={() => handleValueChange(item.value)}>
              <TextSelect>{item.label}</TextSelect>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const TextSelect = styled(Text)`
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  padding: 10px 20px 0px 5px;
  color: #2c2c2c;
  padding: 16px 0px 16px 0px;
`;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    width: '100%',
    fontSize: 14,
  },
  optionsContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
  },
  optionWithBorder: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  option: {},
});

export default CustomSelect;
