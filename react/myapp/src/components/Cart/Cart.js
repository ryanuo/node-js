/*
 * @Author: Harry
 * @Date: 2022-06-29 08:56:26
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-06-29 17:14:14
 * @FilePath: \myapp\src\components\Cart\Cart.js
 */
import React, { useContext, useEffect, useState } from 'react'
import classes from './Cart.module.css'
import Iconimg from '../../asset/bag.png'
import cartContent from '../../store/cart-context'
import { CartDetails } from './CartDetails/CartDetails'
import { CheckOut } from '../CheckOut/CheckOut'
export const Cart = () => {
    const ctx = useContext(cartContent)
    const [showDeatail, setShowDetail] = useState(false)
    const [showcheckout, setShowcheckout] = useState(false)
    const setShowcheckoutHandle = function () {
        if (ctx.totalAmount === 0) return;
        setShowcheckout(true)
    }
    const showDeatailHandle = () => {
        if (ctx.totalAmount === 0) {
            return setShowDetail(false)
        }
        setShowDetail(!showDeatail)
    }
    useEffect(() => {
        if (ctx.totalAmount === 0) {
            setShowDetail(false)
            setShowcheckout(false)
        }
    }, [ctx])
    // 隐藏
    const hideCheckout = function () {
        setShowcheckout(false)
    }
    return (
        <div className={classes.Cart} onClick={showDeatailHandle}>
            {showcheckout && <CheckOut onHide={hideCheckout} />}
            {showDeatail && <CartDetails />}
            <div className={classes.Icon}>
                <img src={Iconimg} alt="" srcSet="" />
                {ctx.totalAmount > 0 ? <span> {ctx.totalAmount} </span> : null}
            </div>
            {ctx.totalPrice > 0 ?
                <p className={classes.price}>{ctx.totalPrice}</p>
                : <p className={classes.noprice}>未选购商品</p>}

            <button
                onClick={setShowcheckoutHandle}
                className={ctx.totalAmount ? classes.btn : classes.nobtn}>去结算</button>
        </div>
    )
}
