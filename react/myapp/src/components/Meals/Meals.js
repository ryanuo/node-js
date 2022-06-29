/*
 * @Author: Harry
 * @Date: 2022-06-21 13:57:23
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-06-22 13:50:36
 * @FilePath: \myapp\src\components\Meals\Meals.js
 */
import React from 'react'
import { Search } from '../Search/Search.js'
import { Meal } from './Meal/Meal.js'
import classes from './Meals.module.css'
const Meals = (props) => {
    return (
        <div className={classes.Meals}>
            <Search />
            {props.meals.map(i => <Meal key={i.id} meal={i} />)}
        </div>
    )
}

export default Meals