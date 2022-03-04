import { Arrow } from "./objects/projectiles/Arrow.js"

export const canvas = document.querySelector("canvas")
export const ctx = canvas.getContext("2d")

export const Teams = {
  RED: "red",
  BLUE: "blue",
}

export let units = { red: [], blue: [] }
export let projectiles = [new Arrow(100, 100, 200, 200, 5, 10, 100, "red")]

export const importUnits = (unitOBJ) => {
  units = unitOBJ
}
