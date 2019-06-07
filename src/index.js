import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import News from './containers/News'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<News />, document.getElementById('root'));

serviceWorker.unregister();
