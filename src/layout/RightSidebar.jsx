import  { useState } from "react";
import { ArrowIcon, NotificationIcon } from "../assets/svg";

const RightSidebar = () => {
  const [open, setOpen] = useState(true);

  const students = [
    { name: "Samantha William", class: "VII A", mail: "true" },
    { name: "Samantha William", class: "VII A", mail: "true" },
    { name: "Samantha William", class: "VII A", mail: "true" },
    { name: "Samantha William", class: "VII A", mail: "true" },
    { name: "Samantha William", class: "VII A", mail: "true" },
    { name: "Samantha William", class: "VII A", mail: "true" },
  ];
  const messages = [
    { name: "hello", msg: "hi hello hei hello", time: "12:45 PM" },
    { name: "hello", msg: "hi hello hei hello", time: "12:45 PM" },
    { name: "hello", msg: "hi hello hei hello", time: "12:45 PM" },
    { name: "hello", msg: "hi hello hei hello", time: "12:45 PM" },
  ];
  return (
    <div className="relative bg-white h-[100vh] overflow-y-auto hide-scrollbar ">
      <div title="sidebar">
        <ArrowIcon
        
          onClick={() => setOpen(!open)}
          className="fixed cursor-pointer top-0 right-[10px] rotate-[90deg]  border-[#421562] border-2 rounded-full"
        />
      </div>
      <div className={`${open ? "w-[320px]" : "hidden"}`}>
        <div className="flex gap-5 items-center justify-end pr-[10%] pt-6">
          <NotificationIcon className="h-9 w-9 cursor-pointer" />
          <NotificationIcon className="h-9 w-9  cursor-pointer" />
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-[#421562] font-semibold text-[18px]">Nabila A.</span>
              <span className="font-medium text-[grey] text-[13px]">Admin</span>
            </div>
            <div className="h-[44px] w-[44px] bg-[skyblue] rounded-full cursor-pointer"></div>
          </div>
        </div>
        <div className="pt-9 pl-4">
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <h1 className="text-[24px] font-bold text-blue-900">Recent Students</h1>{" "}
              <span className="text-[grey] font-medium text-[13px]">You have 456 students</span>
            </div>
            <span className=" h-[34px] w-[34px] text-white text-[20px] shadow-lg cursor-pointer text-center bg-blue-900 rounded-full">
              +
            </span>
          </div>
          <ul className="pt-4">
            {students.map((student, index) => (
              <li key={index} className="flex items-center gap-4 p-3 pl-0">
                <div className="h-[44px] w-[44px] bg-[skyblue] rounded-full cursor-pointer"></div>
                <div>
                  <span className="font-semibold text-[#12125e] text-[19px]">{student.name}</span> <br />
                  <span className="font-semibold text-[#89898b] text-[13px]">Class {student.class}</span>
                </div>
                <div>
                  <NotificationIcon className="h-7 w-7" />
                </div>
              </li>
            ))}
            <div className="w-full flex justify-center pt-3">
              <button className="p-3 px-7 rounded-[28px] text-[#241154] text-[19px] font-semibold bg-[#add9ea]  ">
                View More
              </button>
            </div>
          </ul>
        </div>
        <div className="pt-5 pl-4">
          <div>
            <h2 className="text-[24px] font-bold text-blue-900">Message</h2>
            <ul>
              {messages.map((message, index) => (
                <li key={index} className="flex gap-4 p-3 pl-0 items-center">
                  <div className="h-[44px] w-[44px] bg-[skyblue] rounded-full cursor-pointer"></div>
                  <div>
                    <span className="font-semibold text-[#12125e] text-[19px]">{message.name}</span> <br />
                    <span className="font-semibold text-[#89898b] text-[13px]">Class {message.msg}</span>
                  </div>
                  <div className="text-[#89898b] text-[11px]">{message.time}</div>
                </li>
              ))}
              <div className="w-full flex justify-center pt-3">
                <button className="p-3 px-7 rounded-[28px] text-[#241154] text-[19px] font-semibold bg-[#add9ea]  ">
                  View More
                </button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
