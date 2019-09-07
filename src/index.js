import React, {Fragment} from 'react';
import {StatusBar} from 'react-native';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

const App = () => (
  <Fragment>
    <StatusBar
      barStyle="light-content"
      backgroundColor=" rgba(138, 5, 190, 1)"
    />
    <Routes />
  </Fragment>
);

export default App;
