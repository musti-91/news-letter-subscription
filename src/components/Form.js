import { meraki } from "./meraki";

export default class Form {
  constructor(holder, retrivedData, firebaseRef) {
    this.holder = holder;
    this.firebaseRef = firebaseRef;
    this.emails = retrivedData;
    this.input_field = "";
    this.form = "";
    this.error_text = "";
    this.button = "";
    this.createForm();
    this.events();
  }
  createForm() {
    let html = ` <form id="form">
      <div>
        <p></p>
        <input type="text" name="email" id="in_email" placeholder="Your e-mail address" autocomplete="off">
      </div>
      <button class="animated zoomIn"> Sign up</button>
      <p class="error_text" id="error_text"></p>
    </form>
    `;
    this.holder.insertAdjacentHTML("beforeEnd", html);
    this.input_field = document.getElementById("in_email");
    this.input_field.focus();
    this.error_text = document.getElementById("error_text");
    this.button = document.querySelector("button");
    this.form = this.holder.querySelector("form");
  }
  events() {
    this.form.addEventListener("submit", this.handleForm.bind(this));
    this.input_field.addEventListener("input", () => {
      this.removeError();
    });
  }

  handleForm(e) {
    e.preventDefault();
    this.button.style.display = "none";
    this.input_field.parentElement.style.width = "100%";
    if (this.validate(this.input_field.value)) {
      if (this.emails.includes(this.input_field.value)) {
        this.showError(this.error_text, "email is already exised");
      } else {
        this.email_successed();
      }
    } else {
      this.showError(this.error_text, "insert a valid email");
    }
  }
  email_successed() {
    this.firebaseRef.push(this.input_field.value);
    this.input_field.value = "";
    this.form.style.display = "none";
    this.holder.classList.add("success");
    setTimeout(() => {
      this.removeError();
    }, 1700);
    this.input_field.focus();
  }
  removeError() {
    this.button.style.display = "block";
    this.form.style.display = "flex";
    this.holder.classList.remove("success");
    this.input_field.parentElement.style.width = "75%";
    this.form.classList.remove("error");
    this.holder.style.height = "70px";
    this.error_text.classList.remove("showError");
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
      this.form.classList.add("error");
    } else {
      this.holder.style.height = "70px";
      this.form.classList.remove("error");
    }
    this.input_field.focus();
  }
}
