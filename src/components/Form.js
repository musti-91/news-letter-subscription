import { meraki } from "./meraki";

export default class Form {
  constructor(holder, retrivedData, firebaseRef) {
    this.holder = holder;
    this.firebaseRef = firebaseRef;
    this.emails = retrivedData;
    this.input_field = "";
    this.form = "";
    this.error_text = "";
    this.createForm();
    this.events();
  }
  createForm() {
    let html = ` <form id="form">
      <div>
        <p></p>
        <input type="text" name="email" id="in_email" required placeholder="Your e-mail address" autocomplete="off">
      </div>
      <button> Sign up</button>
      <p class="error_text" id="error_text"></p>
    </form>
    `;
    this.holder.innerHTML = "";
    this.holder.insertAdjacentHTML("beforeEnd", html);
    this.input_field = document.getElementById("in_email");
    this.input_field.focus();
    this.error_text = document.getElementById("error_text");
  }
  events() {
    this.form = this.holder.querySelector("form");
    this.form.addEventListener("submit", this.handleForm.bind(this));
    this.input_field.addEventListener("input", () => {
      this.form.classList.remove("error");
      this.holder.style.height = "70px";
      this.error_text.classList.remove("showError");
    });
  }
  handleForm(e) {
    e.preventDefault();
    if (this.validate(this.input_field.value)) {
      if (this.inArray(this.input_field.value, this.emails)) {
        this.showError(this.error_text, "email is already exised");
      } else {
        this.firebaseRef.push(this.input_field.value);
        this.input_field.value = "";
        this.form.style.display = "none";
        this.holder.classList.add("success");
        setTimeout(() => {
          this.holder.classList.remove("success");
          this.form.style.display = "flex";
        }, 1700);
        console.log("email had been sent");
      }
    } else {
      this.showError(this.error_text, "insert a valid email");
      document.querySelector("button").classList.add("animated");
    }
  }
  validate(value) {
    if (meraki.api.validate.email(value)) {
      return true;
    } else {
      return false;
    }
  }
  inArray(needle, heystack) {
    for (let i = 0; i < heystack.length; i++) {
      if (heystack[i] == needle) {
        return true;
      }
    }
    return false;
  }
  showError(errorTextHolder, errMsg) {
    errorTextHolder.innerHTML = errMsg;
    errorTextHolder.classList.add("showError");
    if (errorTextHolder.classList.contains("showError")) {
      this.holder.style.height = "100px";
    } else {
      this.holder.style.height = "70px";
    }
  }
}
