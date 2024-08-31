import { IUser } from "@interfaces/user.interface";
import { UserModel } from "@models/user.schema";

export class UserRepository {
    private userModel;

    constructor() {
        this.userModel = UserModel;
    }

    async createUser(userData: Partial<IUser>): Promise<IUser> {
        try {
            const user = new this.userModel(userData);
            return await user.save();
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error in user-repository, createUser:", error.message);
                throw new Error(error.message);
            }
            throw new Error("An unknown error occurred in createUser.");
        }
    }

    async updateUser(userId: string, userData: Partial<IUser>): Promise<IUser | null> {
        try {
            return await this.userModel.findByIdAndUpdate(userId, userData, { new: true }).populate("persona");
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error in user-repository, updateUser:", error.message);
                throw new Error(error.message);
            }
            throw new Error("An unknown error occurred in updateUser.");
        }
    }

    async findUserByEmail(email: string): Promise<IUser | null> {
        try {
            const user = await this.userModel.findOne({ email }).populate('itineraries').sort({ createdAt: 1 });
            if (user) {
                delete user.token;  // Safely delete token if user is found
            }
            return user;
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error in user-repository, findUserByEmail:", error.message);
                throw new Error(error.message);
            }
            throw new Error("An unknown error occurred in findUserByEmail.");
        }
    }

    async findUserById(userId: string): Promise<IUser | null> {
        try {
            // Find the user by ID and populate necessary fields
            const user = await this.userModel.findById(userId)
                // Populate tripstyle if it's a reference (remove this if tripstyle is a string)
                return user;
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error in user-repository, findUserById:", error.message);
                throw new Error(error.message);
            }
            throw new Error("An unknown error occurred in findUserById.");
        }
    }

    async deleteUser(userId: string): Promise<void> {
        try {
            await this.userModel.findByIdAndDelete(userId);
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error in user-repository, deleteUser:", error.message);
                throw new Error(error.message);
            }
            throw new Error("An unknown error occurred in deleteUser.");
        }
    }

}
