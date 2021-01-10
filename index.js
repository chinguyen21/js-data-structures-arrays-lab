// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(new_driver) {
  drivers.push(new_driver)
}
function destructivelyPrependDriver(new_driver) {
  drivers.unshift(new_driver)
  console.log(drivers)
}


function destructivelyRemoveLastDriver() {
  drivers.pop()
}
function destructivelyRemoveFirstDriver() {
  drivers.shift()
}


function appendDriver(new_driver) {
  const new_arr = drivers.slice(0)
  new_arr.push(new_driver)
  return new_arr
}
function prependDriver(new_driver) {
  const new_arr = drivers.slice(0)
  new_arr.unshift(new_driver)
  return new_arr
}
function removeLastDriver() {
  const new_arr = drivers.slice(0)
  new_arr.pop()
  return new_arr
}
function removeFirstDriver() {
  const new_arr = drivers.slice(0)
  new_arr.shift()
  return new_arr
}
