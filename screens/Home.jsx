import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Kostia Vashchenko app!!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
        <Image source={require('../assets/svg/photo.png')} style={{ width: 200, height: 200 }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
