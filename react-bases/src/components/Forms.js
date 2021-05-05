import React, { useState } from "react";

/* export default function Form() {
  const [name, setName] = useState("");
  const [option, setOption] = useState("");
  const [language, setLanguage] = useState("");
  const [terms, setTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("The form has been submitted");
  };
  return (
    <>
      <h2>Forms</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        <p>Choice One</p>
        <input type="radio" id="1" name="option" value="1" onChange={(e) => setOption(e.target.value)} defaultChecked />
        <label htmlFor="1">1</label>
        <input type="radio" id="2" name="option" value="2" onChange={(e) => setOption(e.target.value)} />
        <label htmlFor="2">2</label>
        <input type="radio" id="3" name="option" value="3" onChange={(e) => setOption(e.target.value)} />
        <label htmlFor="3">3</label>
        <input type="radio" id="4" name="option" value="4" onChange={(e) => setOption(e.target.value)} />
        <label htmlFor="4">4</label>

        <p>Choice One Again</p>
        <select name="language" onChange={(e) => setLanguage(e.target.value)} defaultValue="fr">
          <option value="">---</option>
          <option value="es">Spanish</option>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="ja">Japanese</option>
        </select>

        <br />
        <label htmlFor="terms">I accept terms and conditions</label>
        <input type="checkbox" id="terms" name="terms" onChange={(e) => setTerms(e.target.checked)}></input>
        <br />
        <input type="submit"></input>
      </form>
    </>
  );
}*/

export default function Form() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("The form has been submitted");
  };
  return (
    <>
      <h2>Forms</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={form.name} onChange={handleChange} />
        <p>Choice One</p>
        <input type="radio" id="1" name="option" value="1" onChange={handleChange} defaultChecked />
        <label htmlFor="1">1</label>
        <input type="radio" id="2" name="option" value="2" onChange={handleChange} />
        <label htmlFor="2">2</label>
        <input type="radio" id="3" name="option" value="3" onChange={handleChange} />
        <label htmlFor="3">3</label>
        <input type="radio" id="4" name="option" value="4" onChange={handleChange} />
        <label htmlFor="4">4</label>

        <p>Choice One Again</p>
        <select name="language" onChange={handleChange} defaultValue="fr">
          <option value="">---</option>
          <option value="es">Spanish</option>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="ja">Japanese</option>
        </select>

        <br />
        <label htmlFor="terms">I accept terms and conditions</label>
        <input type="checkbox" id="terms" name="terms" onChange={handleChecked}></input>
        <br />
        <input type="submit"></input>
      </form>
    </>
  );
}
