/*
 * @Author: Harry
 * @Date: 2022-06-29 11:20:12
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-06-29 15:22:47
 * @FilePath: \myapp\src\components\UI\Confirm\Confirm.js
 */
import React from 'react'
import { RootMark } from '../RootMark/RootMark'
import classes from './Confirm.module.css'
export const Confirm = (props) => {
    return (
        <RootMark className={classes.ConfirmMark} onClick={props.onCancel}>
            <div className={classes.Confirm} onClick={e => e.stopPropagation()}>
                <p>{props.confirmText}</p>
                <div>
                    <button onClick={props.onCancel}>取消</button>
                    <button onClick={props.onOk} className={classes.OK}>确认</button>
                </div>
            </div>
        </RootMark>
    )
}
