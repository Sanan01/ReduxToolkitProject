import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  SectionList,
  Pressable,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import RenderStatusBar from './statusBar';
import {useSelector} from 'react-redux';

const RenderDashboardPage = ({navigation}) => {
  const MyProducts = useSelector(state => state.counter);
  console.log('Added Products: ', MyProducts);
  const MyData = useSelector(state => state.data);
  console.log('Added Products: ', MyData);

  const [Array, setArray] = useState(MyProducts);
  const [SectionListArray, setSectionListArray] = useState(MyData);

  const RenderHeader = () => {
    return (
      <>
        <RenderStatusBar statusBarColor={'#572B79'} />
        <View style={styles.header}>
          <Image source={require('../assets/magnifier.png')} />
          <Image source={require('../assets/logo.png')} />
          <Image source={require('../assets/cart.png')} />
        </View>
      </>
    );
  };

  const RenderItems = () => {
    const onUpdateQuantity = (timesPressed, item) => {
      let shallowCopy = [...Array];

      let newArray = shallowCopy.map(obj => {
        if (obj.id === item.id) {
          return {...obj, quantity: timesPressed};
        } else {
          return obj;
        }
      });
      setArray(newArray);
    };

    const RenderImage = ({item}) => {
      console.log('testing', item);
      return (
        <View style={styles.sectionListBox}>
          <Pressable
            onPress={() => {
              navigation.navigate('Cart', {
                item: item,
                onPressQuantityUpdate: onUpdateQuantity,
              });
            }}>
            <Image source={item.image} />
            <View
              style={{
                backgroundColor: '#572B79',
                borderRadius: 20,
                height: 40,
                width: 40,
                position: 'absolute',
                top: 120,
                right: -10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 20, color: 'white'}}>
                {item.quantity}
              </Text>
            </View>
            <Text style={{paddingTop: 10, fontSize: 15}}>{item.name}</Text>
          </Pressable>
        </View>
      );
    };

    // console.log('testing 1', images);
    return (
      <SafeAreaView style={styles.itemView}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.itemHeading}>Best Seller</Text>
          <Image style={styles.arrow} source={require('../assets/arrow.png')} />
        </View>

        <View style={styles.itemContainer}>
          <FlatList
            data={Array}
            renderItem={RenderImage}
            horizontal
            ItemSeparatorComponent={() => {
              return <View style={[{width: 15}]} />;
            }}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.name}
          />
        </View>

        <View style={{marginTop: 12}}>
          <SectionList
            sections={SectionListArray}
            renderItem={({section}) => (
              <FlatList
                numColumns={2}
                data={section.data}
                renderItem={RenderImage}
                keyExtractor={(item, index) => index}
              />
            )}
            renderSectionHeader={({section: {title}}) => (
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  backgroundColor: 'white',
                }}>
                {title}
              </Text>
            )}
            stickySectionHeadersEnabled
            showsVerticaltalScrollIndicator={false}
            keyExtractor={(item, index) => item + index}
          />
        </View>
      </SafeAreaView>
    );
  };

  return (
    <View style={styles.container}>
      {RenderHeader()}
      {RenderItems()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  header: {
    backgroundColor: '#572B79',
    height: 130,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  itemView: {
    marginTop: 10,
    backgroundColor: '#FAF8FC',
  },
  arrow: {
    marginLeft: 230,
    marginTop: 20,
  },
  itemHeading: {
    marginLeft: 20,
    marginTop: 15,
    fontFamily: 'Playfair Display',
    fontWeight: 'bold',
    fontSize: 20,
  },
  itemContainer: {
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10,
  },
  sectionListBox: {
    flex: 1,
    alignItems: 'center',
  },
});

export default RenderDashboardPage;
