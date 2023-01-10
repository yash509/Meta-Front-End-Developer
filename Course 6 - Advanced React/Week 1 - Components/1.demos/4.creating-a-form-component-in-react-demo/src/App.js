import { useState } from "react";
import './App.css';

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default HTML form behavior
    setName(""); // Clear the input fields after the form is submitted

    console.log('Form submitted!');
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="Field">
            <label htmlFor="name">Name:</label>
            <input 
              id="name"
              type="text" 
              placeholder="Name" 
              name="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button disabled={!name} type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
