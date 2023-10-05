import React from "react";
import DateTime from "./DateTime";

const Navbar = ({ searchInput, handleSearch }) => {
  // const [isActive, setIsActive] = useState(true);
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     window.scrollY > 60 ? setIsActive(true) : setIsActive(true);

      return (
        <div className="relative">
        <nav className="  grid grid-flow-col bg-orange-600 w-full ">
          <div className="flex justify-left sticky p-5 bg-orange-600  py-4 text-2xl text-white">
            तपाईको दैनिक राशिफल
          </div>
          <DateTime />
          <div className="flex justify-end text-xl py-2 p-5">
            <input
              type="text"
              placeholder="राशिको नाम लेख्नुहोस।"
              className="border border-black flex-0 outline-none mr-2 p-1 rounded-lg"
              value={searchInput}
              onchange={handleSearch}
            />
            <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg border-b-4">
              Search
            </button>
          </div>

          {/* <h3 className="text-xl font-bold text-gray-600">{new Date().toLocaleString('en-US', { timeZone: 'Asia/Kathmandu' })}</h3> */}
        </nav>
       
        </div>
      );
  //   });
  // });
};

export default Navbar;
