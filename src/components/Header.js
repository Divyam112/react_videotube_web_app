const Header = () => {
  return (
    <div className="flex justify-between items-center p-2 shadow-lg ">
      <div>
        <ul className="flex justify-between items-center space-x-2">
          <li className="p-3  rounded-full border-2   border-gray-800 border-double hover:bg-gray-400 hover:cursor-pointer">
            <img
              className="h-5 "
              src="https://t3.ftcdn.net/jpg/01/09/45/80/240_F_109458015_QsWmchlzuwCZPqIUWR7HcTDsbbptejRv.jpg"
              alt="side menu "
            />
          </li>
          <li className="cursor-pointer">
            <img
              className="w-28 h-8"
              src="data:image/png;base64,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"
              alt="youtube logo "
            />
          </li>
        </ul>
      </div>
      <div className=" flex justify-center items-center w-1/2">
        <input
          className="w-[80%] border-2 p-3 rounded-s-full"
          type="text"
          value=""
          placeholder="Search"
        />
        <button className=" w-[10%] p-3 border-2 rounded-e-full bg-gray-50 hover:bg-gray-100 ">
          <img
            className="object-contain h-6 w-full "
            src="https://cdn-icons-png.flaticon.com/128/711/711319.png"
            alt="search icon"
          />
        </button>
      </div>
      <div>
        <ul className="flex justify-between items-center space-x-2">
          <li className="p-3  rounded-full cursor-pointer hover:bg-gray-200">
            <img
              className="h-7"
              src="https://cdn-icons-png.flaticon.com/128/4189/4189286.png"
              alt="video create"
            />
          </li>
          <li className="p-3  rounded-full cursor-pointer hover:bg-gray-200">
            <img
              className="h-7"
              src="https://cdn-icons-png.flaticon.com/128/2645/2645897.png"
              alt="notification"
            />
          </li>
          <li className="p-3  rounded-full cursor-pointer hover:bg-gray-200">
            <img
              className="h-7"
              src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png"
              alt="user"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
