/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props){
    super(props)
  }
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.title}>RN培训系列课程</Text>
      </View>
      <ScrollView 
      style={styles.scrollview}
      contentContainerStyle={styles.contentContainer}
      endFillColor='#0087fc'
      >

      <Image style={styles.image} source={require('./res/rn_bk_pic.png')}/>
      </ScrollView>
    

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    height:44,
    backgroundColor:'red',
  },
  title:{
    fontSize:16,
    color:'white',
  },
  scrollview:{
    flex:1,
  },
  image:{
    resizeMode:'contain',
    alignSelf:'flex-start',
  },
  contentContainer: {
    paddingVertical: 20
  },

});
