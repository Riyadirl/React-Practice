import React, { useState } from 'react';

const ContactForm = () => {
  // State to store form data, initially all fields are empty.
  let [formObj, setFormObj] = useState({ fName: '', lName: '', city: '', gender: '' });

  // A function to update the formObj state when any input value changes.
  const inputOnChange = (property, value) => {
    setFormObj(prevObj => ({
      ...prevObj,
      [property]: value
    }));
  };

  // A function to handle form submission when the submit button is clicked.
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior.

    // Display an alert with the JSON representation of the formObj.
    // This is just for demonstration purposes; you might remove this in a real application.
    alert(JSON.stringify(formObj));

    // Perform any actions you want with the formObj here, e.g., submitting data to the server.
    // You can make an API call to send the form data to the server or perform any other operations.
  };

  return (
    <div className="container">
      {/* Form element with onSubmit attribute set to the handleSubmit function */}
      <form onSubmit={handleSubmit}>
        {/* Input for First Name */}
        <input
          onChange={(e) => { inputOnChange("fName", e.target.value) }}
          value={formObj.fName}
          placeholder="First Name"
        /><br /><br />

        {/* Input for Last Name */}
        <input
          onChange={(e) => { inputOnChange("lName", e.target.value) }}
          value={formObj.lName}
          placeholder="Last Name"
        /><br /><br />

        {/* Select input for City */}
        <select onChange={(e) => { inputOnChange("city", e.target.value) }} value={formObj.city}>
          <option value="">Choose City</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Rangpur">Rangpur</option>
        </select>
        <br /><br />

        {/* Radio buttons for Gender */}
        <input
          onChange={(e) => { inputOnChange("gender", e.target.value) }}
          checked={formObj.gender === "Male"}
          type="radio"
          name="gender"
          value="Male"
        /> Male
        <input
          onChange={(e) => { inputOnChange("gender", e.target.value) }}
          checked={formObj.gender === "Female"}
          type="radio"
          name="gender"
          value="Female"
        /> Female
        <br /><br />

        {/* Submit button to submit the form */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
