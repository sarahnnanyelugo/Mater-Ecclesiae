// import { useState } from "react";
// import ReactDOM from "react-dom/client";


import React, { useReducer, useState } from "react";
import ReactDOM from "react-dom/client";



const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

function MyForm() {
 const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000)
 };


  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };
  return (
    <div className="wrap">
      <h1>How About Them Apples</h1>
      {submitting && (
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}>
                <strong>{name}</strong>:{value.toString()}
              </li>
            ))}
          </ul>
        </div>
      )}
      {submitting && <div>Submtting Form...</div>}
      <form onSubmit={handleSubmit}>
        {" "}
        <fieldset>
          <label>
            <p>Name</p>
            <input name="name" type="text" onChange={handleChange} value={formData.name || ''}/>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default MyForm;
