import { AppRegistry } from 'react-native';
import ScrollViewDemo from './src/page/ScrollViewDemo'
import FlatListViewDemo from './src/page/FlatListViewDemo'
import App from './App'
// import {StackNavigator} from 'react-navigation';
// const AppSimple = StackNavigator({
//     Main: {screen: App},
//     Profile: {screen: ScrollViewDemo},
//   });

AppRegistry.registerComponent('RNLearning', () => FlatListViewDemo);
