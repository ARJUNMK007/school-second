import { SearchIcon } from "../assets/svg";
import { PerformanceChart } from "../atoms";

export const Finance = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-[23px] font-[700] text-[blue] ">Finance</h1>
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
      <div className="flex gap-6 w-full mt-[5%]">
        <div className="md:w-1/4 flex items-center gap-4 p-3 bg-[white] shadow-lg rounded-lg justify-evenly">
          <div className="h-[30px] w-[30px] rounded-full bg-[darkblue]"></div>
          <div className="flex flex-col">
            <p className="text-[grey] text-[11px] font-medium">Total Teachers</p>
            <h2 className="text-[19px] font-bold text-[darkblue]">932</h2>
            <p className="text-[13px] text-[grey] font-normal ">
              <span className="text-[green] font-medium text-[16px]">+10% </span>than last month
            </p>
          </div>
        </div>
        <div className="md:w-1/4 flex items-center gap-4 p-3 bg-[white] shadow-lg rounded-lg justify-evenly">
          <div className="h-[30px] w-[30px] rounded-full bg-[orange]"></div>
          <div className="flex flex-col">
            <p className="text-[grey] text-[11px] font-medium">Total Student</p>
            <h2 className="text-[19px] font-bold text-[darkblue]">754</h2>
            <p className="text-[13px] text-[grey] font-normal ">
              <span className="text-[red] font-medium text-[16px]">-0.5% </span>than last month
            </p>
          </div>
        </div>
        <div className="md:w-2/4 flex items-center gap-6 p-3 bg-[white] shadow-lg rounded-lg ">
          <div className="h-[30px] w-[30px] rounded-full bg-[brown]"></div>
          <div className="flex flex-col">
            <p className="text-[grey] text-[11px] font-medium">School Balance</p>
            <h2 className="text-[19px] font-bold text-[darkblue]">$123,456</h2>
            <p className="text-[13px] text-[grey] font-normal ">
              <span className="text-[green] font-medium text-[16px]">+23% </span>than last month
            </p>
          </div>
        </div>
      </div>
      <div className="mt-3 bg-[white] rounded-lg shadow-lg">
        <PerformanceChart performance="performance" />
      </div>
      <div className="flex gap-4 w-full mt-3">
        <div className="md:w-1/2 h-[50vh] bg-[white] rounded-lg shadow-xl">Table 1</div>
        <div className="md:w-1/2 h-[50vh] bg-[white] rounded-lg shadow-xl">Table 2</div>
      </div>
    </div>
  );
};
