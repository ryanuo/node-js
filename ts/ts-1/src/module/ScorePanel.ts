/*
 * @Description: 
 * @Author: Harry
 * @Date: 2021-11-16 22:19:49
 * @Url: https://u.mr90.top
 * @github: https://github.com/rr210
 * @LastEditTime: 2021-11-20 22:23:28
 * @LastEditors: Harry
 */
// 定义一个记分牌
class ScorePanel {
  score = 0;
  level = 1;
  maxlevel: number;
  maxscore: number;
  scoreEle: HTMLElement;
  levelEle: HTMLElement;
  // 获取元素对象
  constructor(maxlevel: number = 10, maxscore: number = 10) {
    this.maxlevel = maxlevel
    this.maxscore = maxscore
    this.scoreEle = document.getElementById('score')!;
    this.levelEle = document.getElementById('level')!;
  }
  // 设置加分
  addScore() {
    this.scoreEle.innerHTML = ++this.score + ''
    // 每10分升一级
    if (this.score % this.maxscore === 0) {
      this.levelUp()
    }
  }
  // 等级提升
  levelUp() {
    if (this.level < this.maxlevel) {
      this.levelEle.innerHTML = ++this.level + ''
    }
  }
}

// const scorePanel = new ScorePanel()
// scorePanel.addScore()

export default ScorePanel