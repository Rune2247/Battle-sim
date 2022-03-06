import { Projectile } from "./Projectile.js"
import { angleBetween, dist } from "../../utils.js"
import { ctx, projectiles, quadTree } from "../../state.js"

export class Arrow extends Projectile {
  constructor(x, y, target, speed, lenght, damage, targetRange, team) {
    super()
    this.x = x
    this.y = y
    this.target = target
    this.speed = speed
    this.lenght = lenght
    this.damage = damage
    this.targetRange = targetRange
    this.team = team

    this.rotation = angleBetween(this, { x: this.target.x, y: this.target.y })
    this.isLanded = false

    projectiles.push(this)
  }

  update() {
    if (!this.isLanded) {
      quadTree.getAllPoints().forEach((element) => {
        if (element.id === this.target.id) {
          this.target = element
        }
      })

      if (
        dist({ x: this.x, y: this.y }, { x: this.target.x, y: this.target.y }) >
        this.lenght / 2 + this.target.size / 2
      ) {
        this.x += Math.cos(this.rotation) * this.speed
        this.y += Math.sin(this.rotation) * this.speed
      } else {
        this.isLanded = true
        console.log(this.damage)
        this.target.hp -= this.damage
      }
    }
  }

  draw = () => {
    ctx.lineWidth = "1px"
    ctx.strokeStyle = this.team
    ctx.beginPath()
    ctx.moveTo(this.x, this.y)
    ctx.lineTo(
      this.x - Math.cos(this.rotation) * this.lenght,
      this.y - Math.sin(this.rotation) * this.lenght
    )
    ctx.stroke()
  }
}
