/*
 * @Description: 
 * @Author: Harry
 * @Date: 2021-11-16 22:55:15
 * @Url: https://u.mr90.top
 * @github: https://github.com/rr210
 * @LastEditTime: 2021-11-20 23:32:58
 * @LastEditors: Harry
 */
import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";
class GameControl {
  // 蛇
  snake: Snake;
  // 食物
  food: Food;
  // 计分器
  scorelPanel: ScorePanel;
  direction: string = 'Right';
  // 创建一个属性用来记录游戏是否结束
  isLive = true;
  // 设置
  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorelPanel = new ScorePanel()
    this.startgame()
  }
  startgame() {
    let btn = document.querySelector('#startgame')!
    btn.addEventListener('click', this.init.bind(this))
  }
  // 游戏的初始化，调用后游戏即将开始
  init() {
    // 绑定键盘的按下的事件
    document.addEventListener('keydown', this.keydownHandler.bind(this))
    this.run()
  }
  // 创建键盘按下的响应事件
  keydownHandler(event: KeyboardEvent) {
    // if (event.code === 'Space') {
    //   this.isLive = !this.isLive
    //   this.direction = 'Right'
    //   this.init()
    // }
    this.direction = event.key
  }
  // 点击开始游戏
  run() {
    let x = this.snake.x
    let y = this.snake.y
    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        y -= 10
        break;
      case "ArrowLeft":
      case "Left":
        x -= 10
        break;
      case "ArrowRight":
      case "Right":
        x += 10
        break;
      case "ArrowDown":
      case "Down":
        y += 10
        break;
      default:
        this.isLive = !this.isLive
    }
    this.checkEat(x, y)
    try {
      this.snake.x = x
      this.snake.y = y
    } catch (e: any) {
      alert(e.message + 'GAME OVER!');
      // 将isLive设置为false
      this.isLive = false;
      this.isLive = false
    }
    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorelPanel.level - 1) * 30);
  }

  // 定义一个方法，用来检查蛇是否吃到食物
  checkEat(X: number, Y: number) {
    if (X === this.food.x && Y === this.food.y) {
      console.log('吃到食物了~~');
      // 食物的位置进行重置
      this.food.change();
      // 分数增加
      this.scorelPanel.addScore();
      // 蛇要增加一节
      this.snake.addBody();
    }
  }
}

export default GameControl