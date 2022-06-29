/*
 * @Author: Harry
 * @Date: 2022-06-21 16:28:30
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-06-29 12:13:57
 * @FilePath: \myapp\src\store\cart-context.js
 */
import React from "react";
export default React.createContext({
    item: [],
    totalAmount: 0,
    totalPrice: 0,
    addCart: () => { },
    subCart: () => { },
    filterData: () => { },
    resetCart: () => { }
})