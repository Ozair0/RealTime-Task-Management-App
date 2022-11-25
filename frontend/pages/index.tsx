import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Head>
        <title>Task Management</title>
        <meta name="description" content="Task Management App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mt-10 ml-10">
        <Link className="p-2 bg-blue-400 text-white rounded-md" href={"/tasks"}>
          View All Tasks
        </Link>
        <Link
          className="p-2 bg-blue-400 text-white rounded-md ml-10"
          href={"/task/add"}
        >
          Add A Task
        </Link>
      </div>
    </div>
  );
}
