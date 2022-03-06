import { Unit } from "./unit.js"

export class Warrior extends Unit {
  constructor(x, y, team) {
    super(x, y, team)
    this.hp = 50
    this.size = 15
    this.speed = 5
    this.range = this.size + 5
    this.minDamage = 50
    this.damageAdd = 0

    this.cd = 10
  }
}
