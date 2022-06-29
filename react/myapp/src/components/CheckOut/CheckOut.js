/*
 * @Author: Harry
 * @Date: 2022-06-29 14:57:52
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-06-29 16:21:57
 * @FilePath: \myapp\src\components\CheckOut\CheckOut.js
 */
import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import classes from './CheckOut.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { CheckoutItem } from './CheckoutItem/CheckoutItem'
import cartContext from '../../store/cart-context'
import { Bar } from './Bar/Bar'
const checkoutDom = document.getElementById('root_checkout')
export const CheckOut = (props) => {
    const ctx = useContext(cartContext)
    return ReactDOM.createPortal(<div className={`${classes.Checkout} ${props.className}`}>
        <div className={classes.Icon} onClick={props.onHide}><FontAwesomeIcon icon={faClose} /></div>
        <div className={classes.CheckOutDesc}>
            <header>
                <h2>餐品详情</h2>
            </header>
            <div className={classes.meals}>
                {ctx.item.map(item => <CheckoutItem meal={item} key={item.id} />)}
            </div>
            <footer>
                <p>合计：<span>{ctx.totalPrice}</span></p>
            </footer>
        </div>
        {ctx.totalAmount !== 0 && <Bar price={ctx.totalPrice} />}
    </div>, checkoutDom)
}
