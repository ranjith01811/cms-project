const UserService = {
  signup: async (email, password) => {
    const existingUser = localStorage.getItem(`userProfile_${email}`);
    if (existingUser) return Promise.reject(new Error("User already exists"));

    const userProfile = { email, password }; // Note: storing password is not safe, just for demo
    localStorage.setItem(`userProfile_${email}`, JSON.stringify(userProfile));
    return Promise.resolve(userProfile);
  },

  signin: async (email, password) => {
    const stored = localStorage.getItem(`userProfile_${email}`);
    if (!stored) return Promise.reject(new Error("User not found"));

    const userProfile = JSON.parse(stored);
    if (userProfile.password !== password) {
      return Promise.reject(new Error("Invalid password"));
    }
    return Promise.resolve(userProfile);
  },

  getUserProfile: async (email) => {
    const stored = localStorage.getItem(`userProfile_${email}`);
    if (!stored) return null;
    return JSON.parse(stored);
  },

  logout: async () => {
    localStorage.removeItem("currentUser"); // Optional: if you're storing active user
    return Promise.resolve();
  },
};

export default UserService;