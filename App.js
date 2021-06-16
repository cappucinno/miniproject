import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {Store, storePersist} from './src/Store/Store';
import MainApp from './src/Router/MainApp';

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#1b1717',
  },
};

// satria menambahkan navcontainer untuk stackscreen loginscreen dan registerscreen

export default function App({navigation}) {
  return (
    <Provider store={Store}>
      <PersistGate persistor={storePersist}>
        <NavigationContainer theme={myTheme}>
          <MainApp />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
