const validateYears = (yourAge) => {
  const nowDate = new Date();
  const birthDay = new Date(yourAge);
  const agePoint = nowDate.getFullYear() - birthDay.getFullYear();

  if (agePoint > 14) {
    return true;
  } else if (agePoint === 14) {
    const monthPoint = nowDate.getMonth() - birthDay.getMonth();
    if (monthPoint > 0) {
      return true;
    } else if (monthPoint === 0) {
      return nowDate.getDate() >= birthDay.getDate();
    }
  }
  return false;
}

console.log(validateYears('2022-01-01'));