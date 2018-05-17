import "../src/components/Form";
import assert from "assert";
import Form from "../src/components/Form";
require("jsdom-global")(`<div id="test"></div>`, {});

describe("Form class", function() {
  const arr = [2, 3, 5, 7, 78, 1, 8, 8, , 1];
  const firebaseRef = "";
  const test = new Form(document.getElementById("test"), arr, firebaseRef);
  describe("Form.validate()", function() {
    it("return true when vlaue is passed", function() {
      assert.equal(test.validate("some@read.be"), true);
    });
    it("return false when email has no @", function() {
      assert.equal(test.validate("someread.be"), false);
    });
    it("return false when email has no . after @", function() {
      assert.equal(test.validate("some@readbe"), false);
    });
    it("return false when email is empty", function() {
      assert.equal(test.validate(""), false);
    });
    it("return false when email has no letters before @", function() {
      assert.equal(test.validate("@test.me"), false);
    });
  });
  describe("Form.inArray()", function() {
    it("should return true when value included", function() {
      assert.equal(test.inArray(3, arr), true);
    });
    it("should return false when value not included", function() {
      assert.equal(test.inArray(15, arr), false);
    });
  });
});
