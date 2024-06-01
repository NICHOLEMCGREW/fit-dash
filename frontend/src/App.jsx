import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserInfoProvider } from "./contexts/UserInfoContext";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import UserInfoForm from "./components/UserInfoForm";

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <UserInfoProvider>
      <Router>
        <Header openSidebar={openSidebar} />
        <div className="flex">
          <Sidebar openSidebarToggle={isSidebarOpen} OpenSidebar={openSidebar} />
          <div className="flex-1 p-4 bg-gray-900 text-white">
            <Routes>
              <Route path="/" element={<UserInfoForm />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </Router>
    </UserInfoProvider>
  );
};

export default App;
