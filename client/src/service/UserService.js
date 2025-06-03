const UserService = {
  signup: async (email, password) => {
    const existingUser = localStorage.getItem(`userProfile_${email}`);
    if (existingUser) return Promise.reject(new Error("User already exists"));

    const userProfile = { email, password, token: email }; 
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

    userProfile.token = email;

    return Promise.resolve(userProfile);
  },

  getUserProfile: async (token) => {
    const stored = localStorage.getItem(`userProfile_${token}`);
    if (!stored) return null;
    return JSON.parse(stored);
  },

  logout: async () => {
    return Promise.resolve(); 
  },
};

export default UserService;
