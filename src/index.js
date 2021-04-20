import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import Tip from './components/Tip';

ReactDOM.render(
    <React.StrictMode>
        {/* <App /> */}
        <Tip />
    </React.StrictMode>,
    document.getElementById('root')
);