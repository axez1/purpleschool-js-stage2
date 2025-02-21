const diceCube = {
  name: ['d4', 'd6', 'd8', 'd10', 'd12', 'd16', 'd20'],
  range: [4, 6, 8, 10, 12, 16, 20]
}

const getDice = (typeCube) => {
  const min = 1;
  let indexDiceCubeType = diceCube.name.indexOf(typeCube);
  let max = diceCube.range[indexDiceCubeType];

  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getDice('d4'));