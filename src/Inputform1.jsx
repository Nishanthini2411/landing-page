import { useState } from "react";
import axios from "axios";

function Inputform1() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name,
      id,
      email,
      mobile,
    };

    axios
      .post("http://localhost:5000/post3", payload)
      .then((res) => {
        console.log("Submitted:", res.data);
        alert("Form submitted successfully!");
      })
      .catch((error) => {
        console.log("Submission error:", error.response?.data?.error || error.message);
        const content = error.response?.data?.error || "";

        if (content.includes("Duplicate")) {
          alert("Duplicate found");
        } else {
          alert("An error occurred while submitting the form.");
        }
      });
  };

  return (
    <>
      <br />
      <br />
      <h1>INPUT FORM</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
          <br />

          <label>Id:</label>
          <input
            type="text"
            name="id"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
           
           />
          <br />
          <br />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <br />

          <label>Mobile No:</label>
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
          <br />
          <br />

          <button className="btn btn-info mt-2 bg-success">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Inputform1;
