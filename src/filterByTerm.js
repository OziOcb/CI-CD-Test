const filterByTerm = (inputArr, searchTerm) => {
  if (!searchTerm) throw Error("searchTerm cannot be empty");
  if (!inputArr.length) throw Error("inputArr cannot be empty");

  const regex = new RegExp(searchTerm, "i");
  return inputArr.filter((item) => item.url.match(regex));
};

module.exports = filterByTerm;
