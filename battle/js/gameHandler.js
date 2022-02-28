import { Flag } from "./objects/flag.js"
import { units } from "./state.js"
import { Unit } from "./units/unit.js"

let objects = []

export const makeUnit = (x, y, color) => {
  units[color].push(new Unit(x, y, color))
}
const makeObject = (x, y) => {
  objects.push(new Flag(x, y))
}

export const updateUnits = () => {
  units["red"].forEach((unit) => unit.update())
  units["blue"].forEach((unit) => unit.update())
}

const drawUnits = () => {
  units["red"].forEach((unit) => {
    unit.draw()
  })
  units["blue"].forEach((unit) => {
    unit.draw()
  })
}

const drawObjects = () => {
  objects.forEach((obj) => obj.draw())
}

export const draw = () => {
  drawUnits()
  drawObjects()
}
