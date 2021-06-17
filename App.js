import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {Store, storePersist} from './src/Store/Store';
import MainApp from './src/Router/MainApp';
import {navigationRef} from './src/function/nav';

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#1b1717',
  },
};

export default function App({navigation}) {
  return (
    <Provider store={Store}>
      <PersistGate persistor={storePersist}>
        <NavigationContainer ref={navigationRef} theme={myTheme}>
          <MainApp />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
