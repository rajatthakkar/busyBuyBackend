import UserRepo from "./user.reository.js";
export default class UserController {
    constructor() {
        this.userRepo = new UserRepo()
    }
  
    // LogIn function
    async logIn(req, res) {
        const {userName,password}=req.body
      try {
        const result = this.userRepo.login({userName,password})
        // Simulate the login logic (e.g., validating user credentials)
        // Replace this with actual login logic (e.g., checking database or JWT)
        console.log("Login attempt");
  
        // Example: If login is successful
        res.status(200).json({ message: 'Login successful' });
      } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'An error occurred during login', error: error.message });
      }
    }
  
    // SignUp function
    async signUp(req, res) {
        const {userName,email,paswword} = req.body
      try {
        const result = this.userRepo.signup({ userName, email, paswword })
        // Simulate sign-up logic (e.g., creating a new user in the database)
        console.log("Sign-up attempt");
  
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
  