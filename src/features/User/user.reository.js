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

    async login(loginCredential) {
        try {
            // Find user by email
            const user = await UserModel.findOne({ email: loginCredential.email });
            if (!user) {
                throw new Error("User not found");
            }

            // Here, add password comparison logic if passwords are hashed
            // For example, using bcrypt: bcrypt.compare(loginCredential.password, user.password)

            return { success: true, data: user };  // Return user data on successful login
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
