import React from "react";

const Profile = ({ loggedIn }) => {
  return (
    <>
      {loggedIn ? (
        <div className="px-10 py-5 space-y-4 w-full h-screen bg-zinc-800 text-white">
          <h1 className="text-4xl">Profile</h1>
          <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, facilis.</p>

        </div>
      ) : (
        <div className="px-10 py-5 space-y-4 w-full h-screen bg-zinc-800 text-white">
          <h2 className="text-4xl font-semibold">Not Logged In :(</h2>
          <button type="button" className=" text-blue-600 hover:underline">Go to Login Page</button>
        </div>
      )}
    </>
  );
};

export default Profile;
