const SignIn = () => {
    return (
        <form className="max-w-md mx-auto p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
            <div className="mb-4">
                <label htmlFor="email" className="block mb-1 font-medium">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block mb-1 font-medium">
                    Password:
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
            >
                Sign In
            </button>
        </form>
    );
}

export default SignIn;