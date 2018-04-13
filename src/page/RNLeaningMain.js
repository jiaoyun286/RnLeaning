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
  Image,
  Dimensions
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const courseDsc = '课程以实战为根本目标，通过边做边学、逐步深入的方式推进（某些课程需要学员带上电脑效果更佳）。课程总共分三个阶段，通过前两个阶段较为全面地掌握RN开发能力，再通过第三个阶段平滑地过渡到应用工厂RN开发上，从而让学员更好的接受并理解内容，所有课程结束后具备独立开发RN组件的能力。';
const courseTarget = '1、帮助移动端同学掌握RN相关技术\n2、提升开发效率和质量\n3、适应行业技术发展趋势';
const stage1 = '一阶段：\n1、ReactNative简介\n2、布局详解\n3、常用控件介绍\n4、列表实现方案对比\n5、网络请求的多种方案';
const stage2 = '二阶段：\n1、React设计思想\n2、原生模块与控件开发\n3、进阶SDK介绍\n4、页面导航\n5、公共控件的设计与实现\n6、RN优化实践';
const stage3 = '三阶段：\n1、Redux与Mobx\n2、编码规范及常用工具介绍\n3、应用工厂的RN开发规范\n4、颗粒开发';
const notesForReg = '1、学员对RN学习有一定的意愿\n2、学员在课前通过学习平台自学掌握JS基础\n3、预先支付100元参训基金（用于教学过程中奖优罚劣）';
const {width,height} = Dimensions.get('window');

export default class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return <View style={styles.container}>
        {this.renderStatu()}
        <View style={styles.header}>
          <Text style={styles.title}>RN培训系列课程-滚动列表</Text>
        </View>
        <ScrollView style={styles.scrollview} pagingEnabled={true} contentContainerStyle={styles.contentContainer} endFillColor="#0087fc">
          <View style={{height: 120}}>
            <ScrollView style={styles.scrollview} horizontal={true} pagingEnabled={true}>
              <Image style={styles.image} source={require('../../res/rn_header_pic.png')} resizeMode={Image.resizeMode.contain} />
              <Image style={styles.image} source={require('../../res/rn_header_pic.png')} resizeMode={Image.resizeMode.contain} />
              <Image style={styles.image} source={require('../../res/rn_header_pic.png')} resizeMode={Image.resizeMode.contain} />
              <Image style={styles.image} source={require('../../res/rn_header_pic.png')} resizeMode={Image.resizeMode.contain} />
            </ScrollView>
          </View>
          <View style={{padding: 8}}>
            <Text style={{color: '#000000', fontWeight: 'bold'}}>
              培训简介：
            </Text>
            <Text style={{color: '#000000', marginVertical: 8}}>
              [课程介绍]
            </Text>
            <Text style={{color: '#000000', lineHeight: 24, marginLeft: 8}} margin={15}>
              {courseDsc}
            </Text>
            <Text style={{color: '#000000', marginVertical: 8}}>
              [课程目标]
            </Text>
            <Text style={{color: '#000000', lineHeight: 24, marginLeft: 8, marginVertical: 4}} margin={15}>
              {courseTarget}
            </Text>
            <Text style={{color: '#000000', marginVertical: 8}}>
              [课程大纲]
            </Text>
            <Text style={{color: '#000000', lineHeight: 24, marginLeft: 8, marginVertical: 4}} margin={15}>
              {stage1}
            </Text>
            <Text style={{color: '#000000', lineHeight: 24, marginLeft: 8, marginVertical: 4}} margin={15}>
              {stage2}
            </Text>
            <Text style={{color: '#000000', lineHeight: 24, marginLeft: 8, marginVertical: 4}} margin={15}>
              {stage3}
            </Text>
            <Text style={{color: 'red', marginVertical: 8}}>
              报名注意事项:
            </Text>
            <Text style={{color: '#000000', lineHeight: 24, marginLeft: 8, marginVertical: 4}} margin={15}>
              {notesForReg}
            </Text>
          </View>
        </ScrollView>
      </View>;
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
    width:width,
  },
  contentContainer: {
    paddingVertical: 1
  },

});
