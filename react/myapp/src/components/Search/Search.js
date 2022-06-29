/*
 * @Author: Harry
 * @Date: 2022-06-22 13:47:55
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-06-29 18:29:39
 * @FilePath: \myapp\src\components\Search\Search.js
 */
import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import cartContext from '../../store/cart-context'
import classes from './Search.module.css'
export const Search = () => {
    const ctx = useContext(cartContext)
    const [keyword, setkeyword] = useState('')
    useEffect(function () {
        const timer = setTimeout(() => {
            ctx.filterData(keyword)
        }, 500);
        return () => {
            clearTimeout(timer)
        }
    }, [ctx, keyword])
    const handleInput = function (e) {
        setkeyword(e.target.value.trim())
    }
    return (
        <div className={classes.SearchWrap}>
            <div className={classes.Search}>
                <div className={classes.icon_s}><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></div>
                <div className={classes.input_s}><input value={keyword} type="text" placeholder='请输入关键字' onChange={handleInput} /></div>
            </div>
        </div>
    )
}
