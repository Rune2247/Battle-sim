import fps from "./js/fps.js"
import { ctx, canvas } from "./js/state.js"
import { draw, updateUnits } from "./js/unitHandler.js"

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

addEventListener("click", () => {})
