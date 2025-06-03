import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import SWAL from "sweetalert2";

const SignIn = () => {
  const { signin, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    try {
      await signin(email, password);
      await SWAL.fire({
        icon: "success",
        title: "Signed in successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/dashboard/Events");
    } catch (err) {
      console.error("Sign in failed:", err.message);
      setFormError("Failed to sign in. Check your email and password.");
      await SWAL.fire({
        icon: "error",
        title: "Sign In Failed",
        text: err.message || "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section className="py-20 px-6 sm:px-10 bg-gray-100 min-h-screen flex items-center justify-center pt-24">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-red-500 mb-6">
          Sign In
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="your.email@example.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="********"
              required
            />
          </div>
          {formError && (
            <p className="text-red-600 text-sm text-center">{formError}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-950 hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-red-500 hover:underline font-medium focus:outline-none"
          >
            Sign Up
          </button>
        </p>
      </div>
    </section>
  );
};

export default SignIn;
