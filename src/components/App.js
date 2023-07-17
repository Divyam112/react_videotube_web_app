import Body from "./Body";
import Header from "./Header";
import SideBar from "./SideBar";

const App = () => {
  return (
    <div className="">
      <Header />
      <div className="flex">
        <SideBar />
        <Body />
      </div>
    </div>
  );
};

export default App;
