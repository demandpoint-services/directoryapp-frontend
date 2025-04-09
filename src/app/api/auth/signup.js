// pages/api/auth/signup.js
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    // Replace this with real DB logic
    if (!username || !password) {
      return res.status(400).json({ message: "Missing fields" });
    }

    // You can save to a real DB here.
    console.log("Registering user:", username);

    // Mock success
    return res.status(200).json({ message: "User registered successfully" });
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
