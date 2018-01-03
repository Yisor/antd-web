import React from 'react';
import { render } from 'react-dom'
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/index';
import rootSaga from './sagas';
import Root from './root';
import './index.css';

let store = configureStore();
store.runSaga(rootSaga);

render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
