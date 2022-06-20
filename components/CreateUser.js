import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";

function CreateUser() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      username,
    };
    if (username === "") {
      alert("Please fill in your username");
    } else {
      axios.post("https://backend-workouts.vercel.app/users/add", user)
        .then(() => {
          alert("User added successfully");
        })
        .catch((err) => {
          console.log(err);
        });
      router.push("/");
    }
    setUsername("");
  };
  return (
    <div className="bg-gray-700  h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Create User</title>
      </Head>
      <form action="" className="flex flex-col items-center space-y-5 w-2/4">
        <h1 className="text-white text-4xl font-bold">Create User</h1>
        <input
          className=" py-2 w-full rounded  px-5"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="border w-2/4 py-3 border-none text-gray-800 hover:bg-blue-400 rounded bg-blue-500"
          type="submit"
          onClick={handleSubmit}
        >
          Add User
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
