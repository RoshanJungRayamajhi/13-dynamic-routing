import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Userdetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const gobackhandler = (e) => {
    // navigate("/User" )
    navigate(-1);
  };

  return (
    <div className="text-2xl  bg-zinc-300 mt-10 p-4">
      <h1 className="text-red-500 text-3xl">Userdetails</h1>
      <h1 className="p-3 mt-3"> hiii!! {name}</h1>
      <button
        onClick={gobackhandler}
        className="rounded-full bg-blue-400 text-white p-3  text-2xl mt-4 "
      >
        Go back
      </button>
    </div>
  );
};

export default Userdetails;
