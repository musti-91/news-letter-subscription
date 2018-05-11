const arr = ["item1", "item2", "item3", "item4", "item5"];
module.exports = {
  all: arr,
  random: getRandom(arr)
};
function getRandom(array) {
  array.forEach(element => {
    return element;
  });
}
