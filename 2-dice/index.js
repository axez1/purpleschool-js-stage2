const diceCube = {
  'd4': 4,
  'd6': 6,
  'd8': 8,
  'd10': 10,
  'd12': 12,
  'd16': 16,
  'd20': 20
}

const getDice = (typeCube) => {
  let max;
  const min = 1;
  const checkTypeCube = typeCube.toLowerCase();
  const errorMessage = 'Ошибка введенных данных. Введите правильное значение куба!';

  if (!diceCube.hasOwnProperty(checkTypeCube)) {
    console.log(errorMessage);
    return;
  } else {
    max = diceCube[checkTypeCube];

    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

console.log(getDice('d16'));