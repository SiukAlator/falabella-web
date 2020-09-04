import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import FormRenta from './components/FormRenta';
import MenuHeader from './components/MenuHeader';



const Renta = () => (
    <Provider store={store} >
            <MenuHeader />
            <FormRenta />  
    </Provider>
)

export default Renta;