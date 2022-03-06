import Quadtree from "../../quadtree/Quadtree.js"
export const canvas = document.querySelector("canvas")
export const ctx = canvas.getContext("2d")

export const Teams = {
  RED: "red",
  BLUE: "blue",
}

export let projectiles = []

let rec = new Quadtree.Rectangle(
  innerWidth / 2,
  innerHeight / 2,
  innerWidth,
  innerWidth
)
export let quadTree = new Quadtree.QuadTree(rec, 1)
//export let units = quadTree.points

export const setQuadTree = (newTree) => {
  quadTree = newTree
}

export const refreshQuadTree = () => {
  let rec = new Quadtree.Rectangle(
    innerWidth / 2,
    innerHeight / 2,
    innerWidth,
    innerWidth
  )
  let newQuadTree = new Quadtree.QuadTree(rec, 1)

  quadTree.getAllPoints().forEach((value) => {
    newQuadTree.insert(value)
  })
  setQuadTree(newQuadTree)
  return newQuadTree
}

export const importUnits = (unitOBJ) => {
  console.log(unitOBJ)
  if (unitOBJ !== null) {
    unitOBJ.forEach((element) => {
      quadTree.insert(element)
    })
  }
}
