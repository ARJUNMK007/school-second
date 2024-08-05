import { SearchIcon } from "../assets/svg";

export const Feedback = () => {
  const groups = [
    {
      class: "Class VII-A",
      color: "orange",
    },
    {
      class: "Class VII-A",
      color: "darkblue",
    },
    {
      class: "Class VII-A",
      color: "green",
    },
  ];
  const chats = [
    { name: "Samantha William", time: "12:54" },
    { name: "Tony Soap", time: "12:54" },
    { name: "Karen Hope", time: "12:54" },
  ];
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-[23px] font-[700] text-[blue] ">Chat</h1>
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
      <div className="mt-3 flex  bg-[white] rounded-lg shadow-lg">
        <div className="md:w-2/5 flex flex-col border-r-[1px] border-[#8080805c] p-4">
          <h2 className="text-[blue] text-[16px] font-semibold">FeedBack</h2>
          <div className="relative mt-4  border-[2px] border-[#5e5e60] rounded-3xl">
            <input
              placeholder="search here..."
              className="border-none focus:outline-none h-10 pr-10 rounded-3xl indent-[45px]"
            />
            <span className="absolute top-[15px] left-[13px]">
              <SearchIcon className="h-[15px] w-[15px]" />
            </span>
          </div>
          <div className="mt-[8%]">
            <h4 className="text-[16px] font-medium text-[grey] ">groups</h4>
            {groups.map((group, index) => (
              <>
                <div key={index} className="flex gap-4 items-center justify-between p-3 mb-2">
                  <div className="flex gap-4">
                    <div className="h-[40px] w-[40px]  rounded-full " style={{ backgroundColor: group.color }}></div>
                    <div>
                      <h3 className="text-[16px] font-[600] text-[darkblue]">Class History VII-A</h3>
                      <p className="text-[grey] text-[13px] font-[500]">content goes here ...</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[grey] text-[13px] font-[500]">time</p>
                    <div className=" bg-[orange] rounded-full h-6 w-6 text-center text-[white]">2</div>
                  </div>
                </div>
                <hr />
              </>
            ))}
          </div>
          <div className="mt-[8%]">
            <h4 className="text-[16px] font-medium text-[grey] ">Chats</h4>
            {chats.map((chat, index) => (
              <>
                <div key={index} className="flex gap-4 items-center justify-between p-3 mb-2">
                  <div className="flex gap-4">
                    <div className="h-[40px] w-[40px] bg-[darkblue] rounded-full "></div>
                    <div>
                      <h3 className="text-[16px] font-[600] text-[darkblue]">{chat.name}</h3>
                      <p className="text-[grey] text-[13px] font-[500]">content goes here ...</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[grey] text-[13px] font-[500]">{chat.time}</p>
                    <div className=" bg-[orange] rounded-full h-6 w-6 text-center text-[white]">2</div>
                  </div>
                </div>
                <hr />
              </>
            ))}
            <div className="w-full flex justify-center pt-3">
              <button className="p-3 px-7 w-full rounded-[28px] text-[#241154] text-[19px] font-semibold bg-[#4a85c082]  ">
                View More
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-3/4">
          <div className="flex p-4 justify-between">
            <div className=" w-full flex  items-center gap-6  ">
              <div className="bg-[purple] h-[40px] w-[40px] rounded-full"></div>
              <div>
                <h2 className="text-[19px] font-bold text-[darkblue]">Samantha William</h2>
                <p>
                  <span className=" px-[10px] mr-2 rounded-full  bg-[#45e745]"></span> Online
                </p>
              </div>
            </div>
            <div>icons</div>
          </div>
          <hr />
          <div className="h-[65vh]"></div>
          <hr />
          <div className="p-4 relative ">
            <input
              className="rounded-2xl border-[1px] h-[44px] indent-4 border-[grey] w-full "
              placeholder="Write your message here ..."
            />
            <div className="absolute right-5 top-[22px] flex gap-4 items-center">
              <p>Ħ</p>
              <button className="p-1 bg-[darkblue] text-[white] rounded-2xl px-4 ">send &nbsp; ⟫</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
