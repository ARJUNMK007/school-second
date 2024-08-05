import { useNavigate } from "react-router-dom";
import { SearchIcon } from "../assets/svg";
import { DataTable } from "../atoms";


export const Students = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/students/add-new-student");
  };
  

  return (
    <div>
      <div className="">
        <div className="text-[#121258] text-[23px] font-bold">Students</div>
      </div>
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
          <button className="  p-2 border-[2px] border-[blue] text-[blue] rounded-full">class VII</button>
          <button className="px-3 py-1  bg-[blue] text-[white] rounded-full" onClick={handleNavigation}>
            <span className="pr-3">+</span>New Student
          </button>
        </div>
      </div>

      <div className="mt-[5%] bg-[white] h-[80vh] rounded-lg">
        <DataTable />
      </div>
    </div>
  );
};
