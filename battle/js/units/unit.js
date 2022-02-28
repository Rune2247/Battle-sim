import { ctx, Teams, units } from "../state.js"
import { angleBetween, calcClick, dist, getName, uuid } from "../utils.js"

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
    this.range = 20
    this.damage = 50

    this.name = getName()

    this.isInFocus = false
  }

  checkIfPairHitsUnit = (pair) => {
    const hit = calcClick(pair, this)

    if (hit !== false) {
      this.isInFocus = true
    }
    return hit
  }

  setTarget = (target) => {
    this.target = target
  }

  state = () => {
    this.searchForEnemy()

    if (this.target !== null && this.target !== undefined) {
      if (dist(this, this.target) < this.range) {
        this.attack()
      } else {
        this.move()
      }
    }
  }

  searchForEnemy = () => {
    const enemyTeam = this.team === Teams.RED ? Teams.BLUE : Teams.RED

    let distance = 0
    let newTarget = null

    if (units[enemyTeam].length !== 0) {
      units[enemyTeam].forEach((enemy) => {
        if (newTarget === null) newTarget = enemy

        if (dist(this, enemy) < distance) {
          distance = dist(this, enemy)
          newTarget = enemy
        }
      })
    }

    this.setTarget(newTarget)
  }

  attack = () => {
    if (this.target.hp > -1 || this.target === undefined) {
      this.target.hp -= this.damage
    } else {
      this.setTarget(null)
    }
  }

  checkCollision = () => {
    //collision check
    for (let team in units) {
      for (let i = 0; i < units[team].length; i++) {
        const unit = units[team][i]
        console.log(team, i, unit)
      }
    }
  }

  move = () => {
    this.rotation = angleBetween(this, this.target)
    this.x += Math.cos(this.rotation) * this.speed
    this.y += Math.sin(this.rotation) * this.speed

    //this.checkCollision()
  }

  draw = () => {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.size, this.size)
    ctx.fillStyle = "black"
    ctx.fillText(this.name, this.x, this.y - 2)

    if (this.isInFocus === true) {
      ctx.strokeStyle = "black"
      ctx.strokeRect(this.x, this.y, this.size, this.size)
    }
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
