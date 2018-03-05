export const clear = (array) => {
  if (!Array.isArray(array)) {
    throw new Error('argument is not a array');
  }
  array.length = 0;
  return array;
};

export const firtElement = (array) => {
  if (!Array.isArray(array)) {
    throw new Error('argument is not a array');
    return;
  }
  return array[0] || null;
};

export const deleteIf = (array, predicate) => {
  if (!Array.isArray(array)){
    throw new Error('argument is not a array');
    return;
  }

  if (array.length === 0) return array;

  for (let i=0; i < array.length;){
    if (predicate(array[i])){
      array.splice(i, 1);
    } else {
      i++;
    }
  }

  return array;
};