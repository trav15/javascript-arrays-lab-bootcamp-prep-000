var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(array, name) {
  return array.push(name)
}

function destructivelyPrependKitten(array, name) {
  return array.unshift(name)
}