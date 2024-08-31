import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    async createUser(req: Request, res: Response): Promise<void> {
        try {
            const user = await this.userService.createUser(req.body);
            res.status(201).json({ user });
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error in user-controller, createUser:", error.message);
                if (error.message === 'User with this email already exists') {
                    res.status(400).json({ message: error.message });
                } else {
                    res.status(500).json({ message: error.message });
                }
            } else {
                res.status(500).json({ message: "Unknown error occurred" });
            }
        }
    }

    async updateUser(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.params.id;
            const userData = req.body;
            const updatedUser = await this.userService.updateUser(userId, userData);
            res.status(200).json({ user: updatedUser });
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error in user-controller, updateUser:", error.message);
                res.status(401).json({ message: error.message });
            } else {
                res.status(500).json({ message: "Unknown error occurred" });
            }
        }
    }

    async getUser(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.params.id;
            const user = await this.userService.getUser(userId);
            if (user) {
                res.status(200).json({ user });
            } else {
                res.status(404).json({ message: "User not found" });
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error in user-controller, getUser:", error.message);
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: "Unknown error occurred" });
            }
        }
    }

    async deleteUser(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.params.id;
            await this.userService.deleteUser(userId);
            res.status(204).json({
                message: "User deleted successfully"
            }); // No content for successful delete
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error in user-controller, deleteUser:", error.message);
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: "Unknown error occurred" });
            }
        }
    }
}
