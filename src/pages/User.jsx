import { SearchIcon } from "../assets/svg";

export const User = () => {
  const stcontacts = [
    { name: "Samantha William", class: "VII" },
    { name: "Samantha William", class: "VII" },
    { name: "Samantha William", class: "VII" },
    { name: "Samantha William", class: "VII" },
  ];
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-[23px] font-[700] text-[blue] ">User Dashboard</h1>
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
      <div className="bg-[white] pb-[2%] rounded-lg">
        <div className="bg-[darkblue] h-[15vh] mt-[5%] rounded-lg relative">
          <div className="absolute bg-[skyblue] rounded-full  h-[90px] w-[90px] -bottom-4 left-4 border-[5px] border-[white]"></div>
          <div className="absolute bottom-0 right-[20%] h-[40px] w-[80px] rounded-t-full bg-[yellow]"></div>

          <div className="absolute bottom-0 right-[10%] h-[70px] w-[150px] rounded-t-full bg-[orange]"></div>
        </div>
        <div className="mt-[2%] px-[3%]">
          <div className="flex justify-end text-[gray] text-[23px] font-bold cursor-pointer">...</div>
          <div className="flex items-center justif-left gap-[15%]">
            <div>
              <h1 className="text-[29px] font-bold text-[darkblue] ">Nabila Azalea</h1>
              <h3 className="text-[gray] text-[19px] font-medium">Admin</h3>
              <h3 className="text-[gray] text-[16px] font-normal">Jarkanta, Indodesia</h3>
            </div>
            <div>
              <h3 className="text-[gray] text-[19px] font-medium">Phone</h3>
              <p className="text-[darkblue] text-[19px] font-semibold">+91 9500915939</p>
            </div>
            <div>
              <h3 className="text-[gray] text-[19px] font-medium">Email</h3>
              <p className="text-[darkblue] text-[19px] font-semibold">jordan@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[white] mt-[4%] rounded-lg p-[3%] ">
        <div className="flex justify-between items-center">
          <div className="">
            <h3 className="text-[darkblue] text-[23px] font-semibold">Students Contacts</h3>

            <p className="text-[gray] text-[16px] font-semibold">
              you have <span className="text-[darkblue]">741</span> contacts
            </p>
          </div>
          <div>
            <button className="p-2 px-4 border-[2px] border-[darkblue] rounded-2xl">Class VII</button>
          </div>
        </div>
        <div className="relative mt-4 ">
          <input
            placeholder="search here..."
            className="border-[1px] border-[gray] w-[75%] focus:outline-none h-10 pr-10 rounded-3xl indent-[45px]"
          />
          <span className="absolute top-[10px] left-[13px]">
            <SearchIcon className="h-[20px] w-[20px] text-[darkblue] stroke-[darkblue]" />
          </span>
        </div>
        <div className="flex flex-col gap-4 mt-[5%]">
          {stcontacts.map((cont, index) => (
            <div key={index} className="flex justify-between pr-[5%]">
              <div className="flex gap-6">
                <div className="h-[50px] w-[50px] rounded-full bg-[skyblue] "></div>
                <div>
                  <h3 className="text-[darkblue] text-[19px] font-semibold">{cont.name}</h3>
                  <h3 className="text-[gray] text-[13px] font-semibold">Class {cont.class} </h3>
                </div>
              </div>
              <div className="h-[40px] w-[40px] bg-[gray] hover:bg-[darkblue] rounded-full duration-300 transition-colors"></div>
            </div>
          ))}
        </div>
        <div>
          <div className="w-full flex justify-center pt-3">
            <button className="p-3 px-7 w-[25%] rounded-[28px] text-[darkblue] text-[19px] font-semibold bg-[skyblue]  ">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
