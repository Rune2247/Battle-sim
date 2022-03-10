import { Battle } from "./battle/Battle.js"
import { quadTree, refreshQuadTree } from "./battle/js/state.js"
import { generatedBattle, oneVone, unfairBlue } from "./dummyData/battels.js"
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const resize = () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}
ctx.font = "20px Arial"

resize()
window.addEventListener("resize", resize)

const watchList = []

let battle = new Battle(generatedBattle(), watchList)

function fps() {
  battle.fps()
}

/*
addEventListener("click", (event) => {
  const hit = battle.getUnitInfo(event.clientX, event.clientY)
  console.log(hit)
  if (hit !== false) {
    let anyHits = false
    watchList.forEach((item, index) => {
      if (item.id === hit.id) {
        watchList.splice(index, 1)
        anyHits = true
      }
    })
    if (!anyHits) watchList.push(hit)
  }
})
*/

addEventListener("keyup", (event) => {
  if (event.code === "KeyA") {
    battle.toggleStart()
  }
})

addEventListener("keyup", (event) => {
  if (event.code === "KeyZ") {
    fps()
  }
})

setInterval(() => {
  battle.update()
  battle.render()
}, 1000 / 30)
