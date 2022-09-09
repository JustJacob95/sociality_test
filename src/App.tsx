import React from 'react';
import GeneralLayout from './containers/GeneralLayout';
import {Provider} from 'react-redux'
import {store} from './store/store'
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GeneralLayout />
      </BrowserRouter>
    </Provider>

  );
}

export default App;
