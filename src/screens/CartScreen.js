import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import Center from '../helpers/Center';
import faker from 'faker';
import { FlatList } from 'react-native';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

// UNFINISHED

const arr = [
  {
    name: 'Salad',
    price: 5,
  },
  {
    name: 'Pizza',
    price: 5,
  },
  {
    name: 'Ball',
    price: 5,
  },
  {
    name: 'Fish',
    price: 5,
  },
];

const CartScreen = () => {
  const [data, setData] = useState([]);
  //   useEffect(() => {
  //     setData(Array.from(Array(15), () => faker.image.image()));
  //   }, []);
  const { cart } = useSelector((state) => state.cart);
  return (
    <Center>
      <FlatList
        data={arr}
        renderItem={({ item }) => (
          <View style={styles.listContainer}>
            <View style={styles.imageContainer}>
              <Text>Gambar</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text>{item.name}</Text>
            </View>
          </View>
        )}
      />
    </Center>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    // flex: 1,
    height: 100,
    width: Dimensions.get('screen').width - 20,
    backgroundColor: 'teal',
    borderRadius: 10,
    marginVertical: 5,
    // justifyContent: 'center',
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1,
  },
  infoContainer: {
    flex: 3,
    justifyContent: 'center',
  },
});

export default CartScreen;
