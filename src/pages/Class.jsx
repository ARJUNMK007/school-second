import { SearchIcon } from "../assets/svg";

export const Class = () => {
  const lessons = [
    { title: "Basic Algorithm", sub: "Algorithm", date: "March 20, 2021", time: "09:00 - 10:00 AM",color:"black" },
    { title: "Basic Algorithm", sub: "Algorithm", date: "March 20, 2021", time: "09:00 - 10:00 AM",color:"darkblue" },
    { title: "Basic Algorithm", sub: "Algorithm", date: "March 20, 2021", time: "09:00 - 10:00 AM",color:"yellow" },
    { title: "Basic Algorithm", sub: "Algorithm", date: "March 20, 2021", time: "09:00 - 10:00 AM",color:"orange" },
    
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-[23px] font-[700] text-[blue] ">Events</h1>
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
      <div className="flex w-full mt-[3%]  ">
        <div className="w-full">
          <div className="flex  justify-between p-4  h-[80vh] rounded-lg shadow-lg bg-white">
            <h2>VII-STD</h2>
            <div className="space-x-4">
              <button className="border-[2px] border-[blue] p-1 px-2 rounded-2xl ">HOMEWORK</button>
              <button className="bg-[blue] text-[white] p-1 px-2 rounded-2xl  ">New Homework</button>
            </div>
          </div>
        </div>
        <div className="w-[40%] px-4">
          <div className="rounded-lg p-4 py-6 bg-white ">
            <h3 className="text-[16px] font-semibold text-[darkblue]  ">Upcoming title of Lessons</h3>
            <p className="text-[13px] text-[grey] font-normal   ">Thursday, 10th April , 2021</p>
          </div>
          <div className="mt-[20px]">
            {lessons.map((lesson, index) => (
              <div
                key={index}
                className={`bg-[white] p-2 rounded-lg border-l-[15px] mb-2`}
                style={{ borderColor: lesson.color }}
              >
                <h3 className="text-[16px] text-[darkblue] font-[500]  ">{lesson.title}</h3>
                <p className="text-[13px] font-normal text-[grey]">{lesson.sub}</p>
                <div className="flex items-center justify-between mt-2">
                  <div className="">
                    <h4 className="text-[grey] text-[13px]">{lesson.date}</h4>
                    <h4 className="text-[grey] text-[13px]">{lesson.time}</h4>
                  </div>
                  <div className="p-2 h-[40px] w-[40px] bg-[purple] rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center pt-3">
            <button className="p-2 w-full px-7 rounded-[28px] text-[#241154] text-[19px] font-semibold bg-[#add9ea]  ">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
