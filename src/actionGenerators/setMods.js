export function setMod1(item) {
  return {
    type: "UPDATE_MOD",
    payload: {
      mod1Add: !item.mod1Add,
    },
  };
}

export function setMod2(item) {
  return {
    type: "UPDATE_MOD",
    payload: {
      mod2Add: !item.mod2Add,
    },
  };
}
