export default class Form {
  constructor(holder, retrivedData, firebaseRef) {
    this.holder = holder;
    this.firebaseRef = firebaseRef;
    this.emails = retrivedData;
    this.input_field = "";
    this.form = "";
    this.createForm();
    this.events();
  }
  createForm() {
    let html = ` <form class="animate faceInDown" id="form">
      <div>
        <p> </p>
        <input type="text" name="email" id="in_email" required placeholder="Your e-mail address">
      </div>
      <button> Sign up</button>
    </form>
    `;
    this.holder.innerHTML = "";
    this.holder.insertAdjacentHTML("beforeEnd", html);
    this.input_field = document.getElementById("in_email");
    this.input_field.focus();
  }
  events() {
    this.form = this.holder.querySelector("form");
    this.form.addEventListener("submit", this.handleForm.bind(this));
  }
  handleForm(e) {
    e.preventDefault();
    if (this.validate(this.input_field.value)) {
      if (this.inArray(this.input_field.value, this.emails)) {
        console.log("email is already exised");
      } else {
        this.emails.push(this.input_field.value);
        this.firebaseRef.set(this.emails);
        console.log("email is sent");
      }
    } else {
      this.form.classList.add("error");
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
}
