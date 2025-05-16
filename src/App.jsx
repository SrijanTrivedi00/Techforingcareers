

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import JobList from "./pages/JobList";
import RedirectRoute from "./components/RedirectRoutes";
import JobForm from "./components/JobForm";
import { JobProvider } from "./context/JobContext";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";



function App() {
  return (
    <AuthProvider>
      <JobProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route element={<RedirectRoute />}>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/job" element={<JobList />} />
              <Route path="/job-create" element={<JobForm />} />
              <Route path="/job-edit/:id" element={<JobForm editMode={true} />} />
            </Route>
          </Routes>
        </Router>
      </JobProvider>
    </AuthProvider>
  );
}

export default App;
