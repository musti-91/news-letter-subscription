import { meraki } from "./components/meraki";
import { config } from "./components/config";
import Form from "./components/Form";
import firebaseapp from "firebase/app";
import "firebase/database";

firebaseapp.initializeApp(config);
export let emails = [];
const firebaseappRef = firebaseapp.database().ref("emails");
firebaseappRef.on("value", snapshot => {
  snapshot.forEach(email => {
    emails.push(email.val());
  });
});
const app = document.getElementById("app");
new Form(app, emails, firebaseappRef);
