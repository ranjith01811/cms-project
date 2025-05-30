const UserService = {
  signup: async (email, password) => {
    const token = email; 
    const userProfile = { email, token };
    localStorage.setItem(`userProfile_${email}`, JSON.stringify(userProfile));
    return Promise.resolve(userProfile);
  },

  signin: async (email, password) => {
    const storedProfile = localStorage.getItem(`userProfile_${email}`);
    if (!storedProfile) return Promise.reject(new Error("User not found"));
    return Promise.resolve(JSON.parse(storedProfile));
  },

  getUserProfile: async (token) => {
    const storedProfile = localStorage.getItem(`userProfile_${token}`);
    if (!storedProfile) return null;
    return JSON.parse(storedProfile);
  },

  logout: async () => {
    return Promise.resolve();
  },
};

export default UserService;
