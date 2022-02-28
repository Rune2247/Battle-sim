import { Enteties } from "./Entities.js"
import { ctx } from "../state.js"

export class Flag extends Enteties {
  constructor(x, y) {
    super()
    this.x = x
    this.y = y
    this.color = "green"
    this.name = "Flag"
  }

  draw = () => {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, 40, 40)
    ctx.fillStyle = "black"
    ctx.fillText(this.name, this.x, this.y - 2)
  }
}
