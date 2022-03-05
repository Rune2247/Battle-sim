export class Projectile {
  constructor(x, y, targetX, targetY, speed) {
    this.x = x
    this.y = y
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
