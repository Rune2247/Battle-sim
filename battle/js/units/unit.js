import { ctx, Teams, units } from "../state.js"
import { angleBetween, dist, getName, uuid } from "../utils.js"

export class Unit {
  constructor(x, y, team) {
    this.id = uuid()
    this.x = x
    this.y = y
    this.size = 20
    this.color = team
    this.team = team

    this.target = null
    this.rotation = 0

    this.hp = 100
    this.speed = 1
    this.range = 2
    this.damage = 50

    this.name = getName()
  }

  setTarget = (target) => {
    this.target = target
  }

  state = () => {
    this.searchForEnemy()

    if (this.target !== null && this.target !== undefined) {
      if (dist(this, this.target) < this.range) {
        this.attack()
        return
      }
      this.move()
      return
    }
  }

  searchForEnemy = () => {
    const enemyTeam = this.team === Teams.RED ? Teams.BLUE : Teams.RED

    let distance = 0
    let newTarget = null

    if (units[enemyTeam].length !== 0) {
      units[enemyTeam].forEach((enemy) => {
        if (newTarget === null) {
          newTarget = enemy
        }
        if (dist(this, enemy) > distance) {
          newTarget = enemy
        }
      })
    }
    //console.log(newTarget, this.target)
    //if (newTarget !== null && this.target !== null) {
    //if (newTarget.id !== this.target.id) {
    this.setTarget(newTarget)
    // }
    // }
  }

  attack = () => {
    if (this.target.hp > -1 || this.target === undefined) {
      this.target.hp -= this.damage
    } else {
      this.setTarget(null)
    }
  }

  move = () => {
    this.rotation = angleBetween(this, this.target)
    this.x += Math.cos(this.rotation) * this.speed
    this.y += Math.sin(this.rotation) * this.speed
  }

  draw = () => {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y + 2, this.size, this.size)
    ctx.fillStyle = "black"
    ctx.fillText(this.id, this.x, this.y - 2)
  }

  update = () => {
    if (this.hp < 0) {
      this.color = "gray"

      this.kill()
      return
    }
    this.state()
  }

  kill() {
    units[this.team].forEach((u, index) => {
      if (u.id === this.id) {
        units[this.team].splice(index, 1)
      }
    })
  }
}
