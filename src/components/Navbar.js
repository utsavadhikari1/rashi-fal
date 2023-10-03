import React from "react";

const Navbar = () => {
  return (
    <nav className=" fixed    flex flex-col  ">
      <div className="flex justify-center sticky  bg-orange-600  py-4 text-2xl text-white">
        तपाईको दैनिक राशिफल
      </div>
      
      {/* <h3 className="text-xl font-bold text-gray-600">{new Date().toLocaleString('en-US', { timeZone: 'Asia/Kathmandu' })}</h3> */}
    </nav>
    
  );
};

export default Navbar;
