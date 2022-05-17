import React from "react";
import propTypes from "prop-types";
import Create from "../../../asset/create.png";
import Publish from "../../../asset/Publish.png";
import Calculate from "../../../asset/calculate.png";

function ImagesLoader(props) {
  const { imageUrl } = props;
  return (
    <figure>
      {imageUrl === "Create" && (
        <img className="object-cover w-full h-full" src={Create} />
      )}
      {imageUrl === "Publish" && (
        <img className="object-cover w-full h-full" src={Publish} />
      )}
      {imageUrl === "Calculate" && (
        <img className="object-cover w-full h-full" src={Calculate} />
      )}
    </figure>
  );
}

ImagesLoader.propTypes = {
  imageUrl: propTypes.any.isRequired,
};

export default ImagesLoader;
