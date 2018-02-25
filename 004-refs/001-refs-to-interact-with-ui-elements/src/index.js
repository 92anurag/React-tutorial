import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AddColorForm from './Components/AddColorForm';

const logColor = (title, color) => console.log(`New Color: ${title} | ${color}`);
ReactDOM.render(<AddColorForm onNewColor={logColor}/>, document.getElementById('root'));
registerServiceWorker();
