import { SearchIcon } from "../assets/svg";
import { DataTable, MyCalendar } from "../atoms";
import { PerformanceChart } from "../atoms/chart";

export const Dashboard = () => {
 
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="text-[#121258] text-[23px] font-bold">Dashboard</div>
        <div className="relative">
          <input
            placeholder="search here..."
            className="border-none focus:outline-none h-10 pr-10 rounded-3xl indent-[45px]"
          />
          <span className="absolute top-[15px] left-[13px]">
            <SearchIcon className="h-[15px] w-[15px]" />
          </span>
        </div>
      </div>
      <div className="mt-[5%] flex items-center gap-[10%] bg-[white] p-6 rounded-2xl">
        <div className="flex items-center gap-4 text-center">
          <div className="h-[44px] w-[44px] bg-[#1a1770] rounded-full cursor-pointer"></div>
          <div>
            <p className="text-[grey] text-[13px] font-medium">Students</p>
            <p className="text-[#121258] font-bold text-[23px]">932</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-center">
          <div className="h-[44px] w-[44px] bg-[#db7d2a] rounded-full cursor-pointer"></div>
          <div>
            <p className="text-[grey] text-[13px] font-medium">Teachers</p>
            <p className="text-[#121258] font-bold text-[23px]">754</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-center">
          <div className="h-[44px] w-[44px] bg-[#d1d632] rounded-full cursor-pointer"></div>
          <div>
            <p className="text-[grey] text-[13px] font-medium">Class</p>
            <p className="text-[#121258] font-bold text-[23px]">I -XII</p>
          </div>
        </div>
      </div>
      <div className="mt-[5%] bg-[white] h-[100%] p-2 rounded-lg">
        <PerformanceChart performance="performance" />
      </div>
      <div className=" mt-[5%] flex w-full gap-4">
        <div className=" bg-[white] flex h-[400px] w-[50%] rounded-lg">
          <MyCalendar />
        </div>
        <div className=" bg-[white]   w-[50%]  rounded-lg">
          <PerformanceChart performance="finance" />
        </div>
      </div>
      <div className="mt-[5%] h-[60vh] bg-[white] rounded-lg">
        <DataTable />
      </div>
    </div>
  );
};
