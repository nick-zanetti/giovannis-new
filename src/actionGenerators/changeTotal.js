export function addTotal(price) {
  return { type: "ADD_TO_TOTAL", payload: price };
}

export function subtractTotal(price) {
  return { type: "REMOVE_FROM_TOTAL", payload: price };
}
