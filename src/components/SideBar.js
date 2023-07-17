const SideBar = () => {
  return (
    <div className="p-2 mr-5 w-[18%] border-r-2">
      <div className="border-b-2 mb-2 p-1">
        <ul>
          <li className="flex justify-start items-center space-x-9 p-3 rounded-md hover:bg-gray-200">
            <img
              className="h-6"
              src="https://cdn-icons-png.flaticon.com/128/1946/1946436.png"
              alt="home"
            />
            <span className="font-semibold">Home</span>
          </li>

          <li className="flex justify-start items-center space-x-9 p-3 rounded-md hover:bg-gray-200">
            <img
              className="h-6"
              src="https://cdn-icons-png.flaticon.com/128/6752/6752623.png"
              alt="home"
            />
            <span className="font-semibold">Shorts</span>
          </li>

          <li className="flex justify-start items-center space-x-9 p-3 rounded-md hover:bg-gray-200">
            <img
              className="h-6"
              src="https://cdn-icons-png.flaticon.com/128/2989/2989849.png"
              alt="home"
            />
            <span className="font-semibold">Subscriptions</span>
          </li>
        </ul>
      </div>

      <div className="border-b-2 mb-2 p-1">
        <ul>
          <li className="flex justify-start items-center space-x-9 p-3 rounded-md hover:bg-gray-200">
            <img
              className="h-6"
              src="https://cdn-icons-png.flaticon.com/128/3729/3729703.png"
              alt="home"
            />
            <span className="font-semibold">Library</span>
          </li>

          <li className="flex justify-start items-center space-x-9 p-3 rounded-md hover:bg-gray-200">
            <img
              className="h-6"
              src="https://cdn-icons-png.flaticon.com/128/3503/3503786.png"
              alt="home"
            />
            <span className="font-semibold">History</span>
          </li>

          <li className="flex justify-start items-center space-x-9 p-3 rounded-md hover:bg-gray-200">
            <img
              className="h-6"
              src="https://cdn-icons-png.flaticon.com/128/992/992700.png"
              alt="home"
            />
            <span className="font-semibold">Watch later</span>
          </li>

          <li className="flex justify-start items-center space-x-9 p-3 rounded-md hover:bg-gray-200">
            <img
              className="h-6"
              src="https://cdn-icons-png.flaticon.com/128/4848/4848642.png"
              alt="home"
            />
            <span className="font-semibold">Like Videos</span>
          </li>
        </ul>
      </div>

      <div className="border-b-2 mb-2 p-1">
        <span className="text-lg font-semibold">Explore</span>
        <ul>
          <li className="flex justify-start items-center space-x-9 p-3 rounded-md hover:bg-gray-200">
            <img
              className="h-6"
              src="https://cdn-icons-png.flaticon.com/128/3390/3390990.png"
              alt="home"
            />
            <span className="font-semibold">Trending</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
