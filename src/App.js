/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, createRef } from 'react';
import { Provider } from 'react-redux';
import { setTopLevelNavigator } from 'src/utils/navigation';
import { RootNavigator } from 'src/navigation/AppNavigation';
import { configureStore } from 'src/store/configureStore';
import SplashScreen from 'react-native-splash-screen';
import Drawer from 'react-native-drawer';
import {View, Text} from 'react-native';
import ControlPanel from 'src/components/ControlPanel'

export const drawer = createRef();
// const store = configureStore();
class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
    //   <Provider store={store}>
    //     <RootNavigator
    //       ref={(navigatorRef) => {
    //         setTopLevelNavigator(navigatorRef);
    //       }}
    //     />
    //   </Provider>
      <Drawer
        ref={drawer}
        tapToClose={true}
        openDrawerOffset={0.3}
        content={<ControlPanel />}
      >
        <RootNavigator
          ref={(navigatorRef) => {
            setTopLevelNavigator(navigatorRef);
          }}
        />
      </Drawer>    
    );
  }
}
export default App;
