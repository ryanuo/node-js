/*
 * @Author: Harry
 * @Date: 2022-06-21 14:00:14
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-06-29 10:51:51
 * @FilePath: \myapp\src\components\Meals\Meal\Meal.js
 */
import React from 'react'
import classes from './Meal.module.css'
import { Count } from '../../UI/Count/Count.js'
export const Meal = (props) => {
    return (
        <div className={classes.Meal}>
            <div className={classes.imgBox}>
                <img src={props.meal.img} alt='' />
            </div>
            <div className={classes.detail}>
                <h5 className={classes.Title}>{props.meal.title}</h5>
                {props.noDesc ? null : <p>{props.meal.desc}</p>}
                <div className={classes.PriceWrap}>
                    <span className={classes.Price}>{props.meal.price}</span>
                    <Count meal={props.meal} />
                </div>
            </div>
        </div>
    )
}
