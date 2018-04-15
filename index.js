import {
    AppRegistry,
    TouchableOpacity
} from 'react-native';
import ScrollViewDemo from './src/page/ScrollViewDemo';
import FlatListViewDemo from './src/page/FlatListViewDemo';
import SectionListDemo from './src/page/SectionListDemo'
import App from './App'
import { StackNavigator } from 'react-navigation';
const AppSimple = StackNavigator({
    main:App,
    scrollview: {screen: ScrollViewDemo},
    flatview: {screen: FlatListViewDemo},
    sectionList: {screen: SectionListDemo},
  });

AppRegistry.registerComponent('RNLearning', () => AppSimple);
