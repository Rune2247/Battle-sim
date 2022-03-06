import { Unit } from "./unit.js"

export class Warrior extends Unit {
  constructor(x, y, team) {
    super(x, y, team)
    this.hp = 50
    this.size = 15
    this.speed = 3
    this.range = this.size + 5
    this.minDamage = 5
    this.damageAdd = 0
  }
}
