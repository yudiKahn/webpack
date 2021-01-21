import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

let appDiv = document.createElement('div');
appDiv.setAttribute('id', 'app');
document.body.append(appDiv);


ReactDOM.render(<App/>, appDiv);