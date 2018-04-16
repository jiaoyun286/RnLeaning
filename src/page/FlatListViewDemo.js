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
    RefreshControl,
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
          this._renderRefresh = this._renderRefresh.bind(this);
          this.foot = '';
          this.header = 'This is a Header';
          this.page = 0;
      }
      static navigationOptions = {
        title: "FlatList",
        headerStyle:{
          backgroundColor:'#0087fc',
        },
        headerTitleStyle:{
          justifyContent:'center',
          alignItems:'center',
        },
        headerTintColor:'#fff',
    };

      componentDidMount(){
        this.loadData();
          
      }

      render(){
          return (
            <View style={{flex:1}}>
            {this.renderFlatList()}

            </View>
          );
      }

      renderFlatList(){
          return(
              <FlatList
              data={this.state.dataList}//数据源
              renderItem={this._renderItem}//渲染列表项回调
              keyExtractor={ this._keyExtractor } //
              ListHeaderComponent={ this._renderHeader } //渲染Header回调
              ListFooterComponent={ this._renderFooter } //渲染Footer回调
              onEndReachedThreshold={0.8} //OnEndReached回调函数触发策略
              onEndReached={ this._onEndReached } //将要滚动到列表底部触发的回调，用于上拉加载更多
              refreshControl={
                  <RefreshControl
                  refreshing={this.state.refreshing}//loading状态，true显示loading，false隐藏loading
                  onRefresh={this._renderRefresh}//下拉刷新回调
                  title="Loading..." //loading文本提示，IOS有效
                  colors={['#0087fc', '#00ff00', '#0000ff']} //loading颜色 Android有效
                  />
              }//定义loading
              ListEmptyComponent={ this._renderEmptyContent } //列表数据为空时渲染的视图组件
              ItemSeparatorComponent={this._renderItemSeparatorComponent} //自定义类别分割线组件
              initialNumToRender={8}
              removeClippedSubviews={true} 
              windowSize={15}
              getItemLayout={this.getLayoutItem}     
              />
          );
      }
      /**
       * 优化渲染效率
       * 如果不做该项优化，每个列表项需要事先渲染一次，动态获取其渲染尺寸，然后再真正的渲染到页面中
       * getItemLayout={this.getLayoutItem}
       * 
       * @param {any} data 
       * @param {any} index 
       * @returns 
       * @memberof FlatListViewDemo
       */
      getLayoutItem(data, index) {
        return ({ length: 120, offset: 121 * index + 40, index });
      }

      _renderEmptyContent(){
          return (
              <View style={{height:height,justifyContent:'center',alignItems:'center'}}>
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
        if(Platform === 'android'){
            ToastAndroid.show(itemData,ToastAndroid.SHORT);
        } else {
            alert(itemData);
        }
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