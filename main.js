import { Battle } from "./battle/Battle.js"
import { tenVten } from "./dummyData/battels.js"

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

let color = false

const resize = () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}
ctx.font = "20px Arial"

resize()
window.addEventListener("resize", resize)

let startGame = false

let battle = new Battle(tenVten)

addEventListener("click", (event) => {
  if (color) {
    battle.makeNewUnit(event.clientX, event.clientY, "red")
  } else {
    battle.makeNewUnit(event.clientX, event.clientY, "blue")
  }
  color = !color
})

addEventListener("keyup", (event) => {
  console.log(event)
  if (event.code === "KeyA") {
    battle.toggleStart()
  }
})

setInterval(() => {
  battle.update()
  battle.render()
}, 1000 / 20)
