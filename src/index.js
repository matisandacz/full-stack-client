import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const notes = [
    {id:1, content:"This is an important note", important : true},
    {id:2, content:"This is not an important note", impotant: false}
]

root.render(<App notes={notes}/>)
