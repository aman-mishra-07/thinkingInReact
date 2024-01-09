import React from "react";
import MyClassComponent from "../components/MyClassComponent";

const Profile = () => {
  return (
    <>
      <div className="px-10 py-5 space-y-4 w-full h-screen bg-zinc-800 text-white">
        <h1 className="text-4xl">Profile</h1>
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
          facilis.
        </p>
        <MyClassComponent name="aman" />
      </div>
    </>
  );
};

export default Profile;
