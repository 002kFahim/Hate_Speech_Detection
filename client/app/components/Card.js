"use client";

import { useState } from "react";

const Card = ({ data }) => {
  const [currentItem, setCurrentItem] = useState(0);

  const handleNext = () => {
    // Change the current item index to display the next card content.
    setCurrentItem((currentItem + 1) % data.length);
  };

  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg">
      <img
        src={data[currentItem].image}
        alt={data[currentItem].title}
        className="w-full"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{data[currentItem].title}</div>
        <p className="text-gray-700 text-base">
          {data[currentItem].description}
        </p>
      </div>
      <div className="px-6 py-4">
        <button
          onClick={handleNext}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Card;
