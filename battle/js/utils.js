export const dist = (obj1, obj2) =>
  Math.sqrt(Math.pow(obj2.x - obj1.x, 2) + Math.pow(obj2.y - obj1.y, 2))

export const angleBetween = (p1, p2) => Math.atan2(p2.y - p1.y, p2.x - p1.x) // * 180 / Math.PI;

export const clearArray = (arr) => {
  while (arr.length > 0) arr.pop()
}

const unitNames = [
  "Rune",
  "Bo",
  "Mustafa",
  "Jesper",
  "Navn",
  "testeren",
  "test",
  "testie",
  "Mika",
  "Bjørn",
  "Sebastian",
  "Simon",
  "Name123",
  "Nam",
  "politiet",
  "fisk",
  "Sofie",
]

export const getName = () => {
  return unitNames[Math.floor(Math.random() * unitNames.length)]
}

export function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export const calcClick = (pair, obj) => {
  const top = { x: obj.x + obj.size, y: obj.y + obj.size }
  const bot = { x: obj.x, y: obj.y }

  if (pair.x > bot.x && pair.x < top.x && pair.y > bot.y && pair.y < top.y) {
    return obj
  }
  return false
}
