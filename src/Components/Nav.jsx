import React from "react";

const Nav = ({ data }) => {
  return (
    <div className="p-6 flex justify-between items-center bg-zinc-200">
      <h2 className="text-orange-700 text-3xl font-bold">Music</h2>
      <div className="flex justify-between items-center gap-4 bg-orange-700 p-2 px-6 rounded-full text-white">
        <h3 className=" text-lg">Favourites : </h3>
        <p className="text-lg font-semibold">
          {data.filter((i) => i.Added).length}
        </p>
      </div>
    </div>
  );
};

export default Nav;
