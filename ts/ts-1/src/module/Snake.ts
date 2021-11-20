/*
 * @Description: 
 * @Author: Harry
 * @Date: 2021-11-16 22:39:22
 * @Url: https://u.mr90.top
 * @github: https://github.com/rr210
 * @LastEditTime: 2021-11-20 22:55:47
 * @LastEditors: Harry
 */
class Snake {
  head: HTMLElement;
  bodies: HTMLCollection;
  // 获取蛇的容器
  element: HTMLElement;
  constructor() {
    this.element = document.querySelector('#snake')!;
    this.head = document.querySelector('#snake > div') as HTMLElement;
    this.bodies = this.element.getElementsByTagName('div')!;
  }
  get x() {
    return this.head.offsetLeft;
  }
  get y() {
    return this.head.offsetTop;
  }
  // 设置蛇头的坐标
  set x(value: number) {
    // 如果新值和旧值相同，则直接返回不再修改 （加判断只是为了可以减少修改属性的次数，提升性能）
    if (this.x === value) return;
    // X值的合法范围0-290之间
    if (value < 0 || value > 290) {
      // 进入判断说明蛇撞墙了
      throw new Error("蛇撞墙了~~");
    }
    // 修改x时，是在修改水平坐标，蛇在左右移动，蛇在向左移动时，不能向右掉头，反之亦然
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
      // console.log('水平方向发生了掉头');
      // 如果发生了掉头，让蛇向方向继续移动
      if (value > this.x) {
        // 如果新值value大于旧值X， 则说明蛇在向右走，此时发生掉头，应该使蛇继续向左走
        value = this.x - 10;
      } else {
        // 向左走
        value = this.x + 10;
      }
    }
    // 移动身体
    // this.moveBody();

    this.head.style.left = value + 'px';
    // 检查有没有撞自己
    // this.checkHeadBody();
  }

  set y(value: number) {
    // 如果新值和旧值相同，则直接返回不再修改
    if (this.y === value) return;
    // y值的合法范围0-290之间
    if (value < 0 || value > 290) {
      // 进入判断说明蛇撞墙了
      throw new Error("蛇撞墙了~~");
    }

    // 修改y时，是在修改水平坐标，蛇在上下移动，蛇在向上移动时，不能向下掉头，反之亦然
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      // console.log('垂直方向发生了掉头');
      // 如果发生了掉头，让蛇向方向继续移动
      if (value > this.y) {
        // 如果新值value大于旧值y， 则说明蛇在向下走，此时发生掉头，应该使蛇继续向上走
        value = this.y - 10;
      } else {
        // 向上走
        value = this.y + 10;
      }
    }
    // 移动身体
    // this.moveBody();

    this.head.style.top = value + 'px';
    // 检查有没有撞自己
    // this.checkHeadBody();
  }
  // 添加蛇
  addBody() {
    this.element.insertAdjacentHTML("beforeend", "<div></div>")!;
  }
}

export default Snake