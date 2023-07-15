import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { TextInput, DefaultTheme } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const GOOGLE_PLACES_API_KEY = 'AIzaSyDZhPA8BtNLjyh4N18NzD-ZGDBuYaNvvvE';

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 51,
    fontSize: 14,
  },
  placeholder: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 19,
    opacity: 0.3,
    marginLeft: 10,
  },
});

const inputTheme = {
  ...DefaultTheme,
  roundness: 29,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2F2F2F',
  },
};

const MapAutocomplete = ({ onPlaceSelect }) => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Название"
      onPress={onPlaceSelect}
      query={{
        key: GOOGLE_PLACES_API_KEY,
        language: 'ru',
      }}
      fetchDetails={true}
      textInputProps={{
        InputComp: TextInput,
        mode: 'outlined',
        style: styles.input,
        theme: inputTheme,
      }}
      styles={{
        textInputContainer: {
          width: '100%',
          backgroundColor: 'white',
        },
        listView: {
          backgroundColor: '#fcfcfc',
          borderRadius: 20,
        },
        row: {
          backgroundColor: 'none',
        },
      }}
    />
  );
};

export default MapAutocomplete;
