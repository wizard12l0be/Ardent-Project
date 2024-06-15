import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "../App.css";
// import "./Model.css";

function Model() {
  // Declare a state variable to store the input value
  const [inputValue, setInputValue] = useState('');

  // Declare a state variable to store the submitted value
  const [submittedValue, setSubmittedValue] = useState('');
  
  // Declare a state variable to store the result from the server
  const [result, setResult] = useState(null);

  // Handle the change event of the input field
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle the click event of the button
  const handleSubmit = async () => {
    // Trim the input value to remove leading and trailing whitespaces
    const trimmedInput = inputValue.trim();

    // Check if trimmed input is empty
    if (trimmedInput === '') {
      toast.error("Please enter symptoms before submitting.");
      return; // Exit early if input is empty
    }

    setSubmittedValue(trimmedInput);
    try {
      const response = await axios.post('http://localhost:4000/process', { input: trimmedInput });
      setResult(response.data);
      toast.success("Input processed successfully");
    } catch (error) {
      toast.error("Error processing input");
      console.error('Error:', error);
    }
  };

  return (
    <div id="Model_display">
      <h1 id="Model_prompt">Enter your symptoms</h1>
      <input
        id="Model_input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter symptoms like coughing, sneezing, asthma ..."
      />
      <button id="model_submitBtn" onClick={handleSubmit} disabled={!inputValue.trim()}>
        Submit
      </button>
      {result && (
        <div id="output_display">
          <h2 id="output_prompt">Our predictions is here..</h2>
          <p id="Output"> <span className="span">Disease:</span>{JSON.stringify(result['Disease'])}</p>
          <p id="Output">  <span className="span">Description :</span>{JSON.stringify(result['Description'])}</p>
          <p id="Output"> <span className="span">Precautions:</span>{result['Precautions'].join(', ')}</p>
          <p id="Output"> <span className="span">Medications:</span>{result['Medications'].join(', ')}</p>
          <p id="Output"> <span className="span">Diet: </span>{result['Diet'].join(', ')}</p>
          <p id="Output"> <span className="span">Workout: </span>{result['Workout'].join(', ')}</p>
        </div>
      )}
    </div>
  );
}

export default Model;
