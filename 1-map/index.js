const myArray = [
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 1, name: 'Вася' }
];

const myNewArray = new Set(myArray.map(el => el.id).map(id => myArray.find(item => item.id === id)));

console.log(myNewArray);