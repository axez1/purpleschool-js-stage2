const myArray = [
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 1, name: 'Вася' }
];

const myNewArray = new Set(myArray.map(el => el.id).map(id => myArray.find(item => item.id === id)));

console.log(myNewArray);

const user1 = {
  name: 'Vasia',
  birthday: '02/19/2025'
}

function isBirthday(user) {
  const birthdayDate = new Date(user.birthday);
  const now = new Date();

  if (birthdayDate.getMonth() !== now.getMonth()) {
    return false;
  }
  if (birthdayDate.getDate() !== now.getDate()) {
    return false;
  }
  return true;
}
console.log(isBirthday(user1));


const date = new Date();

const options1 = {
  hour: 'numeric',
  minute: 'numeric'
}
const options2 = {
  hour: 'numeric',
  minute: 'numeric',
  month: 'long',
  weekday: 'short'
}

console.log(new Intl.DateTimeFormat('ru-RU').format(date));
console.log(new Intl.DateTimeFormat('ru-RU', options1).format(date));
console.log(new Intl.DateTimeFormat('en-US', options2).format(date));
console.log(new Intl.DateTimeFormat('ru-RU', options2).format(date));