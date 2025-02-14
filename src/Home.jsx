import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="my-10 text-center text-5xl text-rose-700">Dashboards</h1>

      <div className="flex justify-center gap-5 ">
        <Link
          className="bg-orange-400 text-[13px] px-5 py-1 rounded-md text-yellow-100 font-mono font-bold hover:text-neutral-600 hover:transition-all duration-500"
          to="/event"
        >
          Event
        </Link>
        <Link
          className="bg-rose-400 text-[13px] px-5 py-1 rounded-md text-yellow-100 font-mono font-bold hover:text-neutral-600 hover:transition-all duration-500"
          to="/analytics"
        >
          Analytics
        </Link>
        <Link
          className="bg-purple-500 text-[13px] px-5 py-1 rounded-md text-gray-900 font-mono font-bold hover:text-slate-50 hover:transition-all duration-500"
          to="/category"
        >
          Category-Filter
        </Link>
      </div>
    </div>
  );
};

export default Home;
