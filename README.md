# ✅ Custom Task Manager API

This is a simple Task Manager project with a custom API server built using **Node.js**, **Express**, and **MongoDB Atlas**. It also includes a basic frontend to interact with the API.

---

## 🚀 Features

- Create, Read, Update, Delete (CRUD) operations for tasks
- MongoDB Atlas for cloud database storage
- Mongoose for MongoDB integration
- Frontend form to manage tasks
- Visual task status updates (Completed / Incomplete)
- Toast notifications for feedback

---

## 🔗 Base URL

```
http://localhost:5000/api/tasks
```

---

## 📂 API Endpoints

### 1. Get All Tasks

- **Method:** `GET`
- **Endpoint:** `/api/tasks`
- **Response:** Returns a list of all tasks

---

### 2. Create a Task

- **Method:** `POST`
- **Endpoint:** `/api/tasks`
- **Body Example:**
```json
{
  "title": "New Task",
  "description": "This is a sample task",
  "completed": false
}
```

---

### 3. Update a Task

- **Method:** `PUT`
- **Endpoint:** `/api/tasks/:id`
- **Body Example:**
```json
{
  "title": "Updated Task",
  "description": "Updated details",
  "completed": true
}
```

---

### 4. Delete a Task

- **Method:** `DELETE`
- **Endpoint:** `/api/tasks/:id`

---

## 🧪 How to Test

You can test the API using:

- Browser / Frontend UI
- [Postman](https://www.postman.com/) or [curl](https://curl.se/)
- Interact using form buttons to create, edit, delete, or mark tasks as complete/incomplete

---

## 🖥️ Frontend

- Form to submit new tasks
- Table to view and manage tasks
- Green background for completed tasks
- Real-time update after every action

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- HTML, CSS, JavaScript (Frontend)

---

## 📁 Folder Structure

```
├── models/
│   └── Task.js
├── routes/
│   └── taskRoutes.js
├── public/
│   └── index.html
├── app.js
├── server.js
├── .env
├── package.json
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/custom-api-server.git
cd custom-api-server
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root:

```env
PORT=5000
MONGO_URI=your-mongodb-atlas-connection-string
```

> Replace `your-mongodb-atlas-connection-string` with your actual MongoDB URI from Atlas.

### 4. Run the Server

```bash
npm run dev
```

Then open your browser and navigate to:

```
http://localhost:5000
```

---

## 👨‍💻 Author

**Aditya Bahadur**  
🔗 [LinkedIn](https://www.linkedin.com/in/aditya-bahadur-b3b709197/)  
💻 [GitHub](https://github.com/abahadur29)

---