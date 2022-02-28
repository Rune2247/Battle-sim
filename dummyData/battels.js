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

export const tenVten = {
  red: [
    new Unit(20, 20, "red"),
    new Unit(50, 20, "red"),
    new Unit(90, 20, "red"),
    new Unit(130, 20, "red"),
    new Unit(170, 20, "red"),
    new Unit(20, 50, "red"),
    new Unit(50, 50, "red"),
    new Unit(90, 50, "red"),
    new Unit(130, 50, "red"),
    new Unit(170, 50, "red"),
  ],
  blue: [
    new Unit(10, 600, "blue"),
    new Unit(50, 600, "blue"),
    new Unit(90, 600, "blue"),
    new Unit(130, 600, "blue"),
    new Unit(170, 600, "blue"),
    new Unit(210, 600, "blue"),
    new Unit(250, 600, "blue"),
    new Unit(290, 600, "blue"),
    new Unit(330, 600, "blue"),
    new Unit(370, 600, "blue"),
  ],
}

export const oneVone = {
  red: [new Unit(200, 50, "red")],
  blue: [new Unit(250, 50, "blue")],
}
