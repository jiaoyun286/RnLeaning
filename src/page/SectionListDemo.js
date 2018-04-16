import React, { 
    Component,
    PureComponent
} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    SectionList,
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
  import flatData from '../data/sectionData'
  const {width,height} = Dimensions.get('window');//定义屏幕的尺寸常量
//   const VIEWABILITY_CONFIG = {
//       mini
//   }
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
        title: "SectionList",
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
              <SectionList
              sections={this.state.dataList}//用于渲染的数据源
              renderItem={this._renderItem} //渲染列表项
              renderSectionHeader={this._renderSectionHeader} //渲染section的头部组件
              stickySectionHeadersEnabled={true}//section头部组件的吸附效果（IOS平台默认属性）
              ListHeaderComponent={ this._renderHeader }
              ListFooterComponent={ this._renderFooter }
              onEndReachedThreshold={0.5}
              onEndReached={ this._onEndReached }
              refreshControl={
                  <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this._renderRefresh}
                  title="Loading..."
                  colors={['#0087fc', '#00ff00', '#0000ff']}
                  />
              }
              ListEmptyComponent={ this._renderEmptyContent }
              ItemSeparatorComponent={this._renderItemSeparatorComponent}
              />
          );
      }

      _renderEmptyContent(){
          return (
              <View style={{height:height,justifyContent:'center',alignItems:'center'}}>
              <Text style={{alignSelf:'center'}}>暂无数据</Text>
              </View>
          );

      }

      _renderSectionHeader=(section) => {
          return (
              <View style={{flex:1,height:36,backgroundColor:'red',justifyContent:'center',paddingLeft:10}}>
              <Text>{section.section.key}</Text>
              </View>
          );
      }
      _renderItem = (info) => {
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
            //获取测试数据
            let dataList = this.getTestList(false);
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
            let subList = data.data.map((subData) => {
               return {
                uri: subData.cover,
                title: subData.title+this.page,
                des:subData.description,
                price: subData.price,
                noteCount:subData.notecount,
               }
            });
            return {
                key:data.section + this.page,
                data:subList,
            }
        });
        this.page++;
        return isReload ? newList : [...this.state.dataList, ...newList];
    }

  }