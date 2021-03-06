import Head from "next/head";
import ExercisesList from "../components/ExercisesList";

export default function Home() {

  return (
    <div>
      <Head>
        <title>Workout | Routine-based</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="text-gray-500 w-80 bg-gray-50 px-5">
          Monitor your daily routine | Activities
        </p>
        <ExercisesList/>
      </main>
    </div>
  );
}
