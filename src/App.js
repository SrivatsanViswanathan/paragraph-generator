import React, { useState } from "react";
import text from "./data";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const edgeCases = (amount) => {
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    } else {
      amount = amount;
    }
    return amount;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    console.log(amount);
    edgeCases(amount);
    setText(data.slice(0, edgeCases(amount)));
  };

  return (
    <section className='section-center'>
      <h3>tied of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs :</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
