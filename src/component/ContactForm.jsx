import React from 'react';

const ContactForm = () => {
  return (
    <div className="container">
      <form>
        <input placeholder="First Name" /><br />
        <input placeholder="Last Name" /><br />

        <select>
          <option value="">Choose City</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Rangpur">Rangpur</option>
        </select>
        <br />

        <input type="radio" name="gender" /> Male
        <input type="radio" name="gender" /> Female
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
