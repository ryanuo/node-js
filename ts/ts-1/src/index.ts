/*
 * @Description: 
 * @Author: Harry
 * @Date: 2021-11-15 14:10:40
 * @Url: https://u.mr90.top
 * @github: https://github.com/rr210
 * @LastEditTime: 2021-11-20 21:58:48
 * @LastEditors: Harry
 */
// import Food from './module/Food'
// import Snake from './module/Snake'
import './style/index.less'
import './style/style.less'
import GameControl from './module/GameControl'
const gameControl = new GameControl()
setInterval(() => {
  console.log(gameControl.direction);
}, 1000)
// let a = new Food()
// a.change()

// let b = new Snake()
// for (let i = 0; i < 10; i++) {
//   b.addBody()
// }
// const a = new Food()
// console.log(a.x, a.y);
// a.change()

