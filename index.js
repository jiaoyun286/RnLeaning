import {
    AppRegistry,
    TouchableOpacity
} from 'react-native';
import ScrollViewDemo from './src/page/ScrollViewDemo'
import FlatListViewDemo from './src/page/FlatListViewDemo'
import App from './App'
import { StackNavigator } from 'react-navigation';
const AppSimple = StackNavigator({
    main:App,
    scrollview: {screen: ScrollViewDemo},
    flatview: {screen: FlatListViewDemo},
  });

AppRegistry.registerComponent('RNLearning', () => AppSimple);
