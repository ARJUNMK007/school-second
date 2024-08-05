import { SearchIcon } from "../assets/svg";

const Homework = () => {
  return (
    <div className="p-2">
      <h1 className="text-[darkblue] text-[23px] font-bold">Homework</h1>
      <div className="flex justify-between items-center mt-[3%]">
        <div className="relative">
          <input
            placeholder="search here..."
            className="border-none focus:outline-none h-10 pr-10 rounded-3xl indent-[45px]"
          />
          <span className="absolute top-[15px] left-[13px]">
            <SearchIcon className="h-[15px] w-[15px]" />
          </span>
        </div>
        <div className="flex gap-4">
          <button className="border-[2px] border-[darkblue] p-1 text-[darkblue] px-4 rounded-2xl">class VII</button>
          <button className="border-[2px] bg-[darkblue] p-1 text-[white] px-4 rounded-2xl">+ New Homework</button>
        </div>
      </div>
      <div className="mt-[5%] bg-white rounded-lg p-2">Data Table</div>
    </div>
  );
};

export default Homework;
