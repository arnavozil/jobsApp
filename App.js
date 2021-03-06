import React from 'react';
import { StyleSheet} from 'react-native';
import AppContainer from './navigator/Appnavigator';
import { Provider } from 'react-redux';
import store from './store/store'

export default class App extends React.Component{

  render(){    
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
