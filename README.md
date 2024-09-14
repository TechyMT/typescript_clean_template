# Node.js Boilerplate with Mongoose and MongoDB

This is a boilerplate template for a Node.js project with a clean folder structure using Mongoose and MongoDB. The structure is organized to keep the code modular and maintainable.

## Project Structure

The project structure is as follows:
```
project-root
│
├── .env.example
├── package.json
├── tsconfig.json
├── docker-compose.yml
└── src
    ├── Interfaces
    │   └── (Interface files go here)
    │
    ├── Models
    │   └── (Database models go here)
    │
    ├── Modules
    │   └── User
    │       ├── controllers
    │       │   ├── index.ts
    │       │   └── (Controller files go here)
    |       |
    |       ├── middlewares
    │       │   ├── index.ts
    │       │   └── (Middleware files go here)
    │       │
    │       ├── repositories
    │       │   ├── index.ts
    │       │   └── (Repository files go here)
    │       │
    │       ├── services
    │       │   ├── index.ts
    │       │   └── (Service files go here)
    │       │
    │       ├── routes
    │       │   ├── index.ts
    │       │   └── (Route files go here)
    │       │
    │       └── index.ts (Exports the user module)
    |
    ├── utils
    |   └── (Utility functions go here)
    |
    ├── Dockerfile.dev
    └── index.ts

```



## Getting Started

### Prerequisites

Ensure you have the following installed on your local development environment:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [MongoDB](https://www.mongodb.com/) (v4.x or higher)
- [Docker](https://www.docker.com/) (if you want to use Docker for development)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Copy the `.env.example` file to a new file named `.env` in the root of your project:

    ```bash
    cp .env.example .env
    ```

    Edit the `.env` file to include your MongoDB connection string and other environment-specific variables:

    ```env
    MONGODB_URL="YOUR MONGODB URL"
    NODE_ENV="dev"
    PORT=10000
    SELF_URL="http://localhost:10000/ping"
    ```

4. **Run MongoDB locally:**

    If MongoDB is not already running, start it using:

    ```bash
    mongod --dbpath /path-to-your-db-data
    ```

    Or, if you prefer using Docker, you can spin up a MongoDB container using the provided `docker-compose.yml`:

    ```bash
    docker-compose up -d
    ```

### Running the Application

1. **Start the development server:**

    ```bash
    npm run dev
    ```

    This will start the server with nodemon, automatically reloading on changes.

2. **Access the application:**

    Open your browser and navigate to `http://localhost:10000`.

### Folder and File Descriptions

- **src/Interfaces:** This folder contains TypeScript interfaces for data models.
  
- **src/Models:** This folder contains Mongoose schemas and models.

- **src/Modules:** This folder contains the application's feature modules. Each module (e.g., `user`) is organized into subfolders for `controllers`, `repositories`, `services`, and `routes`.
  
    - **controllers:** Handle incoming HTTP requests and interact with the service layer.
  
    - **repositories:** Encapsulate the logic required to access data sources.
  
    - **services:** Contain the business logic of the application.
  
    - **routes:** Define the API endpoints and link them to controller functions.
  
- **src/utils:** Utility functions used across the application.

### Customization

To customize this boilerplate for your own use:

1. **Add new modules:**

   - Use the [`@techymt/create-module`](https://www.npmjs.com/package/@techymt/create-module) package to generate new modules.
   - Define your models, controllers, services, and routes in the respective directories.

2. **Modify the Mongoose models:**

   - Update the schemas in `src/Models` to match your application's data structure.
   - Ensure any new models are exported and used within your services.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Author

- [TechyMT](https://github.com/TechyMT)
