/***
 * @Description:
 * @Author: Harry
 * @Date: 2021-11-23 22:13:40
 * @Url: https://u.mr90.top
 * @github: https://github.com/rr210
 * @LastEditTime: 2021-11-25 12:46:23
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

// let hd = {
//   name: "hd"
// }
// let parent = {
//   name: 'parent',
//   show() {
//     this.name = 'parent show'
//   }
// }

// console.log(hd.__proto__ == Object.prototype);
// // 设置它的原型
// Object.setPrototypeOf(hd, parent)
// console.log(Object.getPrototypeOf(hd));
// hd.show()

// function User() { }
// User.__proto__.view = function () {
//   console.log("user view");
// }
// // 函数对象有两个父级属性（__proto__和prototype）
// User.view()
// console.log(User.prototype);

// let hd = new Object();
// hd.name = '直男'
// console.dir(Object);

// 原型找到构造函数

// function User() { }
// console.dir(User);

// let hd = {
//   data: [1, 2, 33, 5, 22]
// }

// Object.setPrototypeOf(hd, {
//   max(data) {
//     return data.sort((a, b) => b - a)[0]
//   }
// })

// console.log(hd.max(hd.data)); // 33

// let x = {
//   lessons: { js: 87, node: 55, css: 34 },
//   // get data() {
//   //   return Object.values(this.lessons)
//   // }
// }
// // console.log(x.data);

// console.log(hd.max.call(null, Object.values(x.lessons)));

// console.log(Math.max.apply(null, Object.values(x.lessons)));


//原型的继承 改变构造函数的原型不是继承

// 给构造函数的原型的原型去继承 也就是给Object的原型
// 使用create方法 创建一个新的对象  它会创建一个新的对象
// function Hd() { }
// console.dir(Hd);
// function User(age) {
//   this.age = age
//   this.name = 'user'
// }
// function Admin(age) {
//   User.call(this, age)
//   this.name = 'admin'
// }
// function Member(age) {
//   User.call(this, age)
//   this.name = 'member'
// }
// User.prototype.view = function () {
//   console.log(this.age);
// }
// // Admin.prototype.role = function () {
// //   console.log(this.name);
// // }

// // Member.prototype.role = function () {
// //   console.log(this.name);
// // }
// // User继承Admin的方法
// // 继承的方法 1 直接在构造函数的原型的原型
// // 方法一
// // Admin.prototype.__proto__ = User.prototype
// // Member.prototype.__proto__ = User.prototype
// // 方法二 使用setPrototypeOf
// // Object.setPrototypeOf(Member.prototype, User.prototype)
// // Object.setPrototypeOf(Admin.prototype, User.prototype)
// // 方法三 使用Object.create方法实现 使用这种方法的问题就是 它会生成一个新的对象，并且将该对象的原型指向
// // 这个函数的原型
// Admin.prototype = Object.create(User.prototype)
// Member.prototype = Object.create(User.prototype)
// // // 将constructor的属性设置为不可遍历的参数
// // Object.defineProperty(Admin.prototype, 'constructor', {
// //   value: Admin,
// //   enumerable: false
// // })
// // Admin.prototype.role = function () {
// //   console.log(this.name);
// // }
// // Member.prototype.role = function () {
// //   console.log(this.name);
// // }

// // 方法四
// // 使用call方法来继承 寄生式组合继承
// //  使用Object.create 方法和call方法还有apply方法来实现继承，但是也必须使用defineProperty方法来将constructor的值设置为不可遍历的属性
// let member = new Member(12)
// let admin = new Admin(21)
// // console.dir(admin);
// // // admin.role()
// // // member.role()
// member.view()
// admin.view()
// function _extend(child, parent) {
//   child.prototype = Object.create(parent.prototype)
//   Object.defineProperty(child.prototype, 'constructor', {
//     value: child,
//     enumerable: false
//   })
// }
// function Person() {
//   this.name = 'zs'
//   this.age = 20
// }
// Person.prototype.view = function () {
//   console.log(this.name);
// }
// function Child() {
//   Person.call(this)
// }
// _extend(Child, Person)
// let hd = new Child()
// hd.view()  // zs


// let ad = [1, 321, 2312, 321, 2, 4, 12]
// let b = [123, 23, 13, 2, 31, 32]
// console.log(ad);
// Array.prototype.push.apply(ad, b)
// console.log(ad);