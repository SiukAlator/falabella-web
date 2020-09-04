import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import FormBody from './components/FormBody';
import MenuHeader from './components/MenuHeader';
import './assets/css/style.scss'


const App = () => (
    <Provider store={store} >

            <MenuHeader />
            <FormBody  />
  
    </Provider>
)

export default App;