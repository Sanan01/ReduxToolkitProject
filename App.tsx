import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {useSelector, useDispatch, Provider} from 'react-redux';
import {decrement, increment} from './src/store/counterSlice';
import {store} from './src/store/store';

function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Pressable
        aria-label="Increment value"
        onPress={() => dispatch(increment())}>
        <Text>Increment</Text>
      </Pressable>
      <Text>{count}</Text>
      <Pressable
        aria-label="Decrement value"
        onPress={() => dispatch(decrement())}>
        <Text>Decrement</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 5,
    // alignItems: 'center',
  },
});

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
