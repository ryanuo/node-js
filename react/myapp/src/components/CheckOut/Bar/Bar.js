/*
 * @Author: Harry
 * @Date: 2022-06-29 16:16:04
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-06-29 16:20:02
 * @FilePath: \myapp\src\components\CheckOut\Bar\Bar.js
 */
import React from 'react'
import classes from './Bar.module.css'
export const Bar = (props) => {
    return (
        <div className={classes.Bar}>
            <div className={classes.price}>{props.price}</div>
            <button className={classes.btn}>去支付</button>
        </div>
    )
}
