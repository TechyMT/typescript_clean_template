import { IUser } from "@interfaces/user.interface";
import { UserRepository } from "../repositories/user.repository";

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(userData: Partial<IUser>): Promise<IUser> {
    try {
      // Check if user with the same email already exists
      const existingUser = await this.userRepository.findUserByEmail(userData.email);
      if (existingUser) {
        throw new Error('User with this email already exists');
      }

      // Create a new user
      return await this.userRepository.createUser(userData);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error in user-service, createUser:", error.message);
        throw error;
      } else {
        throw new Error("Unknown error occurred");
      }
    }
  }

  async updateUser(userId: string, userData: Partial<IUser>): Promise<IUser> {
    try {
      return await this.userRepository.updateUser(userId, userData);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error in user-service, updateUser:", error.message);
        throw error;
      } else {
        throw new Error("Unknown error occurred");
      }
    }
  }

  async getUser(userId: string): Promise<IUser | null> {
    try {
      return await this.userRepository.findUserById(userId);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error in user-service, getUser:", error.message);
        throw error;
      } else {
        throw new Error("Unknown error occurred");
      }
    }
  }

  async deleteUser(userId: string): Promise<void> {
    try {
      await this.userRepository.deleteUser(userId);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error in user-service, deleteUser:", error.message);
        throw error;
      } else {
        throw new Error("Unknown error occurred");
      }
    }
  }

}
