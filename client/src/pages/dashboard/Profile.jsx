import React from "react";

const user = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    role: "Administrator",
    avatar:
        "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Passionate web developer and CMS enthusiast. Loves to create beautiful and functional user experiences.",
    joined: "January 2023",
};

export default function Profile() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
                <div className="flex flex-col items-center">
                    <img
                        className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-md"
                        src={user.avatar}
                        alt={user.name}
                    />
                    <h2 className="mt-4 text-2xl font-bold text-gray-800">{user.name}</h2>
                    <p className="text-gray-500">{user.role}</p>
                    <p className="mt-2 text-gray-600 text-center">{user.bio}</p>
                </div>
                <div className="mt-6">
                    <div className="flex items-center mb-2">
                        <span className="material-icons text-blue-500 mr-2">email</span>
                        <span className="text-gray-700">{user.email}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="material-icons text-blue-500 mr-2">calendar_today</span>
                        <span className="text-gray-700">Joined {user.joined}</span>
                    </div>
                </div>
                <div className="mt-8 flex justify-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow transition">
                        Edit Profile
                    </button>
                </div>
            </div>
            {/* Google Material Icons CDN */}
            <link
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"
            />
        </div>
    );
}