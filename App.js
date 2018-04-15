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
  Button,
  ScrollView,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {
  getStatu,
  getHeader
} from './src/common/utils'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props){
    super(props)
    this.onScrollViewPress = this.onScrollViewPress.bind(this);
    this.onFlatListPress = this.onFlatListPress.bind(this);
    this.onSectionListPress = this.onSectionListPress.bind(this);
  }
  static navigationOptions = {
       title: "RN培训系列课程",
       headerStyle:{
         backgroundColor:'#0087fc',
         padding:10,
       },
       headerTitleStyle:{
         justifyContent:'center',
         alignItems:'center',
       },
       headerTintColor:'#fff',
  };
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollview}
          contentContainerStyle={styles.contentContainer}
        >

          <TouchableOpacity onPress={this.onScrollViewPress}>
          <Text style={{ height: 48, color: 'red', fontSize:18 }}>ScrollView</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onFlatListPress}>
          <Text style={{ height: 48, color: 'red', fontSize:18 }}>FlatList</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onSectionListPress}>
          <Text style={{ height: 48, color: 'red', fontSize:18 }}>SectionList</Text>
          </TouchableOpacity>
          
        </ScrollView>
      </View>
    );
  }
  onScrollViewPress(){
    // ToastAndroid.show('ScrollView',ToastAndroid.SHORT);
    this.props.navigation.navigate(
      'scrollview',
      {

      }
    );
  }
  onFlatListPress(){
    this.props.navigation.navigate(
      'flatview',
      {

      }
    );
  }
  onSectionListPress(){
    this.props.navigation.navigate(
      'sectionList',
      {

      }
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
    flex:1,
    paddingVertical: 10,
    justifyContent:'center',
    alignItems:'center',
  },

});
