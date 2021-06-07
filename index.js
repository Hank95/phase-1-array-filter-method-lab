// Code your solution here
const findMatching = function (arr, str) {
  const match = arr.filter(
    (driver) => driver.toLowerCase() === str.toLowerCase()
  );
  return match;
};

const fuzzyMatch = function (arr, query) {
  return arr.filter(function (el) {
    return (
      el.toLowerCase().indexOf(query.toLowerCase()) !== -1 &&
      el.toLowerCase().indexOf(query.toLowerCase()) === 0
    );
  });
};

const matchName = function (arr, str) {
  const match = arr.filter(
    (driver) => driver.name.toLowerCase() === str.toLowerCase()
  );
  return match;
};
