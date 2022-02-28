import { GameObject } from "../GameObject.js"
import { ctx } from "../state.js"
import { angleBetween, getName } from "../utils.js"

export class Unit extends GameObject {
  constructor(x, y, team) {
    super()
    this.x = x
    this.y = y
    this.size = 20
    this.color = team

    this.target = null

    this.hp = 100
    this.speed = 1
    this.rotation = 0

    this.name = getName()
  }

  setTarget = (target) => {
    this.target = target
  }

  state = () => {
    if (this.target !== null) {
      this.move()
    }
  }

  attack = () => {}

  move = () => {
    this.rotation = angleBetween(this, this.target)
    this.x += Math.cos(this.rotation) * this.speed
    this.y += Math.sin(this.rotation) * this.speed
  }

  draw = () => {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y + 2, this.size, this.size)
    ctx.fillStyle = "black"
    ctx.fillText(this.name, this.x, this.y - 2)
  }

  update = () => {
    this.state()
  }
}
