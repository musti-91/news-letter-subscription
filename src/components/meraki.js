export let meraki = meraki ? meraki : {};

meraki.api = (function(obj) {
  let errors = {
    empty: "The provided input seems to be empty",
    incorrectEmail: "The provided input seems to be malformed"
  };
  return {
    validate: {
      email: function(value) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(value);
      }
      // input: function(value) {
      //   if (value === "") {
      //     return errors.empty;
      //   }
      //   return errors.incorrectEmail;
      // }
    }
    // random: {
    //   color: function() {
    //     const R = Math.floor(Math.random() * 256);
    //     const G = Math.floor(Math.random() * 256);
    //     const B = Math.floor(Math.random() * 256);
    //     return `rgb(${R}, ${G}, ${B})`;
    //   },
    //   number: function(limit) {
    //     return Math.floor(Math.random() * limit);
    //   }
    // }
  };
})(meraki);
