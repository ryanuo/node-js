/*
 * @Author: Harry
 * @Date: 2022-06-21 13:00:37
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-06-29 18:30:18
 * @FilePath: \myapp\src\App.js
 */
import React, { useState } from 'react';
import { Cart } from './components/Cart/Cart';
import Meals from './components/Meals/Meals';
import CartContext from './store/cart-context';

import { mealDatas } from './utils/common.js'
const App = () => {
    const [mealsData, setMealsData] = useState(mealDatas)
    /*
    * 购物车的数据
    */
    //    使用useReducer实现
    // const [state, dispatch] = useReducer(cartReducer, {
    //     item: [],
    //     totalAmount: 0,
    //     totalPrice: 0
    // })
    const [cartData, setCartdata] = useState({
        item: [],
        totalAmount: 0,
        totalPrice: 0
    })
    const filterData = function (e) {
        // 正则的两种动态赋值的方式实现
        // const reg = new RegExp(e, 'g')
        // const val = e ? e : null
        // const reg = eval('/' + val + '/')
        // const res = mealDatas.filter(v => {
        //     console.log();
        //     return v
        // })
        // setMealsData(res)
        // 使用indexOf的方法实现
        const newMealsData = mealDatas.filter(item => item.title.indexOf(e) !== -1);
        console.log(newMealsData);
        setMealsData(newMealsData)
    }
    /**
     * 清空购物车
     */
    const resetCart = function () {
        const newCart = { ...cartData }
        newCart.item.forEach(v => delete v.amount)
        newCart.item = []
        newCart.totalAmount = 0
        newCart.totalPrice = 0
        setCartdata(newCart)
    }
    /**
     * 加入购物车
     */
    const addCart = function (meal) {
        const newCartData = { ...cartData }
        if (newCartData.item.indexOf(meal) === -1) {
            console.log(meal);
            newCartData.item.push(meal)
            meal.amount = 1
        } else {
            meal.amount += 1
        }
        newCartData.totalAmount += 1
        console.log(meal.price);
        newCartData.totalPrice += meal.price
        setCartdata(newCartData)
    }
    /**
     * - 购物车数据
     */
    const subCart = function (meal) {
        // 复制购物车
        const newCart = { ...cartData };

        // 减少商品的数量
        meal.amount -= 1;

        // 检查商品数量是否归0
        if (meal.amount === 0) {
            // 从购物车中移除商品
            newCart.item.splice(newCart.item.indexOf(meal), 1);
        }

        // 修改商品总数和总金额
        newCart.totalAmount -= 1;
        newCart.totalPrice -= meal.price;

        setCartdata(newCart);
    }
    return (
        <CartContext.Provider value={{ ...cartData, addCart, subCart, filterData, resetCart }}>
            <div>
                <Meals
                    meals={mealsData}
                />
                <Cart />
            </div>
        </CartContext.Provider>
    )
}

export default App
