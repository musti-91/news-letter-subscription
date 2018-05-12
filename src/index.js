const arr = ["item1", "item2", "item3", "item4", "item5"];
var form = require("./components/Form");
module.exports = {
  all: arr,
  random: getRandom(arr)
};
function getRandom(array) {
  array.forEach(element => {
    return element;
  });
}
function con() {
  console.log("coverage");
}
