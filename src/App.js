import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import AppStore from './redux/AppStore';
import createRoutes from './routes';

let store = createStore(AppStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

import Hello from './containers/Hello/Hello';

ReactDOM.render(
  <Provider store={store}>
    {
      createRoutes()
    }
  </Provider>
  ,
  document.getElementById("content")
);