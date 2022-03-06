import { Arrow } from "../objects/projectiles/Arrow.js"
import { Unit } from "./unit.js"

export class Archer extends Unit {
  constructor(x, y, team) {
    super(x, y, team)
    this.hp = 70
    this.size = 10
    this.speed = 10
    this.range = 600
    this.minDamage = 10
    this.damageAdd = 0

    this.cd = 20
  }

  attack = () => {
    if (this.ticks >= this.cd) {
      if (this.target.hp > -1 || this.target === undefined) {
        new Arrow(
          this.x,
          this.y,
          this.target,
          25,
          10,
          this.minDamage,
          2,
          this.team
        )
      } else {
        this.setTarget(null)
      }
      this.ticks = 0
    }
  }
}
