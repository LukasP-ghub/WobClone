export const normalizeFirestoreRes = (item) => {
  const arr = Object.entries(item);
  for (let elem of arr) {
    let [prop] = Object.getOwnPropertyNames(elem[1]);
    while (['stringValue', 'integerValue', 'mapValue', 'booleanValue', 'doubleValue', 'fields'].includes(prop)) {
      elem[1] = elem[1][prop];
      [prop] = Object.getOwnPropertyNames(elem[1]);
    }
    if (typeof elem[1] === 'object' && elem[1] !== null) elem[1] = normalizeFirestoreRes(elem[1]);
  }

  return Object.fromEntries(arr);
}

