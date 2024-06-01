import React, { useContext } from "react";
import { UserInfoContext } from "../contexts/UserInfoContext";
import Bmi from "./Bmi";
import Weight from "./Weight";

const Dashboard = () => {
  const { userInfo } = useContext(UserInfoContext);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-1/2 max-w-2xl">
        {userInfo ? (
          <div className="flex flex-col items-center">
            <Bmi userInfo={userInfo} />
            <Weight userInfo={userInfo} />
          </div>
        ) : (
          <p>No user info provided.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
