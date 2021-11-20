/*
 * @Description: 
 * @Author: Harry
 * @Date: 2021-11-16 22:19:38
 * @Url: https://u.mr90.top
 * @github: https://github.com/rr210
 * @LastEditTime: 2021-11-16 22:21:21
 * @LastEditors: Harry
 */

class Food {
  // 定义一个属性表示食物所对应的元素
  element: HTMLElement;
  constructor() {
    // !断言 
    this.element = document.querySelector('#food')!;
  }
  // 定义获取食物的方法
  get x() {
    return this.element.offsetLeft;
  }
  get y() {
    return this.element.offsetTop;
  }
  // 定义食物的随机坐标
  change() {
    let top = Math.round(Math.random() * 29) * 10;
    let left = Math.round(Math.random() * 29) * 10
    this.element.style.left = top + 'px'
    this.element.style.top = left + 'px'
  }
}

export default Food