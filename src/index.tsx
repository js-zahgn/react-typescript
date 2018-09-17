import * as  React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';

const dom: any = document.getElementById('root')

ReactDOM.render(<Provider store={store}><App /></Provider>, dom);

// Are we in development mode?
declare var module: any;

if (module.hot) {
    console.log('[OLD_ZHANG] It`s hot loading.');
    // Whenever a new version of App.js is available
    module.hot.accept('./App', function () {
        // Require the new version and render it instead
        var NextApp = require('./App');
        ReactDOM.render(<Provider store={store}><App /></Provider>, dom);
    });
}