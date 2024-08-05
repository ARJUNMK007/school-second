import { useNavigate } from "react-router-dom";
import { SearchIcon } from "../assets/svg";

export const Teachers = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/teachers/add-new-teacher");
  };

  const teachers = [
    { name: "Dimitri vega", sub: "mathematic" },
    { name: "Tom Housenberg", sub: "mathematic" },
    { name: "Dana Benvista", sub: "mathematic" },
    { name: "Salvandore Morbou", sub: "mathematic" },
    { name: "Dimitri vega", sub: "mathematic" },
    { name: "Dimitri vega", sub: "mathematic" },
    { name: "Dimitri vega", sub: "mathematic" },
    { name: "Dimitri vega", sub: "mathematic" },
    { name: "Tom Housenberg", sub: "mathematic" },
    { name: "Dana Benvista", sub: "mathematic" },
    { name: "Salvandore Morbou", sub: "mathematic" },
    { name: "Dimitri vega", sub: "mathematic" },
  ];

  return (
    <div className="mb-4">
      <div>
        <h1 className="font-bold text-[blue] text-[23px]">Teachers</h1>
        <div className="flex mt-[5%] items-center justify-between">
          <div className="relative">
            <input
              placeholder="search here..."
              className="border-none focus:outline-none h-10 pr-10 rounded-3xl indent-[45px]"
            />
            <span className="absolute top-[15px] left-[13px]">
              <SearchIcon className="h-[15px] w-[15px]" />
            </span>
          </div>
          <div className="flex gap-2 text-nowrap">
            <button className="p-2 px-3 border-[2px] border-[blue] text-[blue] rounded-full">Present</button>
            <button className="px-3 py-1 bg-[blue] text-[white] rounded-full" onClick={handleNavigate}>
              <span className="pr-3">+</span>New Teacher
            </button>
          </div>
        </div>
        <div className="mt-[5%] text-center grid grid-cols-1 md:grid-cols-4 gap-4">
          {teachers.map((teacher, index) => (
            <div key={index} className="bg-[white] p-5 py-10 flex flex-col items-center relative rounded-lg">
              <span className="text-[grey] text-[19px] font-bold absolute top-0 right-3">...</span>
              <img src="" alt="" className="h-[40px] w-[40px] p-3 rounded-full bg-[#1f1059]" />
              <h2 className="mt-4 text-[blue] text-[19px] font-semibold">{teacher.name}</h2>
              <p>{teacher.sub}</p>
              <div className="flex justify-center items-center gap-4">
                <h4>phone</h4>
                <h6>mail</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
