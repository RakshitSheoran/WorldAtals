import { useState } from "react";

function Contact() {
  const [state, setState] = useState({ email: "", message: "", username: "" });

  function formHandler(formData) {
    const Data = Object.fromEntries(formData.entries());
    setState(() => Data);
    console.log(Data);
  }
  return (
    <>
      return (
      <section className="section-contact">
        <h2 className="container-title">Contact Us</h2>

        <div className="contact-wrapper container">
          <form action={formHandler}>
            <input
              type="text"
              className="form-control"
              placeholder="enter your name"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              className="form-control"
              placeholder="Enter you email"
              name="email"
              required
              autoComplete="off"
            />

            <textarea
              className="form-control"
              rows="10"
              placeholder="Enter your message"
              name="message"
              required
              autoComplete="off"
            ></textarea>

            <button
              // onClick={formHandler}
              type="submit"
              className="contact-button"
              value="send"
            >
              Send
            </button>
          </form>
        </div>
      </section>
      );
    </>
  );
}
export default Contact;
