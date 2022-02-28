import fps from "./js/fps.js"
import { ctx, canvas, units, importUnits } from "./js/state.js"
import { draw, updateUnits, makeUnit } from "./js/gameHandler.js"

export class Battle {
  constructor(allUnits) {
    this.startGame = false
    importUnits(allUnits)
  }

  toggleStart = () => {
    this.startGame = !this.startGame
  }

  update = () => {
    //Update every move
    if (this.startGame) {
      fps.update()
      updateUnits()
    }
  }
  render = () => {
    //Draws every thing
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    draw()
  }
  makeNewUnit(x, y, color) {
    makeUnit(x, y, color)
  }

  getUnitInfo(x, y) {
    let it = false
    for (let i = 0; i < units["red"].length; i++) {
      const element = units["red"][i].checkIfPairHitsUnit({ x, y })
      if (element !== false) {
        it = element
      }
    }
    for (let i = 0; i < units["blue"].length; i++) {
      const element = units["blue"][i].checkIfPairHitsUnit({ x, y })
      if (element !== false) {
        it = element
      }
    }
    return it
  }
}
