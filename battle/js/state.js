export const canvas = document.querySelector("canvas")
export const ctx = canvas.getContext("2d")

export const Teams = {
  RED: "red",
  BLUE: "blue",
}

export let units = { red: [], blue: [] }

export const importUnits = (unitOBJ) => {
  units = unitOBJ
}
