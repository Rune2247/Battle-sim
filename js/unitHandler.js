import { Flag } from "./objects/flag.js"
import { Teams } from "./state.js"
import { Unit } from "./units/unit.js"

let allUnits = []
let objects = []

const makeUnit = (x, y, color) => {
  allUnits.push(new Unit(x, y, color))
}
const makeObject = (x, y) => {
  objects.push(new Flag(x, y))
}
/*
const killUnits = (index) => {
  allUnits.splice(index, 1)
}
*/

export const updateUnits = () => {
  allUnits.forEach((unit) => unit.update())
}

const drawUnits = () => {
  allUnits.forEach((unit) => {
    unit.draw()
  })
  allUnits[0].setTarget(objects[0])
}

const drawObjects = () => {
  objects.forEach((obj) => obj.draw())
}

export const draw = () => {
  drawUnits()
  drawObjects()
}

makeObject(300, 300)
makeUnit(100, 100, Teams.RED)
makeUnit(120, 120, Teams.RED)
