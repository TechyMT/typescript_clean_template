import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { userLogger } from '../middlewares/user.middleware';

const router = Router();
const userController = new UserController();

// Apply middleware
router.use(userLogger);

// Route to create a new user
router.post('/signup', (req, res) => userController.createUser(req, res));

// Route to update an existing user by ID
router.put('/update/:id', (req, res) => userController.updateUser(req, res));

// Route to get an existing user by ID
router.get('/get/:id', (req, res) => userController.getUser(req, res));

// Route to delete an existing user by ID
router.delete('/delete/:id', (req, res) => userController.deleteUser(req, res));

// Test route to ensure the API is working
router.get('/ping', (req, res) => res.send('pong'));

export { router };
