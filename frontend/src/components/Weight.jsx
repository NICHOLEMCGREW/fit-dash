import React from "react";

const Weight = ({ userInfo }) => {
  return (
    <div className="mb-4">
      <h2 className="text-2xl">Weight: {userInfo.weight} lbs</h2>
    </div>
  );
};

export default Weight;
