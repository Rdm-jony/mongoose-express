# 📝 Mongoose Express CRUD API (TypeScript)

A simple backend REST API built using **Node.js**, **Express**, **TypeScript**, and **Mongoose (MongoDB)**. This project demonstrates CRUD operations (Create, Read, Update, Delete) on a simple blog system.

---

## 📂 Folder Structure
<pre>

src/
│
├── Interfaces/
│   ├── blog_interface.ts
│   └── user_interface.ts
│
├── controller/
│   ├── node_controller.ts
│   ├── user_controller.ts
│   └── blog_controller.ts
│
├── model/
│   ├── node_model.ts
│   ├── user_model.ts
│   └── blog_model.ts
│
├── app.ts


<pre>

---


## 🧰 Technologies Used

- TypeScript
- Express.js
- Mongoose (MongoDB)
- dotenv
- Node.js
- MVC pattern

---


## 🔗 Live Features user

| Method | Endpoint  | Description             |
| ------ | --------- | ----------------------- |
| POST   | `/create` | Create a new user       |
| GET    | `/`       | Get all users           |
| GET    | `/:id`    | Get a single user by ID |
| PATCH  | `/:id`    | Update a user by ID     |
| DELETE | `/:id`    | Delete a user by ID     |

## 🔗 Live Features blog

| Method | Endpoint  | Description             |
| ------ | --------- | ----------------------- |
| POST   | `/create` | Create a new blog       |
| GET    | `/`       | Get all blogs           |
| GET    | `/:id`    | Get a single blog by ID |
| PATCH  | `/:id`    | Update a blog by ID     |
| DELETE | `/:id`    | Delete a blog by ID     |


## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/Rdm-jony/mongoose-express.git
cd mongoose-express
