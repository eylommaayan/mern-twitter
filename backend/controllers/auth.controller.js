export const signup = async (req, res) => {
  try {
    res.status(201).json({ message: "Signup works ✅" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    res.status(200).json({ message: "Login works ✅" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    res.status(200).json({ message: "Logout works ✅" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
