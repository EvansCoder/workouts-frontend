import React, { useState } from "react";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function CreateExercise() {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  

  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    
  const exercise = {
    username,
    description,
    duration,
    date,
  };
    if(username === "" || description === "" || duration === "") {
      alert("Please fill in all fields");
    }
    else {
    axios
      .post("http://localhost:3001/exercises/add", exercise)
      .then(() => {
        console.log("Exercise added successfully")
      })
      .catch((err) => {
        console.log(err);
      });
      router.reload("/");
    }
    setUsername("");
    setDescription("");
    setDuration("");
    setDate("");
  };

  return (
    <div className="bg-gray-700  h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Create Exercise</title>
      </Head>
      <form action="" className="flex flex-col items-center space-y-5 w-2/4">
        <h1 className="text-white text-4xl font-bold">Create Exercise</h1>
        <input
          className=" py-2 w-full rounded  px-5"
          type="text"
          placeholder="Username i.e John Doe"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className=" py-2 w-full rounded  px-5"
          type="text"
          placeholder="Description of the exercise"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="py-2 w-full rounded  px-5"
          type="number"
          placeholder="Duration of the task in minutes"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
         <DatePicker placeholderText="Pick the Date"  className="py-2 w-full rounded  px-5" selected={date} onChange={(date) => setDate(date)}/>
        <button
          className="border w-2/4 py-3 border-none text-gray-800 hover:bg-blue-400 rounded bg-blue-500"
          type="submit"
          onClick={handleSubmit}
          disabled={false}
        >
          Add Activity
        </button>
      </form>
    </div>
  );
}

export default CreateExercise;
