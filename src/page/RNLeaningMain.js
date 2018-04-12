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
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        {this.renderStatu()}
        <View style={styles.header}>
          <Text style={styles.title}>RN培训系列课程-滚动列表</Text>
        </View>
        <View
          style={{ height: 160}}
        >
          <ScrollView
            style={styles.scrollview}
            horizontal={true}
            pagingEnabled={true}
            contentContainerStyle={styles.contentContainer}
            endFillColor='#0087fc'
          >

            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
          </ScrollView>
        </View>
        <ScrollView
            style={styles.scrollview}
            pagingEnabled={true}
            contentContainerStyle={styles.contentContainer}
            endFillColor='#0087fc'
          >

            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
            <Image style={styles.image} source={require('../../res/rn_header_pic.png')} />
          </ScrollView>



      </View>
    );
  }

  renderStatu(){
    return (Platform.OS === 'ios' ? <View style={{height:10,backgroundColor:'red'}}/> : null);
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
