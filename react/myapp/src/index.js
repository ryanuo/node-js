/*
 * @Author: Harry
 * @Date: 2022-06-21 12:07:39
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-06-21 13:54:29
 * @FilePath: \myapp\src\index.js
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.js'
import './index.css'

document.documentElement.style.fontSize = 100 / 750 + 'vw'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);