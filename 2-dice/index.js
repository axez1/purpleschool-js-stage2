const diceCube = {
  'd4': '4',
  'd6': '6',
  'd8': '8',
  'd10': '10',
  'd12': '12',
  'd16': '16',
  'd20': '20'
}

const getDice = (typeCube) => {
  const min = 1;
  let max = diceCube[typeCube];

  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getDice('d4'));