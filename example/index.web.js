import { AppRegistry } from 'react-native';
import { App } from './src/App/App';

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', {
  rootTag: document.getElementById('react-root')
});
