import { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Banner = (props) => {
  const [image, setImage] = useState("");
  // const awaiter = async () => {
  //   const image = await axios("https://jsonplaceholder.typicode.com/photos/1");
  //   setImage(image.data.url);
  // };

  useEffect(() => {
    // awaiter()

    axios
    // .get(
    //   `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
    // )
      .get("https://jsonplaceholder.typicode.com/photos/1")
      .then(({ data }) => {
        setImage(data.url);
      })
      .catch((err) => console.log("err", err));
  }, []);

  useEffect(() => {
    console.log(image);
  }, [image]);

  return (
    <div id="banner">
      {image ? (
        <img src={image} className="image" />
      ) : (
        <Skeleton height={700} />
      )}
    </div>
  );
};

export default Banner;
