const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const checkStringLength = (string, maxLength) => {
  if (string.length <= maxLength) {
    return true;
  }

  return false;
};

getRandomNumber(2,10);

checkStringLength('checkStringLength', 140);
