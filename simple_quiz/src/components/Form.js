import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <div>
        <label htmlFor="">Name: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">Years of Experience in Tech Field: </label>
        <select
          name="yearsOfExperience"
          id="yearsOfExperience"
          value={yearsOfExperience}
          onChange={(e) => setYearsOfExperience(e.target.value)}
        >
          <option value="0-1">0-1</option>
          <option value="1-2">1-2</option>
          <option value="2-3">2-3</option>
          <option value="3-4">3-4</option>
          <option value="4-5">4-5</option>
          <option value="5+">5+</option>
        </select>
      </div>
      <input type="submit" value="Submit" onClick={(e) => submitForm(e)} />
    </section>
  );
};

export default Form;
