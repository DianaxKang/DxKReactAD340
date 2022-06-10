import React from 'react';
import {StyleSheet, SectionList, Text, StatusBar, View, Button} from 'react-native';

const styles = StyleSheet.create({
   container: {
   flex: 1,
        paddingTop: 20,
        padding: 28,
        backgroundColor: "aliceblue",
        alignItems: 'center',
        paddingTop: StatusBar.currentHeight,
   },
   title: {
        marginTop:20,
        fontSize: 30,
        fontWeight: "bold",
   },
   paragraph:{
        fontSize: 20,
        marginTop:20,
    },
   sectionHeader: {
        marginTop:10,
        padding: 10,
        fontSize: 20,
        height: 44,
        alignSelf: "flex-start",
        fontWeight: "bold",
      },
   item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        color: "steelblue",
      },
   buttonhole: {
        alignItems: 'center',
        marginTop: 50,
        width: '100%',
      },
});

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}> DxKReactAD340 </Text>
    <Text style={styles.paragraph}>This application displays a title, a paragraph and a section list.
     The heading refers to the application name and is bold, centered, with a font of 30.
     This paragraph displays a list of Romanian, Korean foods, and American foods.
     </Text>
    <SectionList style={styles.item, styles.sectionHeader}
              sections={[
                {title: 'Romanian Foods', data: ['Ciorbă de perișoare', 'Sărmăluțe', 'Mămăligă', 'Papanași']},
                {title: 'Korean Foods', data: ['파전', '잡채', '라면', '김치찌개']},
                {title: 'American Foods', data: ['Corn dog', 'Jambalaya', 'Philly Cheesesteak', 'Barbecue']}
              ]}
              renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
              renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
              keyExtractor={(item, index) => index}
            />
      <View style={styles.buttonhole}>
        <Button
          title="View People"
          onPress={() => navigation.navigate('Navigator')}
        />
      </View>
    </View>
  );
};

export default Home;