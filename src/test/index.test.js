import { meraki } from "../components/meraki";
import firebase from "firebase";
import { config } from "../components/config";
var assert = require("assert");
describe("meraki.api", function() {
  function sendEmail(value) {
    if (meraki.api.validate.email(value)) {
      return true;
    } else {
      return false;
    }
  }
  describe("validate.email", function() {
    it("should return false,while email has not letter before @", function() {
      assert.ok(sendEmail("@test.me") !== true);
    });
    it("should return false, while email has not letter after @", function() {
      assert.ok(sendEmail("some_.@.me") !== true);
    });
    it("should return false, while email has not @", function() {
      assert.ok(sendEmail("read_test.me") !== true);
    });
    it("should return false, email has not .", function() {
      assert.ok(sendEmail("read._@testcom") !== true);
    });
  });
});
