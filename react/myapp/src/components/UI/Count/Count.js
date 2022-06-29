/*
 * @Author: Harry
 * @Date: 2022-06-21 14:37:07
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-06-21 17:13:15
 * @FilePath: \myapp\src\components\UI\Count\Count.js
 */
import React, { useContext } from 'react'
import classes from './Count.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../../store/cart-context.js'
export const Count = (props) => {
    /**
     * 增加
     */
    const ctx = useContext(CartContext)
    const addC = function () {
        ctx.addCart(props.meal)
    }
    const subC = function () {
        ctx.subCart(props.meal)
    }
    return (
        <div className={classes.Count}>
            {
                (props.meal.amount && props.meal.amount !== 0) ?
                    <>
                        <button onClick={subC} className={classes.sub}><FontAwesomeIcon icon={faMinus} />
                        </button><span>{props.meal.amount}</span>
                    </>
                    : null
            }

            <button onClick={addC} className={classes.add}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    )
}
