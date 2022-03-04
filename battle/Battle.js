import fps from "./js/fps.js"
import { ctx, canvas, units, importUnits } from "./js/state.js"
import {
  draw,
  updateUnits,
  makeUnit,
  updateProjectile,
} from "./js/gameHandler.js"

export class Battle {
  constructor(allUnits, watchList) {
    this.startGame = false
    this.watchList = watchList
    importUnits(allUnits)
    console.log("New battle started")
  }

  toggleStart = () => {
    this.startGame = !this.startGame
  }

  update = () => {
    //Update every move
    if (this.startGame) {
      fps.update()
      updateUnits()
      updateProjectile()
    }
  }

  render = () => {
    //Draws every thing
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    draw()

    if (this.watchList.length > 0) {
      this.drawTable()
    }
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

  drawTable() {
    ctx.fillStyle = "black"
    for (let i = 0; i < this.watchList.length; i++) {
      const element = this.watchList[i]
      ctx.fillStyle = "black"
      ctx.fillText(
        element.name + "  " + element.hp,
        innerWidth - 100,
        10 + i * 10
      )
    }
  }
}
