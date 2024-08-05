
const events = [
  { time: "Monday, June 31 2020", title: "Karen Hope has created new task at History Lesson", type: "default" },
  {
    time: "Monday, June 31 2020",
    title: "[REMINDER] Due date of Science Homework task will be coming",
    type: "reminder",
  },
  { time: "Monday, June 31 2020", title: "Tony Soap commented at Science Homework", type: "comment" },
  { time: "Monday, June 31 2020", title: "Samantha William add 4 files on Art Class", type: "file" },
  { time: "Monday, June 31 2020", title: "You have moved 'Biology Homework' task to Done", type: "done" },
];

const Stepper = () => {
  return (
    <div className="flex flex-col items-start space-y-4 relative pl-8">
      {events.map((event, index) => (
        <div key={index} className="flex items-start space-x-4 relative">
          <div className="flex flex-col items-center absolute left-0 top-0">
            <div className={`w-4 h-4 rounded-full ${getCircleColor(event.type)}`}></div>
            {index < events.length - 1 && <div className="w-[1px] bg-[black] h-12"></div>}
          </div>
          <div className="pl-6">
            <div className="text-gray-500 text-sm">{event.time}</div>
            <div className={`text-lg ${getTitleColor(event.type)}`}>{event.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const getCircleColor = (type) => {
  switch (type) {
    case "reminder":
      return "bg-red-500";
    case "comment":
      return "bg-blue-500";
    case "file":
      return "bg-purple-500";
    case "done":
      return "bg-green-500";
    default:
      return "bg-gray-500";
  }
};

const getTitleColor = (type) => {
  switch (type) {
    case "reminder":
      return "text-red-500";
    case "comment":
      return "text-blue-500";
    case "file":
      return "text-purple-500";
    case "done":
      return "text-green-500";
    default:
      return "text-black";
  }
};

export default Stepper;
