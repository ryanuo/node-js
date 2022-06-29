/*
 * @Author: Harry
 * @Date: 2022-06-29 09:58:27
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-06-29 15:22:58
 * @FilePath: \myapp\src\components\Cart\CartDetails\CartDetails.js
 */
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import cartContext from '../../../store/cart-context'
import { Meal } from '../../Meals/Meal/Meal'
import { Confirm } from '../../UI/Confirm/Confirm'
import { RootMark } from '../../UI/RootMark/RootMark'
import classes from './CartDetails.module.css'
export const CartDetails = () => {
    const [showClearCart, setShowClearCart] = useState(false)
    const ctx = useContext(cartContext)
    const ShowClearCartHandle = () => {
        setShowClearCart(true)
    }
    // 取消购物车
    const cancel = (e) => {
        e.stopPropagation()
        setShowClearCart(false)
    }
    // 确认删除购物车
    const ok = () => {
        ctx.resetCart()
        setShowClearCart(false)
    }
    return (
        <RootMark>
            {showClearCart && <Confirm confirmText='确认删除购物车？' onCancel={cancel} onOk={ok} />}
            <div className={classes.CartDetails} onClick={e => e.stopPropagation()}>
                <header className={classes.header}>
                    <h2>商品详情</h2>
                    <div className={classes.clearCart}>
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                        <span onClick={ShowClearCartHandle}>清空购物车</span>
                    </div>
                </header>
                <div className={classes.mealList}>
                    {ctx.item.map(item => <Meal key={item.id} meal={item} noDesc />)}
                </div>
            </div>
        </RootMark>
    )
}
