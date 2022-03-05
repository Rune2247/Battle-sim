import { Projectile } from "./Projectile.js"
import { angleBetween, dist } from "../../utils.js"
import { ctx } from "../../state.js"

export class Arrow extends Projectile {
  constructor(x, y, targetX, targetY, speed, lenght, damage, team) {
    super(x, y, targetX, targetY, speed)
    this.lenght = lenght
    this.damage = damage
    this.team = team

    this.rotation = angleBetween(this, { x: this.targetX, y: this.targetY })
  }
  update() {
    if (
      dist({ x: this.x, y: this.y }, { x: this.targetX, y: this.targetY }) >
      this.lenght
    ) {
      this.x += Math.cos(this.rotation) * this.speed
      this.y += Math.sin(this.rotation) * this.speed
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
