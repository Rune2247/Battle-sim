import fps from "./js/fps.js"
import { ctx, canvas } from "./js/state.js"
import { draw, updateUnits, makeUnit } from "./js/gameHandler.js"

const resize = () => {
  canvas.width = innerWidth
  canvas.height = innerHeight
}
resize()

const update = () => {
  //Update every move
  fps.update()
  updateUnits()
}
const render = () => {
  //Draws every thing
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  draw()
}

setInterval(() => {
  update()
  render()
}, 1000 / 30)

let color = false
addEventListener("click", (event) => {
  if (color) {
    makeUnit(event.clientX, event.clientY, "red")
  } else {
    makeUnit(event.clientX, event.clientY, "blue")
  }
  color = !color
})
