import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { fetchJobs, createJob, deleteJob } from "../api/jobs";

const Jobs = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs(user.token).then((res) => setJobs(res.data));
  }, []);

  return (
    <div>
      <h2>Job Listings</h2>
      {jobs.map((job) => (
        <div key={job.id}>
          <h3>{job.title}</h3>
          <button onClick={() => deleteJob(user.token, job.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
