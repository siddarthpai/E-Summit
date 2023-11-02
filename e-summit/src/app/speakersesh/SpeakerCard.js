import React from "react";
import Image from "next/image";

const PanelistCard = ({ name, title, photo, description }) => {
  const containerStyle = {
    height: "700px",
    backgroundColor: "#A7C7F1",
    border: "10px inset #422173",
  };

  const imageStyle = {
    height: "200px",
    width: "200px",
    borderRadius: "50%",
    overflow: "hidden",
    objectFit: "cover",
    marginTop: "20px",
    marginBottom: "8px",
    border: "4px solid #422173",
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow-md " style={containerStyle}>
        <div
          className="profile-image-container"
          style={{ backgroundColor: "#A7C7F1" }}
        >
          {/* <img
            src={photo}
            alt={name}
            className="w-auto h-auto rounded-full"
            style={imageStyle}
          /> */}
          <Image
            src={photo}
            width={200}
            height={200}
            className="w-auto h-auto rounded-full"
            style={imageStyle}
          />
        </div>
        <div
          className="profile-details mt-12"
          style={{ backgroundColor: "#A7C7F1" }}
        >
          <h2
            className="text-2xl font-bold font-mono"
            style={{ color: "#422173" }}
          >
            {name}
          </h2>
          <p className="text-black text-sm mt-5 m-5 lg:text-xl ">{title}</p>
          <p className="text-black text-sm lg:text-xl m-5 mt-20 font-mono">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PanelistCard;
