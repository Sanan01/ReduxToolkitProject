import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';
import {addItem} from '../store/counterSlice';
import {store} from '../store/store';
import { addData } from '../store/dataSlice';

const images = [
  {
    id: 0,
    name: 'Shoes Shop',
    image: require('../assets/Rectangle144.png'),
    quantity: 0,
  },
  {
    id: 1,
    name: 'Home Decore Shop',
    image: require('../assets/Rectangle145.png'),
    quantity: 0,
  },
  {
    id: 2,
    name: 'Shoes Shop 2',
    image: require('../assets/Rectangle144.png'),
    quantity: 0,
  },
  {
    id: 3,
    name: 'Home Decore Shop 2',
    image: require('../assets/Rectangle145.png'),
    quantity: 0,
  },
  {
    id: 4,
    name: 'Shoes Shop 3',
    image: require('../assets/Rectangle144.png'),
    quantity: 0,
  },
  {
    id: 5,
    name: 'Home Decore Shop 4',
    image: require('../assets/Rectangle145.png'),
    quantity: 0,
  },
];

const DATA = [
  {
    title: 'Ramadan',
    data: images,
  },
  {
    title: 'EID',
    data: images,
  },
  {
    title: 'Bakra EID',
    data: images,
  },
];

const RenderStatusBar = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    images.map(item => {
      dispatch(addItem(item));
    });
  }, []);
  useEffect(() => {
    DATA.map(item => {
      dispatch(addData(item));
    });
  }, []);
  
  console.log('statusBarColor', props);
  const {statusBarColor} = props;

  return (
    <StatusBar backgroundColor={statusBarColor} barStyle={'dark-content'} />
  );
};

export default RenderStatusBar;
