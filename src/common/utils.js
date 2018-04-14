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
export function getStatu() {
  if (Platform.OS === 'ios') {
    return width === X_WIDTH && height === X_HEIGHT ? (
      <View style={{height: 28, backgroundColor: 'red'}} />
    ) : (
      <View style={{height: 10, backgroundColor: 'red'}} />
    );
  }
  return null;
}


export function getHeader(title1,title2) {
    let titleTemp = `RN培训系列课程-${title1}-${title2}`;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
        backgroundColor: 'red',
      }}
    >
      <Text
        style={{
          fontSize: 16,
          color: 'white',
        }}
      >
        {titleTemp}
      </Text>
    </View>
  );
}


//     /**
//    * 判断设备是否是IponeX
//    * 
//    * @returns 
//    * @memberof RNLeaningMain
//    */
//  function isIponeX(){
//     return Platform.OS === 'ios' && width === X_WIDTH && height === X_HEIGHT;
//   }