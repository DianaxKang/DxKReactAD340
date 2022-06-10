import React from 'react';
import { StyleSheet, Text, View, Image,} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    backgroundColor: 'aliceblue',
  },
  user: {
    marginTop: 20,
    fontSize: 15,
    height: 40,
    padding: 10,
    fontWeight: "bold",
    textAlign: 'center',
  },
  image:{
    width:'100%',
    height:'50%',
    marginTop: 20,
  },
});

const PersonDetails = ({route, navigation}) => {
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

export default PersonDetails;