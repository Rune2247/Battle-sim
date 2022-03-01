import { Unit } from "../battle/js/units/unit.js"

export const generatedBattle = () => {
  const battle = { red: [], blue: [] }

  for (let index = 0; index < 5; index++) {
    battle["red"].push(new Unit(index * 50 + 20, 50, "red"))

    battle["red"].push(new Unit(index * 50 + 20, 75, "red"))
    battle["red"].push(new Unit(index * 50 + 20, 100, "red"))

    battle["blue"].push(new Unit(index * 50 + 20, 580, "blue"))
    battle["blue"].push(new Unit(index * 50 + 20, 620, "blue"))

    battle["blue"].push(new Unit(index * 50 + 20, 675, "blue"))
  }

  return battle
}

let addon = 350
export const tenVten = {
  red: [
    new Unit(50 + addon, 20, "red"),
    new Unit(90 + addon, 20, "red"),
    new Unit(130 + addon, 20, "red"),
    new Unit(170 + addon, 20, "red"),
    new Unit(210 + addon, 20, "red"),
    new Unit(50 + addon, 70, "red"),
    new Unit(90 + addon, 70, "red"),
    new Unit(130 + addon, 70, "red"),
    new Unit(170 + addon, 70, "red"),
    new Unit(210 + addon, 70, "red"),
  ],
  blue: [
    new Unit(50 + addon, 600, "blue"),
    new Unit(90 + addon, 600, "blue"),
    new Unit(130 + addon, 600, "blue"),
    new Unit(170 + addon, 600, "blue"),
    new Unit(210 + addon, 600, "blue"),
    new Unit(50 + addon, 650, "blue"),
    new Unit(90 + addon, 650, "blue"),
    new Unit(130 + addon, 650, "blue"),
    new Unit(170 + addon, 650, "blue"),
    new Unit(210 + addon, 650, "blue"),
  ],
}

export const oneVone = {
  red: [new Unit(200, 50, "red")],
  blue: [new Unit(250, 50, "blue")],
}
export const one = {
  red: [new Unit(200, 50, "red")],
  blue: [new Unit(500, 50, "blue")],
}

export const unfairBlue = {
  red: [new Unit(200, 50, "red"), new Unit(200, 100, "red")],
  blue: [new Unit(500, 50, "blue"), new Unit(500, 100, "blue")],
}
