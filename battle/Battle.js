import fps from "./js/fps.js"
import { ctx, canvas, units, importUnits } from "./js/state.js"
import { draw, updateUnits, makeUnit } from "./js/gameHandler.js"

export class Battle {
  constructor(allUnits) {
    this.startGame = false
    importUnits(allUnits)
  }

  toggleStart = () => {
    console.log(this.startGame, !this.startGame)
    this.startGame = !this.startGame

    console.log(units)
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
}
