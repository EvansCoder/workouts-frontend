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
    <div  className="mt-5 bg-gray-600 w-full h-fit min-h-screen flex flex-col items-center justify-start">
      <Head>
        <title>Exercises</title>
      </Head>
      <h1  className="text-white text-4xl font-bold mb-2 mt-14">
        Exercises List
      </h1>
      
      <div className="relative  shadow-md sm:rounded-lg mt-5">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Username
                </th>
                <th scope="col" className="px-6 py-3">
                    Description
                </th>
                <th scope="col" className="px-6 py-3">
                    Duration(min)
                </th>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="">Actions</span>
                </th>
            </tr>
        </thead>
        <tbody>
        {exercises.map((exercise, id) => {
            return (<tr key={id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {exercise.username}
                </th>
                <td className="px-6 py-4">
                    {exercise.description}
                </td>
                <td className="px-6 py-4">
                    {exercise.duration}
                </td>
                <td className="px-6 py-4">
                   {exercise.date.substring(0, 10)}
                </td>
                <td  className="px-6 py-4 text-right space-x-2 text-gray-200 text-sm">
                <Link href={"/edit/" + exercise.id}>
                    <a  className="bg-green-400 rounded py-1 px-2">Edit</a>
                  </Link>
                  <Link href="">
                    <a
                      onClick={() => deleteExercise(exercise.id)}
                       className="bg-red-400  rounded py-1 px-2"
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
    </div>
  );
}

export default ExercisesList;
