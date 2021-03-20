import React, { useState, useEffect } from "react";
import axios from "axios";
// import "../.env";
const API_KEY = "PKHFRpomRDWv5zLNdDmBdphVYg3I8l2C";
// process.env.REACT_APP_API_KEY;

const Tag = () => {
  const [tag, setTag] = useState("dogs");
  const [gif, setGif] = useState("");
  const fetchGif = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url); //promise
    // console.log(data);
    const imageSrc = data.data.images.downsized_large.url;
    // console.log(imageSrc);
    setGif(imageSrc);
  };

  useEffect(() => {
    fetchGif();
  }, []);

  const handleClick = () => {
    fetchGif(tag);
    console.log("clicked");
  };

  return (
    <div className="container">
      <h1>Random {tag} Gif</h1>
      <img width="500" src={gif} alt="gif" />
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={handleClick}>Click for New </button>
    </div>
  );
};

export default Tag;
