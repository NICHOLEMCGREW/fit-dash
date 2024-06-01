import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserInfoContext } from "../contexts/UserInfoContext";

const UserInfo = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");

  const { setUserInfo } = useContext(UserInfoContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInfo({ age, weight, feet, inches });
    navigate("/dashboard");
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-1/2 max-w-2xl">
        <h1 className="text-4xl mb-6 text-center">User Information</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 text-lg">Age:</label>
            <input
              className="w-full py-2 px-3 border rounded focus:outline-none focus:border-blue-500 text-lg"
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-lg">Weight (lbs):</label>
            <input
              className="w-full py-2 px-3 border rounded focus:outline-none focus:border-blue-500 text-lg"
              type="number"
              placeholder="Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="mb-4 flex items-center">
            <label className="mr-2 text-lg">Height (ft/in):</label>
            <input
              className="w-20 py-2 px-3 border rounded focus:outline-none focus:border-blue-500 text-lg"
              type="number"
              placeholder="Feet"
              value={feet}
              onChange={(e) => setFeet(e.target.value)}
            />
            <span className="mx-2 text-lg">ft</span>
            <input
              className="w-20 py-2 px-3 border rounded focus:outline-none focus:border-blue-500 text-lg"
              type="number"
              placeholder="Inches"
              value={inches}
              onChange={(e) => setInches(e.target.value)}
            />
            <span className="ml-2 text-lg">in</span>
          </div>

          <div className="mb-6 flex justify-center">
            <button className="mr-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-lg" type="submit">
              Submit
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded text-lg" type="button" onClick={reload}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserInfo;
