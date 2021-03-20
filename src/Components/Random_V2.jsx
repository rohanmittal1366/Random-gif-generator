import React from "react";

import useGif from "../useGif";

const Random2 = () => {
  const { gif, fetchGif } = useGif();

  return (
    <div className="container">
      <h1>Random Gif</h1>
      <img width="500" src={gif} alt="Random Gif" />
      <button onClick={fetchGif}>CLICK FOR NEW</button>
    </div>
  );
};

export default Random2;
