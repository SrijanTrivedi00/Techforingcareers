

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./Uitility/PrivateRoute";
import JobList from "./components/JobList";
import RedirectRoute from "./Uitility/RedirectRoutes";
import JobForm from "./Uitility/JobForm";
import { JobProvider } from "./context/JobContext";
import Navbar from "./Uitility/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";



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
