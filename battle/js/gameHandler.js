import { units } from "./state.js"
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

export const draw = () => {
  drawUnits()
}
