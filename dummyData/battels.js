import { Arrow } from "../battle/js/objects/projectiles/Arrow.js"
import { Unit } from "../battle/js/units/unit.js"

export const generatedBattle = () => {
  const battle = []

  for (let index = 0; index < 5; index++) {
    battle.push(new Unit(index * 50 + 20, 50, "red"))

    battle.push(new Unit(index * 50 + 20, 75, "red"))
    battle.push(new Unit(index * 50 + 20, 100, "red"))

    battle.push(new Unit(index * 50 + 20, 580, "blue"))
    battle.push(new Unit(index * 50 + 20, 620, "blue"))

    battle.push(new Unit(index * 50 + 20, 675, "blue"))
  }
  battle.push(new Arrow(0, 0, 400, 300, 10, 10, 0, "red"))

  return battle
}

export const oneVone = () => {
  const battle = []

  battle.push(new Unit(50 + 20, 100, "red"))

  battle.push(new Unit(50 + 20, 580, "blue"))
  battle.push(new Unit(60 + 20, 580, "blue"))

  battle.push(new Unit(70 + 20, 580, "blue"))

  battle.push(new Unit(80 + 20, 580, "blue"))

  return battle
}

export const unfairBlue = [new Unit(200, 50, "red"), new Unit(500, 100, "blue")]
