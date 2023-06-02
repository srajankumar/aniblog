import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [desc, setdesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    async function postJSON(data) {
      try {
        const response = await fetch("http://localhost:3000/api/postcontact", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.text())
          .then((data) => {
            alert("Thanks for contacting us");
            setdesc("");
            setemail("");
            setname("");
            setphone("");
          });
      } catch (error) {
        console.error("Error:", error);
      }
    }

    const data = { name, phone, email, desc };
    postJSON(data);
  };

  const handleChange = (e) => {
    if (e.target.name == "phone") {
      setphone(e.target.value);
    } else if (e.target.name == "email") {
      setemail(e.target.value);
    } else if (e.target.name == "desc") {
      setdesc(e.target.value);
    } else if (e.target.name == "name") {
      setname(e.target.value);
    }
  };
  return (
    <div className="pt-28">
      <div className={styles.container}>
        <h1>Contact us</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.mb3}>
            <label for="name" className={styles.formlabel}>
              Name
            </label>
            <input
              value={name}
              onChange={handleChange}
              type="name"
              className="form-control"
              id="name"
              name="name"
              aria-describedby="emailHelp"
              required
            />
          </div>

          <div className={styles.mb3}>
            <label for="email" className={styles.formlabel}>
              Email
            </label>
            <input
              value={email}
              onChange={handleChange}
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              required
            />
          </div>

          <div className={styles.mb3}>
            <label for="phone" className={styles.formlabel}>
              Phone
            </label>
            <input
              value={phone}
              onChange={handleChange}
              type="phone"
              className="form-control"
              id="phone"
              name="phone"
              aria-describedby="emailHelp"
            />
          </div>

          <div className={styles.mb3}>
            <label for="description" className={styles.formlabel} id="phone">
              Description
            </label>
            <textarea
              value={desc}
              onChange={handleChange}
              className="form-control"
              placeholder="write your consern"
              id="desc"
              name="desc"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
