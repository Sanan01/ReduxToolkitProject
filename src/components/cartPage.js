import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';

const RenderCartPage = ({navigation, route}) => {
  const [timesPressed, setTimesPressed] = useState(0);
  const {item, onPressQuantityUpdate} = route.params;
  let textLog = '0';
  textLog = timesPressed;
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <ScrollView>
          <>
            <Image source={item.image} style={styles.img} />
            <Text style={styles.name}>{item.name}</Text>
          </>
        </ScrollView>
      </View>
      <View style={styles.bContainer}>
        <Pressable
          style={({pressed}) => [
            {
              backgroundColor: pressed ? '#572B79' : 'white',
            },
            styles.button,
          ]}
          onPress={() => {
            onPressQuantityUpdate?.(timesPressed, item);
            navigation.pop();
          }}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setTimesPressed(current => current + 1);
          }}>
          <Image
            style={styles.sButton}
            source={require('../assets/add.png')}
          />
        </Pressable>
        <Text style={styles.itemNumber}>{textLog}</Text>
        <Pressable
          onPress={() => {
            if (timesPressed > 0) {
              setTimesPressed(current => current - 1);
            }
          }}>
          <Image
            style={styles.sButton}
            source={require('../assets/subtract.png')}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    height: 400,
    width: 400,
  },
  name: {
    marginTop: 20,
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#572B79',
    height: 50,
    width: 200,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 18,
    color: '#FAF8FC',
  },
  sButton: {
    height: 40,
    width: 40,
  },
  bContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 12,
  },
  itemNumber: {
    fontSize: 40,
    color: 'black',
  },
});

export default RenderCartPage;
