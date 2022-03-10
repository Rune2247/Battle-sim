import fps from "./js/fps.js"
import {
  ctx,
  canvas,
  importUnits,
  quadTree,
  refreshQuadTree,
  projectiles,
} from "./js/state.js"

export class Battle {
  constructor(allUnits, watchList) {
    this.startGame = false
    this.watchList = watchList
    importUnits(allUnits)
    this.projectileCount = 50
  }

  toggleStart = () => {
    this.startGame = !this.startGame
  }

  fps = () => {
    console.log(fps.rate())
  }

  update = () => {
    //Update every move
    if (this.startGame) {
      fps.update()
      this.updateUnits(quadTree)
    }
  }

  render = () => {
    //Draws every thing
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    this.drawUnits(quadTree)
    this.drawQuadTree(quadTree)
    this.drawProjectiles()
    if (this.watchList.length > 0) {
      this.drawTable()
    }
  }
  getUnitInfo(x, y) {
    /*
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
    */
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

  drawUnits(qTree) {
    qTree.points.forEach((point) => {
      point.draw()
    })

    if (qTree.divided) {
      qTree.children().forEach((tree) => {
        this.drawUnits(tree)
      })
    }
  }
  updateUnits(qTree) {
    console.log()
    qTree.points.forEach((point) => {
      point.update()
    })

    if (qTree.divided) {
      qTree.children().forEach((tree) => {
        this.updateUnits(tree)
      })
    }
  }

  drawProjectiles() {
    projectiles.forEach((projectile) => {
      projectile.draw()
      projectile.update()
    })

    if (projectiles.length > this.projectileCount) {
      projectiles.splice(0, projectiles.length % this.projectileCount)
    }
  }

  drawQuadTree(qTree) {
    refreshQuadTree()
    ctx.strokeStyle = "black"
    ctx.strokeRect(
      qTree.boundary.x - qTree.boundary.w / 2,
      qTree.boundary.y - qTree.boundary.h / 2,
      qTree.boundary.w,
      qTree.boundary.h
    )
    if (qTree.divided) {
      qTree.children().forEach((tree) => {
        this.drawQuadTree(tree)
      })
    }
  }
}
