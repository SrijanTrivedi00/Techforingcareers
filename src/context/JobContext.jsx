import React, { createContext, useState, useEffect } from "react";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [storedJobs, setStoredJobs] = useState([]);

  useEffect(() => {
    const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    setStoredJobs(jobs);
  }, []);

  const addJob = (job) => {
    const updatedJobs = [...storedJobs, job];
    setStoredJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };

  const updateJob = (updatedJob) => {
    const updatedJobs = storedJobs.map((job) =>
      job.id === updatedJob.id ? updatedJob : job
    );
    setStoredJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };

  const deleteJob = (id) => {
    const updatedJobs = storedJobs.filter((job) => job.id !== id);
    setStoredJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };

  const getJobById = (id) => {
    return storedJobs.find((job) => job.id === parseFloat(id));
  };

  return (
    <JobContext.Provider
      value={{
        storedJobs,
        addJob,
        updateJob,
        deleteJob,
        getJobById,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export default JobContext;
