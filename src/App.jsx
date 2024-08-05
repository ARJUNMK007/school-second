import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Class, Dashboard, Feedback, Finance, LatestActivity, Students, Teachers, User } from "./pages";
import Sidebar from "./layout/Sidebar";
import RightSidebar from "./layout/RightSidebar";
import { AddStudent, AddTeacher } from "./pages/section";
import Homework from "./pages/Homework";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="flex">
          <Sidebar />
          <div className="flex-grow overflow-y-auto p-4  bg-[#cde1ed5e]">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/students" element={<Students />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/class" element={<Class />} />
              <Route path="/homework" element={<Homework/>} />
              <Route path="/finance" element={<Finance />} />
              <Route path="/user" element={<User />} />
              <Route path="/feedback" element={<Feedback/>} />
              <Route path="/latestactivity" element={<LatestActivity/>}/>
              <Route path="/students/add-new-student" element={<AddStudent/>} />
              <Route path="/teachers/add-new-teacher" element={<AddTeacher/>} />
            </Routes>
          </div>
          <div className="h-screen">
            <RightSidebar/>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
