import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 50,
  },
  user: {
    fontSize: 15,
    height: 40,
    padding: 10,
    textAlign: 'left',
  },
  image: {
    width: '100%',
    height: '50%',
  },
});

const Details = ({route, navigation}) => {
  const {user} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.user}>Full Name: {`${user.firstname} ${user.lastname}`} </Text>
      <Text style={styles.user}>Username: {user.username} </Text>
      <Text style={styles.user}>Email: {user.email} </Text>
      <Text style={styles.user}>Website: {user.website} </Text>
      <Image style={styles.image} source={{uri: `${user.image}${Math.random()}`,}}/>
    </View>
  );
};

export default Details;