import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';

const RenderProfilePage = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../assets/man.png')} />
      <Text style={styles.txt}>Email: sanan.baig@koderlabs.com</Text>
      <Text style={styles.txt}>Role: ASE</Text>
      <Text style={styles.txt}>Company: KoderLabs</Text>
    </View>
  );
};

styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 400,
    height: 400,
  },
  txt: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
});

export default RenderProfilePage;
