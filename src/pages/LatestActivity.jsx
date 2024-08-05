import { SearchIcon } from "../assets/svg";
import Stepper from "../atoms/stepper/Stepper";


export const LatestActivity = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-[23px] font-[700] text-[blue] ">Notifiaction & Latest Activity</h1>
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
      <div className="mt-[5%] bg-[white] rounded-lg shadow-lg p-4 ">
        <div>
          <h2 className="text-[darkblue] text-[16px] font-bold ">Today</h2>
          <div className="mt-[3%]">
            <Stepper />
          </div>
        </div>
        <div className="mt-[5%] ">
          <h2 className="text-[darkblue] text-[16px] font-bold ">YesterDay</h2>
          <div className="mt-[3%]">
            <Stepper />
          </div>
        </div>
      </div>
    </div>
  );
}
