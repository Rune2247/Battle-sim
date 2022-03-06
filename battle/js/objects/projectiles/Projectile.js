import { Point } from "../../../../quadtree/Quadtree.js"

export class Projectile extends Point {
  constructor(x, y, targetX, targetY, speed) {
    super(x, y)
    this.targetX = targetX
    this.targetY = targetY
    this.speed = speed
  }

  update() {
    console.log("Projectile update called")
  }

  draw() {
    console.log("Projectile draw called")
  }
}
