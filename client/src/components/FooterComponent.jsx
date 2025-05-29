function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 sm:px-10 text-center rounded-t-xl">
      <div className="max-w-6xl mx-auto">
        <p className="mb-4">&copy; {new Date().getFullYear()} EventPro. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}