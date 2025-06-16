
# 📝 Mongoose Express CRUD API (TypeScript)

A simple backend REST API built using **Node.js**, **Express**, **TypeScript**, and **Mongoose (MongoDB)**. This project demonstrates CRUD operations (Create, Read, Update, Delete) on a simple blog system.

---

## 📂 Folder Structure
<pre>

src/
├── controllers/
│ └── node_controller.ts
│
├── models/ 
│ └── node_model.ts
│
├── app.ts # Main Express app configuration and routes setup
├── server.ts # Connects to MongoDB and starts the server

<pre>

---

## 🔗 Live Features

- `POST /blog/create` → Create a new blog
- `GET /blog/` → Read all blogs
- `GET /blog/:id` → Read a single blog by ID
- `PUT /blog/:id` → Update blog by ID
- `DELETE /blog/:id` → Delete blog by ID

---

## 🧰 Technologies Used

- TypeScript
- Express.js
- Mongoose (MongoDB)
- dotenv
- Node.js
- MVC pattern

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/Rdm-jony/mongoose-express.git
cd mongoose-express
