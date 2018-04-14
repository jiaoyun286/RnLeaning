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
    Dimensions,
    ToastAndroid,
  } from 'react-native';
  import {
    getStatu,
    getHeader
  } from '../common/utils'
  import FlatItme from '../weigt/FlatItem'
  import flatData from '../data/courseData'
  const {width,height} = Dimensions.get('window');//定义屏幕的尺寸常量
  export default class FlatListViewDemo extends Component{
      constructor(props){
          super(props);
          this.state = {
              dataList:[],
              refreshing:false,
              isLoadingMore:false,
              isNoMoreData:true,
              
          }
          this._onItemOnpress = this._onItemOnpress.bind(this);
          this.foot = '';
          this.header = 'This is a Header';
          this.page = 0;
      }

      componentDidMount(){
        this.loadData();
          
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
              keyExtractor={ this._keyExtractor }
              ListHeaderComponent={ this._renderHeader }
              ListFooterComponent={ this._renderFooter }
              onEndReachedThreshold={0.8}
              onEndReached={ this._onEndReached }
              refreshing={ this.state.refreshing }
              onRefresh={ this._renderRefresh }
              ListEmptyComponent={ this._renderEmptyContent }
              ItemSeparatorComponent={this._renderItemSeparatorComponent}
              getItemLayout={(data,index) => ({length:120,offset:(120+0.5) * index,index})}
             
              />
          );
      }

      _renderEmptyContent(){
          return (
              <View style={{height:height,justifyContent:'center',alignItems:'center',backgroundColor:'grey'}}>
              <Text style={{alignSelf:'center'}}>暂无数据</Text>
              </View>
          );

      }

      _renderItem = (info) => {
        console.log('FlatListViewDemo--info',info);
          return (
              <FlatItme
               info={info.item} 
               index={info.index}
               onPress={this._onItemOnpress}
               />
          );
      }

      _onItemOnpress(itemData){
        ToastAndroid.show(itemData,ToastAndroid.SHORT);

      }

       // Header布局
    _renderHeader = () => {
        return this.state.refreshing ? null : <View style={{flex:1,height:40,justifyContent:'center',alignItems:'center'}}><Text>{this.header}</Text></View>;
    };

    // Footer布局
    _renderFooter = () => {
        if(this.state.isNoMoreData){
            this.foot = '我还是有底线的^_^';

        } else if(this.state.isLoadingMore){
            this.foot = '正在拼命加载数据...';
        } else {
            this.foot = '';
        }
        return  this.foot === '' || this.state.refreshing ? null : <View style={{flex:1,height:40,justifyContent:'center',alignItems:'center'}}><Text>{this.foot}</Text></View>;
    };

    // 自定义分割线
    _renderItemSeparatorComponent = ({highlighted}) => (
        <View style={{ height:0.5, backgroundColor:'#787878',marginLeft:10 }}></View>
    );
     /**
     * 此函数用于为给定的item生成一个不重复的Key。
     * Key的作用是使React能够区分同类元素的不同个体，以便在刷新时能够确定其变化的位置，减少重新渲染的开销。
     * 若不指定此函数，则默认抽取item.key作为key值。
     * 若item.key也不存在，则使用数组下标
     *
     * @param item
     * @param index
     * @private
     */
     // 这里指定使用数组下标作为唯一索引
     _keyExtractor = (item, index) => index;
      // 上拉加载更多
    _onEndReached = () => {
        this.loadMore();
    };

      // 下拉刷新
      _renderRefresh = () => {
        this.setState({refreshing: true}) // 开始刷新
        // 这里模拟请求网络，拿到数据，3s后停止刷新
        setTimeout(() => {
            // TODO 提示没有可刷新的内容！
            this.setState({refreshing: false});
        }, 3000);
    };

    loadData(){
        this.setState({refreshing: true})
         // 模拟网络请求
         setTimeout(() => {
            // 模拟网络加载失败的情况
            // if (Math.random() < 0.2) {
            //     this.setState({refreshing: true})
            //     return
            // }

            //获取测试数据
            let dataList = this.getTestList(true)

            this.setState({
                dataList: dataList,
                refreshing: false,
            })
        }, 2000)
    }

    loadMore(){
        if(this.page > 4) {
            this.setState({isNoMoreData:true,isLoadingMore:false})
            return;
        }
        this.setState({isLoadingMore:true,isNoMoreData:false})
           // 模拟网络请求
           setTimeout(() => {
            // 模拟网络加载失败的情况
            // if (Math.random() < 0.2) {
            //     this.setState({refreshing: true})
            //     return
            // }

            //获取测试数据
            let dataList = this.getTestList(false)
            this.page++;

            this.setState({
                dataList: dataList,
                isLoadingMore: false,
            })
        }, 2000)
    }

       // 获取测试数据
    getTestList(isReload){
        if(isReload){
            this.page = 0;
        }
        let newList = flatData.map((data) => {
            return {
                uri: data.cover,
                title: data.title+this.page,
                des:data.description,
                price: data.price,
                noteCount:data.notecount,
            }
        })

        
        console.log('test data',newList)
        return isReload ? newList : [...this.state.dataList, ...newList]
    }

  }