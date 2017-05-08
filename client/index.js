import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import AppStore from './redux/AppStore';
import Routes from './routes';
import http from './utils/http';

let store = createStore(AppStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    {
      Routes()
    }
  </Provider>
  ,
  document.getElementById("content")
);