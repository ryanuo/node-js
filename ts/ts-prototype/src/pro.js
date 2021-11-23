/***
 * @Description: 
 * @Author: Harry
 * @Date: 2021-11-23 22:13:40
 * @Url: https://u.mr90.top
 * @github: https://github.com/rr210
 * @LastEditTime: 2021-11-23 22:33:54
 * @LastEditors: Harry
 */
// function User() { }
// User.__proto__.view = function () {
//   console.log('直男');
// }
// User.view()
// console.dir(User);

// let hd = new Object()
// hd.name = '直男'
// console.dir(Object);
// Object.prototype.show = function () {
//   console.log('change');
// }

// function User() { }
// console.dir(User);

// let x = new User()
// x.show()
// 系统构造函数的区别
// let hd = {}
// console.log(hd.__proto__ == Object.prototype);

// let str = ''
// console.log(str.__proto__ == String.prototype);

// let bool = true
// console.log(bool.__proto__ == Boolean.prototype);

// let reg = /a/i
// console.log(reg.__proto__ == RegExp.prototype);

// let obj = {}
// console.log(obj.__proto__ == Object.prototype);

let hd = {
  name: "hd"
}
let parent = {
  name: 'parent',
  show() {
    console.log(this);
    this.name = 'parent show'
    console.log(this.name);
  }
}

console.log(hd.__proto__ == Object.prototype);
// 设置它的原型
Object.setPrototypeOf(hd, parent)
hd.show()