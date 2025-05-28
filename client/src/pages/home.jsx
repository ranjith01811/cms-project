import { Link } from "react-router";

function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-[80vh] px-4">
        <div className="text-gray-800 text-3xl font-bold mb-4">
          Welcome to Our Event Registration Page
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg shadow-lg text-lg transition duration-300">
          <Link to={'/login'}>
          Enter Now To Register
          </Link>
        </button>
      </section>
    </>
  );
}
export default Home;