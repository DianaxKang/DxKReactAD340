import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
   list: {
    marginTop: 20,
  },
   item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: "steelblue",
    textAlign: 'center',
  },
});

const PeopleList = ({navigation}) => {
  const [people, setPeople] = useState([]);
  const onSelectUser = user => {
    navigation.navigate('PersonDetails', {user});
  };

  useEffect(() => {
    fetch('https://fakerapi.it/api/v1/users?_quantity=20')
      .then(response => response.json())
      .then(json => {
        setPeople(json.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      <FlatList style={styles.list}
        data={people}
        renderItem={({item}) => (
          <Text style={styles.item} onPress={() => onSelectUser(item)}>
            {`${item.firstname} ${item.lastname}`}
          </Text>
        )}
      />
    </View>
  );
};

export default PeopleList;