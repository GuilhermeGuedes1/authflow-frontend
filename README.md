# AuthFlow Frontend

AuthFlow Frontend is the React interface for the **AuthFlow** authentication system, built to deliver a clean, modern, and scalable user experience.  
It connects directly to the Node.js backend API to handle user authentication flows.

Currently, the **Sign Up** page is fully functional and integrated with the backend.  
The **Login** page is under development and will be added soon.

---

## 🚀 Features

- 🧾 **Sign Up** integrated with backend (working user registration)  
- 🔄 API communication via **Axios**  
- 🧭 **React Router** for route management  
- ⚙️ Modular structure with **pages**, **components**, and **routes**  
- 🎨 Clean, responsive UI built with **Tailwind CSS**  
- ⚡ Modern React Hooks (`useState`, `useEffect`, `useNavigate`)  
- 🧩 Ready for expansion (Login, Dashboard, etc.)

---

## 🧱 Tech Stack

| Layer | Technology |
|--------|-------------|
| Frontend | React.js |
| Routing | React Router DOM |
| Styling | Tailwind CSS |
| HTTP Requests | Axios |
| Navigation | React Hooks (`useNavigate`) |
| State Management | React Hooks (`useState`, `useEffect`) |

---

## 📂 Project Structure

```
frontend/
│
├── src/
│   ├── assets/              # Static assets and images
│   ├── components/          # Reusable UI components (inputs, buttons, etc.)
│   ├── pages/               # Main application pages (SignUp, Login, etc.)
│   │   ├── SignUpPage.jsx
│   │   └── LoginPage.jsx    # (in development)
│   ├── routes/              # Route configuration (routes.jsx)
│   ├── services/            # Backend connection (Axios setup)
│   ├── App.jsx              # Main React component
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles with Tailwind
│
├── .env                     # Environment variables (e.g., API base URL)
├── .gitignore               # Ignored files and folders
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```

---

## ⚙️ Installation & Usage

```bash
# Clone the repository
git clone https://github.com/your-username/authflow-frontend.git

# Navigate to the folder
cd authflow-frontend

# Install dependencies
npm install

# Configure your .env
VITE_API_URL=http://localhost:5000

# Run the project
npm run dev
```

The frontend will automatically connect to the **AuthFlow Backend** for user registration.

---

## 🔗 Backend Integration

Ensure the **AuthFlow Backend** is running before starting the frontend.  
By default, the backend runs at `http://localhost:5000`.

The current endpoint used for **Sign Up** is:
```
POST /signup
```

---

## 🧠 Roadmap

- [ ] Implement Login page  
- [ ] Add visual feedback for success/error states  
- [ ] Enable persistent authentication using JWT (local storage)  
- [ ] Create a protected Dashboard page  

---

## 💡 About the Project

**AuthFlow** is the first fullstack project by [Guilherme Guedes](https://github.com/your-github),  
built to apply and showcase modern development practices in **authentication**, **frontend-backend integration**, and **clean architecture**.
