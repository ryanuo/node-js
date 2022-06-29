/*
 * @Author: Harry
 * @Date: 2022-06-29 09:48:52
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-06-29 12:06:57
 * @FilePath: \myapp\src\components\UI\RootMark\RootMark.js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import classes from './RootMark.module.css'
const rootMark = document.getElementById('root_mark')
export const RootMark = (props) => {
    return ReactDOM.createPortal(<div {...props} className={`${classes.rootmark} ${props.className}`}>
        {props.children}
    </div>, rootMark)
}
