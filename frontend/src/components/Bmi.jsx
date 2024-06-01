import React, { useState } from 'react';

const Bmi = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [bmi, setBmi] = useState("");
  const [msg, setMsg] = useState("");
  const [msgColor, setMsgColor] = useState("");

  const reload = () => {
    window.location.reload();
  };

  const handleCalculations = async (e) => {
    e.preventDefault();

    try {
      if (weight === "" || feet === "" || inches === "") {
        throw new Error(`Please enter a valid number`);
      } else {
        const response = await fetch('/api/bmi/calculate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ weight: parseInt(weight), feet: parseInt(feet), inches: parseInt(inches) })
        });

        if (!response.ok) {
          throw new Error('Failed to calculate BMI');
        }

        const data = await response.json();
        setBmi(data.bmi.toFixed(2));

        // Determine BMI range and set message and color
        let color = "";
        if (data.bmi < 18.5) {
          setMsg(`You're in the underweight range`);
          color = "green";
        } else if (data.bmi >= 18.5 && data.bmi < 25) {
          setMsg(`You're in the optimum range`);
          color = "green";
        } else if (data.bmi >= 25 && data.bmi < 30) {
          setMsg(`You're in the overweight range`);
          color = "yellow";
        } else if (data.bmi >= 30 && data.bmi < 35) {
          setMsg(`You're in the Class I obesity range`);
          color = "orange";
        } else if (data.bmi >= 35 && data.bmi < 40) {
          setMsg(`You're in the Class II obesity range`);
          color = "red";
        } else {
          setMsg(`You're in the Class III obesity range`);
          color = "red";
        }

        // Set color for message
        setMsgColor(color);
      }
    } catch (error) {
      // Handle errors
      console.error('Error calculating BMI:', error.message);
      setBmi('');
      setMsg(error.message);
      setMsgColor("red");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h1 className="text-3xl mb-6 text-center">BMI Calculator</h1>

        <form onSubmit={handleCalculations}>
          <div className="mb-4">
            <label className="block mb-1">Age:</label>
            <input
              className="w-full py-2 px-3 border rounded focus:outline-none focus:border-blue-500"
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Weight (lbs):</label>
            <input
              className="w-full py-2 px-3 border rounded focus:outline-none focus:border-blue-500"
              type="number"
              placeholder="Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="mb-4 flex items-center">
            <label className="mr-2">Height (ft/in):</label>
            <input
              className="w-16 py-2 px-3 border rounded focus:outline-none focus:border-blue-500"
              type="number"
              placeholder="Feet"
              value={feet}
              onChange={(e) => setFeet(e.target.value)}
            />
            <span className="mx-2">ft</span>
            <input
              className="w-16 py-2 px-3 border rounded focus:outline-none focus:border-blue-500"
              type="number"
              placeholder="Inches"
              value={inches}
              onChange={(e) => setInches(e.target.value)}
            />
            <span className="ml-2">in</span>
          </div>

          <div className="mb-6 flex justify-center">
            <button className="btn mr-4 bg-blue-500 hover:bg-blue-600 text-white" type="submit">
              Calculate
            </button>
            <button className="btn btn-reload bg-gray-300 hover:bg-gray-400 text-gray-800" type="button" onClick={reload}>
              Reset
            </button>
          </div>

          <div className="result text-center">
            <h3>Your BMI is: {bmi}</h3>
            <p className={`p-msg text-${msgColor}`}>{msg}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Bmi;
