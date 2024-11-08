import UserModel from "./user.modal.js";

export default class UserRepo {
    async signup(userInformation) {
        console.log("In repo Password",userInformation)
        try {
            const existingUser = await UserModel.findOne({ email: userInformation.email });
            console.log("check",existingUser)
            if (existingUser) {
              throw new Error("User with this email already exists");
            }
            const result = new UserModel(userInformation);
            await result.save();  // Save user information to the database
            return { success: true, data:"User Ragistured successfully" };  // Return saved user data
        } catch (error) {
            console.error("Error in signup:", error);
            throw new Error("User signup failed");
        }
    }

    async login(email,password) {
        console.log("email and password",email,password)
        try {
            const user = await UserModel.findOne({ email });
            console.log
            if (!user) {
              return { message: 'User not found' }
            }
            // Check if the provided password is correct
           
            // Return a success message and user details
            return {
              message: 'Sign-in successful',
              user: { id: user._id, userName: user.userName, email: user.email },
            }    
        } catch (error) {
            console.error("Error in login:", error);
            throw new Error("Login failed");
        }
    }

    async logout() {
        try {
            // Perform any logout logic here if needed, such as clearing tokens
            return { success: true, message: "Logout successful" };
        } catch (error) {
            console.error("Error in logout:", error);
            throw new Error("Logout failed");
        }
    }
}
