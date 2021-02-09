import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import faker from 'faker';

const App = () => {
  // const [data, setData] = useState([
  //   {id: 1, nama: 'bambang'},
  //   {id: 2, nama: 'andi'},
  //   {id: 3, nama: 'joko'},
  // ]);
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={Array.from(Array(50), () => faker.commerce.product())}
        horizontal={true}
        renderItem={({item}) => (
          <View style={styles.productContainer}>
            <Text style={styles.productText}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: 'maroon',
  },
  nestedContainer1: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  nestedContainer2: {
    flex: 2,
    backgroundColor: 'orange',
  },
  productText: {
    fontSize: 25,
  },
  productContainer: {
    height: 125,
    width: 125,
    backgroundColor: 'red',
    margin: 10,
  },
});

export default App;
