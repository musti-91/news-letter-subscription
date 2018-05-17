import { meraki } from "../src/components/meraki";
import assert from "assert";
require("jsdom-global")("test", {});

describe("meraki.api", function() {
  describe("validate()", function() {
    it("should return true when email is true", function() {
      assert.equal(meraki.api.validate.email("test@some.com"), true);
    });
    it("should return false when email is typed wrong", function() {
      assert.equal(meraki.api.validate.email("some.com"), false);
    });
  });
  // describe("color()", function() {
  //   const reg = /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
  //   it("should return true when rgb(xxx,xxx,xxx)", function() {
  //     assert.equal(reg.test(meraki.api.random.color()), true);
  //   });
  // });
});
