var arr = require("../index");
var expect = require("chai").expect;

describe("index", function() {
  describe("get arr", function() {
    it("should return all items in array", function() {
      expect(arr.all).to.satisfy(isArray);
      function isArray(array) {
        return array.every(function(item) {
          return typeof item === "string";
        });
      }
    });
  });
});
