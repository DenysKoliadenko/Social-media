import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost,updateNewPostText } from './componets/Redux/State';
import { BrowserRouter, } from 'react-router-dom'
 

export let rerenderEntireThree = (State) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App State={State} addPost={addPost} updateNewPostText={updateNewPostText} />
            </React.StrictMode>
        </BrowserRouter>

    );
}