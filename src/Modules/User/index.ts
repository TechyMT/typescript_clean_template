import { userRoutes } from "./routes"
import { Router } from "express"

const UserModule = Router()

UserModule.use("/user", userRoutes)


export { UserModule };