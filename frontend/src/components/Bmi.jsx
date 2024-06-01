import React from "react";

const Bmi = ({ userInfo }) => {
  const { weight, feet, inches } = userInfo;
  const heightInInches = parseInt(feet) * 12 + parseInt(inches);
  const bmi = ((weight / (heightInInches * heightInInches)) * 703).toFixed(2);

  return (
    <div className="mb-4">
      <h2 className="text-2xl">BMI: {bmi}</h2>
    </div>
  );
};

export default Bmi;
