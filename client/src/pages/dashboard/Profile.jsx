import React from "react";

const user = {
    name: "Pavan Saravanan",
    email: "pavan@gmail.com",
    role: "Festival Organiser",
    img: "/src/assets/pavan.jpg",
    bio: "Passionate festival organiser. Loves to work and colloborate for experiences.",
    joined: "January 2025",
};

export default function Profile() {
    // To make the user name dynamic for particular users, you should pass the user object as a prop.
    // Remove the hardcoded user object above and update the component to accept a user prop:

    // In the parent component, render <Profile user={someUserObject} />

    return (
        <div className="min-h-screen  flex items-center justify-center py-10">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
                <div className="flex flex-col items-center">
                    <img
                        className="w-28 h-28 rounded-full border-4 border-cyan-500 shadow-md object-cover object-center"
                        src={user.img}
                        alt={user.name}
                    />
                    <h2 className="mt-4 text-2xl font-bold text-gray-800">{user.name}</h2>
                    <p className="text-gray-500">{user.role}</p>
                    <p className="mt-2 text-gray-600 text-center">{user.bio}</p>
                </div>
                <div className="mt-6">
                    <div className="flex items-center mb-2">
                        <span className="material-icons text-cyan-500 mr-2">email</span>
                        <span className="text-gray-700">{user.email}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="material-icons text-cyan-500 mr-2">calendar_today</span>
                        <span className="text-gray-700">Joined {user.joined}</span>
                    </div>
                </div>
                <div className="mt-8 flex justify-center">
                    <button className="bg-blue-950 hover:bg-orange-500 text-white px-6 py-2 rounded-lg shadow transition">
                        Edit Profile
                    </button>
                </div>
            </div>
            
            <link
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"
            />
        </div>
    );
}