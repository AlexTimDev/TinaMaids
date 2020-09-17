/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, createRef } from 'react';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persister, store } from "./redux";

import { setTopLevelNavigator } from 'src/utils/navigation';
import { RootNavigator } from 'src/navigation/AppNavigation';
import SplashScreen from 'react-native-splash-screen';
import Drawer from 'react-native-drawer';
import ControlPanel from 'src/components/ControlPanel';

export const drawer = createRef();

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
      <Provider store={store}>
        <PersistGate persistor={persister}>
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
        </PersistGate>
      </Provider>
    );
  }
}
export default App;
