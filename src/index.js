import React from 'react';
import ReactDOM from 'react-dom';
import 'uikit/dist/css/uikit.min.css'
import 'uikit/dist/js/uikit.min.js'
import './styles/index.css';
import App from './App';
import store from 'store';
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
)
