/*
 * @Description: 
 * @Author: Harry
 * @Date: 2021-11-21 22:52:05
 * @Url: https://u.mr90.top
 * @github: https://github.com/rr210
 * @LastEditTime: 2021-11-21 23:20:12
 * @LastEditors: Harry
 */
// let arr = ['直男']
// console.log(arr.concat('直男整改中'));
// let x = {}
// console.log(x);
// console.log(Object.getPrototypeOf(hd) == Object.getPrototypeOf(x));
// let x = {}
// console.log(x);
// console.log(x.hasOwnProperty('name'));
// // 创建没有原型的对象
// let hd = Object.create(null, {
//   name: {
//     value: "直男"
//   }
// })
// console.log(hd);
// 就近原则
// let hd: any = {
//   show() {
//     console.log('直男');
//   },
//   render() {
//     console.log('hd render');
//   }
// };
// // console.dir();
// hd.__proto__.render = function () {
//   console.log('整改中');
// }
// hd.render()
// console.log(hd);
function User(username: string) {
  this.name = username
}
// console.log(User);
let hd = new User("直男")
// User.apply/
// 函数也是对象
