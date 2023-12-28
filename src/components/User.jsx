import React from "react";
import { Link, Outlet } from "react-router-dom";

const User = () => {
  return (
    <div className=" flex flex-col text-2xl m-auto w-1/2 mt-10 p-4">
      <h1 className="text-red-500 text-3xl">User</h1>
      <div className=" flex flex-col text-2xl m-auto w-1/2 mt-10 p-4">
        {" "}
        <Link
          className=" w-fit bg-red-400 p-3 text-2xl mb-3 hover:bg-red-500"
          to="/user/john"
        >
          john
        </Link>
        <Link
          className=" w-fit bg-red-400 p-3 text-2xl mb-3 hover:bg-red-500"
          to="/user/roshan"
        >
          roshan
        </Link>
        <Link
          className=" w-fit bg-red-400 p-3 text-2xl mb-3 hover:bg-red-500"
          to="/user/deepu"
        >
          deepu
        </Link>
      </div>
      <hr />
      <Outlet/>
    </div>
  );
};

export default User;
