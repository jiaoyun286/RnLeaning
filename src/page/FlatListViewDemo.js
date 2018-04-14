import React, { 
    Component,
    PureComponent
} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    Dimensions
  } from 'react-native';
  import {
    getStatu,
    getHeader
  } from '../common/utils'
  import FlatItme from '../weigt/FlatItem'
  import flatData from '../data/courseData'
  export default class FlatListViewDemo extends Component{
      constructor(props){
          super(props);
          this.state = {
              dataList:[],
              refreshing:false,
              
          }
      }

      componentDidMount(){
         let dataSourse =  this.getTestList(true);
         this.setState({
             dataList:dataSourse,
         })
          
      }

      render(){
          return (
            <View style={{flex:1}}>
            {getStatu()}
            {getHeader('列表组件','FlatList')}
            {this.renderFlatList()}

            </View>
          );
      }

      renderFlatList(){
          return(
              <FlatList
              data={this.state.dataList}
              renderItem={this._renderItem}
              />
          );
      }

      _renderItem = (info) => {
          return (
              <FlatItme info={info.item}/>
          );
      }

       // 获取测试数据
    getTestList(isReload){
        let newList = flatData.map((data) => {
            return {
                uri: data.cover,
                title: data.title,
                des:data.description,
                price: data.price,
                noteCount:data.notecount,
            }
        })
        console.log('test data',newList)
        return isReload ? (Math.random() < 0.2 ? [] : newList) : [...this.state.dataList, ...newList]
    }

  }