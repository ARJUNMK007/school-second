export const AddTeacher = () => {
  return (
    <div>
      <div>
        <h1 className="text-[blue] text-[23px] font-bold">Add New Teacher</h1>
        <div className="mt-[8%]">
          <div className="bg-[#171774] text-[white] rounded-tr-2xl rounded-tl-2xl p-2 ">
            <h2 className="font-bold pl-5">Personal Details</h2>
          </div>
          <div className="flex pt-[3%] gap-[5%] bg-[white] p-3 rounded-bl-lg rounded-br-lg pr-[15%]">
            <div className="flex flex-col gap-y-6 w-full md:w-1/2">
              <div className="w-full">
                <label htmlFor="" className="text-[blue] text-[16px] font-medium">
                  First Name <span>*</span>
                </label>
                <br />
                <input
                  type="text"
                  placeholder="hello"
                  className="border-[1px] mt-2 h-[30px] rounded-[4px] indent-[5%] w-full border-[#5555d0]"
                />
              </div>

              <div className="w-full">
                <label htmlFor="" className="text-[blue] text-[16px] font-medium">
                  Email <span>*</span>
                </label>
                <br />
                <input
                  type="text"
                  placeholder="hello"
                  className="border-[1px] mt-2 h-[30px] rounded-[4px] indent-[5%] w-full  border-[#5555d0]"
                />
              </div>

              <div className="w-full">
                <label htmlFor="" className="text-[blue] text-[16px] font-medium">
                  Address <span>*</span>
                </label>
                <br />
                <textarea
                  rows={4}
                  placeholder="hello"
                  className="border-[1px] mt-2 rounded-[4px] indent-[5%] w-full  border-[#5555d0]"
                />
              </div>
              <div className="w-full">
                <label htmlFor="" className="text-[blue] text-[16px] font-medium">
                  Date & Place Of Birth <span>*</span>
                </label>
                <br />

                <input
                  type="text"
                  placeholder="hello"
                  className="border-[1px] mt-2 h-[30px] rounded-[4px] indent-[5%] w-full border-[#5555d0]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-6 w-full md:w-1/2">
              <div className="w-full">
                <label htmlFor="" className="text-[blue] text-[16px] font-medium">
                  Last Name <span>*</span>
                </label>
                <br />
                <input
                  type="text"
                  placeholder="hello"
                  className="border-[1px] mt-2 h-[30px] rounded-[4px] indent-[5%] w-full  border-[#5555d0]"
                />
              </div>

              <div className="w-full">
                <label htmlFor="" className="text-[blue] text-[16px] font-medium">
                  Phone <span>*</span>
                </label>
                <br />
                <input
                  type="text"
                  placeholder="hello"
                  className="border-[1px] mt-2 h-[30px] rounded-[4px] indent-[5%] w-full  border-[#5555d0]"
                />
              </div>
              <div className="flex flex-col w-full md:w-3/5">
                <h3 className="text-[blue] text-[16px] font-medium">
                  Photo <span>*</span>
                </h3>
                <div className=" border-dotted mt-2 border-[1px] border-[grey] py-[13%] text-center">
                  <p>
                    Drag and Drop or <br /> Click here to Select the file
                  </p>
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="" className="text-[blue] text-[16px] font-medium">
                  Place of Birth <span>*</span>
                </label>
                <br />
                <input
                  type="text"
                  placeholder="hello"
                  className="border-[1px] mt-2 h-[30px] rounded-[4px] indent-[5%] w-full  border-[#5555d0]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[8%]">
          <div className="bg-[#171774] text-[white] rounded-tr-2xl rounded-tl-2xl p-2 ">
            <h2 className="font-bold pl-5">Education</h2>
          </div>
          <div className="flex pt-[3%] gap-[5%] bg-[white] p-3 rounded-bl-lg rounded-br-lg">
            <div className="flex flex-col gap-y-6 w-full md:w-2/5">
              <div className="w-full">
                <label htmlFor="" className="text-[blue] text-[16px] font-medium">
                  University <span>*</span>
                </label>
                <br />
                <input
                  type="text"
                  placeholder="hello"
                  className="border-[1px] mt-2 h-[30px] rounded-[4px] indent-[5%] w-full border-[#5555d0]"
                />
              </div>

              <div className="w-full">
                <label htmlFor="" className="text-[blue] text-[16px] font-medium">
                  Start & End Date <span>*</span>
                </label>
                <br />
                <div className="flex mt-2 gap-x-4">
                  <input
                    type="text"
                    placeholder="hello"
                    className="border-[1px] h-[30px] rounded-[4px] indent-[5%] w-full  border-[#5555d0]"
                  />
                  <input
                    type="text"
                    placeholder="hello"
                    className="border-[1px] h-[30px] rounded-[4px] indent-[5%] w-full  border-[#5555d0]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-6 w-full md:w-2/5 ">
              <div className="w-full">
                <label htmlFor="" className="text-[blue] text-[16px] font-medium">
                  Degree <span>*</span>
                </label>
                <br />
                <input
                  type="text"
                  placeholder="hello"
                  className="border-[1px] mt-2 h-[30px] rounded-[4px] indent-[5%] w-full  border-[#5555d0]"
                />
              </div>

              <div className="w-full">
                <label htmlFor="" className="text-[blue] text-[16px] font-medium">
                  City <span>*</span>
                </label>
                <br />
                <input
                  type="text"
                  placeholder="hello"
                  className="border-[1px] mt-2 h-[30px] rounded-[4px] indent-[5%] w-full  border-[#5555d0]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-4 mt-[2%]">
        <button className="p-2 border-[1px] border-[blue] text-[blue] rounded-2xl shadow-2xl ">Save as Draft</button>
        <button className="p-2 px-3 border-[1px] bg-[blue] text-[white] rounded-2xl shadow-2xl ">Submit</button>
      </div>
    </div>
  );
};
