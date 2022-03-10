import { Point } from "../../../quadtree/Quadtree.js"
import { ctx, quadTree } from "../state.js"
import { angleBetween, calcClick, dist, getName, uuid } from "../utils.js"

export class Unit extends Point {
  constructor(x, y, team) {
    super(x, y)

    this.id = uuid()
    this.size = 15
    this.color = team
    this.team = team

    this.target = null
    this.rotation = 0

    this.hp = 100
    this.speed = 2
    this.range = 27
    this.minDamage = 5
    this.damageAdd = 0

    this.name = getName()

    this.isInFocus = false

    this.ticks = 0
    this.cd = 50
  }

  checkIfPairHitsUnit = (pair) => {
    const hit = calcClick(pair, this)

    if (hit !== false) {
      this.isInFocus = !this.isInFocus
    }
    return hit
  }

  setTarget = (target) => {
    this.target = target
  }

  state = () => {
    this.ticks++
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
    const target = quadTree.closestEnemy(this, this.team, 1)
    this.setTarget(target[0])
  }

  attack = () => {
    if (this.ticks >= this.cd) {
      console.log("smok!")
      if (this.target.hp > -1 || this.target === undefined) {
        this.target.hp -=
          this.minDamage + Math.floor(Math.random() * this.damageAdd)
      } else {
        this.setTarget(null)
      }
      this.ticks = 0
    }
  }

  checkCollision = () => {}

  move = () => {
    this.rotation = angleBetween(this, this.target)
    this.x += Math.cos(this.rotation) * this.speed
    this.y += Math.sin(this.rotation) * this.speed
  }

  update = () => {
    if (this.hp < 0) {
      this.kill()
      return
    } else this.state()
  }

  kill() {
    console.log("Kill")
    quadTree.kill(this)
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
}
