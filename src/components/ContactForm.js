import react from "react";
import "../styles/ContactForm.CSS";

function ContactForm() {
  return (
    <div>
      <div className="form-container">
        <form className="contact-form">
          <h2>CONTACT</h2>
          <input type="text" id="name" placeholder="Full Name"></input>
          <br></br>
          <input type="email" id="email" placeholder="Email"></input>
          <br></br>
          <input type="test" id="subject" placeholder="Subject"></input>
          <br></br>
          <textarea
            className="text-area"
            id="message"
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <br></br>
          <input type="submit" class="submit" value="Send Message"></input>
        </form>
      </div>
    </div>
  );
}
