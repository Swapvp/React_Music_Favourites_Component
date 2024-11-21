import React from "react";

const Card = ({ data, handleBtnClick, index }) => {
  const { image, SongName, Artist, Added } = data;
  return (
    <div className=" w-80 h-40 bg-zinc-200 flex rounded-lg items-center p-4 gap-8 relative my-2">
      <div className="bg-orange-500 w-24 h-24 rounded-lg">
        <img
          src={image}
          alt=""
          className="h-full w-full overflow-hidden rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col gap-1 justify-center items-right p-2">
        <h2 className="text-lg font-semibold ">{SongName}</h2>
        <p className="text-sm">{Artist}</p>
        <button
          onClick={() => handleBtnClick(index)}
          className="bg-orange-600  px-3 py-2 flex-wrap rounded-full whitespace-nowrap text-white"
        >
          {Added === false ? "Add to Favourites" : "Added"}
        </button>
      </div>
    </div>
  );
};

export default Card;
