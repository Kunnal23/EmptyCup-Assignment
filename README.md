
# EmptyCup Assignment

This is a full-stack web application developed as part of the EmptyCup internship assignment. It includes a Python Flask backend and a static HTML/CSS/JS frontend, both containerized and deployed using Docker.



## 📦 Features

- Simple Flask API backend
- Static frontend served with Nginx
- Dockerized for easy local setup



## 🚀 Live Demo

👉 [https://emptycup-kunnal.netlify.app/](https://emptycup-kunnal.netlify.app/)

## 🛠️ Tech Stack Used

### 🧩 Frontend
![frontend](https://skillicons.dev/icons?i=js,html,css)

### 🧪 Backend
![backend](https://skillicons.dev/icons?i=python)

### 🐳 DevOps
![devops](https://skillicons.dev/icons?i=docker)

## 📁 Project Structure

```
EmptyCup-Assignment/
├── backend/
│   ├── app.py
│   └── requirements.txt  
├── frontend/
│   ├── index.html
│   ├── styles.css
│   ├── index.js
│   └── assets/
├── docker-compose.yml 
└── README.md
```



## ⚙️ How to Run Locally

### 🔧 Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop) installed
- [Git](https://git-scm.com/downloads) installed


### 🧑‍💻 Steps to Start

1. **Clone the repo**  
   ```
   git clone https://github.com/Kunnal23/EmptyCup-Assignment.git
   cd EmptyCup-Assignment
   ```

2. **Start everything with Docker**

    ```
    docker-compose up --build
    ```

3. **Visit in your browser:**

    Frontend: http://localhost:3000

    Backend API: http://localhost:5000

### 📦 Backend Details (Flask)
- `app.py` : main Flask application

- Endpoint(s):
    - `GET /api/data` : returns list of predefined items

- Customize data directly in `app.py` or use dynamic input if extended

### 🌐 Frontend Details
- Static HTML page with JS to fetch and display data from the Flask API.
- Can be served via Nginx (recommended) or any static server.

### 🐳 Docker Info
- Docker Compose handles two services:
    - backend: Python Flask app
    - frontend: Static site served by Nginx


## Screenshots

![Image](https://github.com/user-attachments/assets/58fb4b45-900e-4733-a5ce-06c19531ddab)

## ✒️ Author

**Kunnal Kant Lal-** 
[kantkunnal2311@gmail.com](mailto:kantkunnal2311@gmail.com)


