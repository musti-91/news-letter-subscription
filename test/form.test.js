import "../src/components/Form";
import assert from "assert";
import Form from "../src/components/Form";
require("jsdom-global")(`<div id="test"></div>`, {});

describe("Form class", function() {
  const arr = [];
  const firebaseRef = "";
  const test = new Form(document.getElementById("test"), arr, firebaseRef);
  describe("check true", function() {
    it("return true when vlaue is passed", function() {
      assert.equal(test.validate("some@read.be"), true);
    });
  });
});
