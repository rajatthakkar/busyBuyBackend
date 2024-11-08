import UserRepo from "./user.reository.js";
export default class UserController {
  constructor() {
    this.userRepo = new UserRepo()
  }

  async logIn(req, res) {
    const { email, password } = req.body
    try {
      const result =  await this.userRepo.login( email, password )
    console.log("result",result)
      console.log("Login attempt");
      res.status(200).json(result);
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'An error occurred during login', error: error.message });
    }
  }

  // SignUp function
  async signUp(req, res) {
    console.log("in controller", req.body)
    const { name, email, password } = req.body
    try {
      const result = await this.userRepo.signup({ name, email, password })
      // Simulate sign-up logic (e.g., creating a new user in the database)
      if (!result) {
        res.status(201).json({ message: 'Sign-up Failed' });
      }
      // Example: If sign-up is successful
      res.status(201).json({ message: 'Sign-up successful' });
    } catch (error) {
      console.error('Error during sign-up:', error);
      res.status(500).json({ message: 'An error occurred during sign-up', error: error.message });
    }
  }

  // Logout function
  async logout(req, res) {
    try {
      // Simulate logout logic (e.g., clearing sessions or tokens)
      console.log("Logout attempt");
      // Example: If logout is successful
      res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
      console.error('Error during logout:', error);
      res.status(500).json({ message: 'An error occurred during logout', error: error.message });
    }
  }
}
