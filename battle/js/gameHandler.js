import { Arrow } from "./objects/projectiles/Arrow.js"
import { projectiles, units } from "./state.js"
import { Unit } from "./units/unit.js"

export const makeUnit = (x, y, color) => {
  units[color].push(new Unit(x, y, color))
}

export const updateUnits = () => {
  //let bigList = units["blue"].concat(units["red"])
  //bigList.forEach((unit) => unit.update())

  units["blue"].forEach((unit) => unit.update())

  units["red"].forEach((unit) => unit.update())
}

const drawUnits = () => {
  units["blue"].forEach((unit) => {
    unit.draw()
  })
  units["red"].forEach((unit) => {
    unit.draw()
  })
}

export const updateProjectile = () => {
  projectiles.forEach((projectile) => projectile.update())
}

const drawProjectiles = () => {
  projectiles.forEach((projectile) => projectile.draw())
}

export const draw = () => {
  drawUnits()
  drawProjectiles()
}
