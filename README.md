# 🚀 Techforing Job Portal

A **React-based Job Portal** application built with **React Context API**, **Material UI**, and **React Router**. It provides a smooth and responsive interface for users to register, log in, and manage job listings efficiently. All authentication is handled using locally stored **JWT tokens**.

---

## 🔑 Core Features

- 🔐 **User Authentication** – Register and log in functionality with credentials stored securely in `localStorage`.
- 🛡️ **JWT Authentication** – Implements JSON Web Token (JWT) handling for session persistence.
- 📋 **Job Management** – Create, update, delete, and view job postings.
- 🔒 **Protected Routes** – Only authenticated users can access and manage job listings.
- 🎨 **Material UI Components** – Clean and consistent design with Material UI elements.
- 🌐 **Client-Side Routing** – Seamless navigation using React Router.
- 📱 **Mobile-Friendly Layout** – Fully responsive UI across all device sizes.
- 🧾 **Job Listings Carousel** – Scrollable horizontal cards for enhanced UX.

---

## ⚙️ Technology Stack

- **Frontend**: React  
- **Routing**: React Router  
- **State Management**: React Context API  
- **UI Library**: Material UI  
- **Authentication**: JWT (stored in `localStorage`)  
- **Storage**: `localStorage` for session data  

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/SrijanTrivedi00/Techforingcareers.git
```

### 2️⃣ Install Dependencies

Navigate into the project directory and install required packages:

```bash
npm install
```

### 3️⃣ Run the Development Server

```bash
npm run dev
```

Your app will launch at: [http://localhost:5173](http://localhost:5173)

---

## 🔐 Authentication

- Users can sign up and log in with credentials saved in `localStorage`.
- JWT tokens are simulated and stored locally to manage sessions.
- Upon successful login, users are redirected to the job dashboard.
- All job-related routes are protected and only accessible after authentication.

---

