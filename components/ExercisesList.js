import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function ExercisesList() {
  const [exercises, setExercises] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const getExercises = async () => {
      let res = await axios.get("https://backend-workouts.vercel.app/exercises");
      const data = res.data;
      setExercises(
        data.map((exercise) => ({
          id: exercise._id,
          username: exercise.username,
          description: exercise.description,
          duration: exercise.duration,
          date: exercise.date,
        }))
      );
    };
    getExercises();
  }, []);
  const deleteExercise = (id) => {
    axios
      .delete("https://backend-workouts.vercel.app/exercises/" + id)
      .then(() => router.reload("/"));
  };

  return (
    <div className="mt-5 bg-gray-700 w-full h-fit min-h-screen flex flex-col items-center justify-start">
      <Head>
        <title>Exercises</title>
      </Head>
      <h1 className="text-white text-4xl font-bold mb-2 mt-14">
        Exercises List
      </h1>
      <table className="bg-gray-800 table-auto overflow-auto  md:table-fixed w-full lg:w-11/12 mt-5">
        <thead>
          <tr className="border border-gray-600 text-white text-xl font-bold text-left">
            <th className="py-5 text-center">Username</th>
            <th>Description</th>
            <th>Duration(mins)</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise, id) => {
            return (
              <tr
                key={id}
                className="border border-gray-700 text-white text-left text-base font-semibold"
              >
                <td className=" py-4 text-center">{exercise.username}</td>
                <td>{exercise.description}</td>
                <td className="text-left pl-10">{exercise.duration}</td>
                <td>{exercise.date.substring(0, 10)}</td>
                <td className="space-x-5">
                  <Link href={"/edit/" + exercise.id}>
                    <a className="bg-green-400 rounded py-2 px-2 md:px-4">Edit</a>
                  </Link>
                  <Link href="">
                    <a
                      onClick={() => deleteExercise(exercise.id)}
                      className="bg-red-400  rounded py-2 px-2 md:px-4"
                    >
                      {" "}
                      Delete
                    </a>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ExercisesList;
