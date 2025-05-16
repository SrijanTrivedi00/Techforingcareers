import axios from "axios";

import 'dotenv/config';

const API_URL = process.env.Backendurl;

export const fetchJobs = async (token) => {
  return await axios.get(`${API_URL}/jobs`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const createJob = async (token, jobData) => {
  return await axios.post(`${API_URL}/jobs`, jobData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteJob = async (token, jobId) => {
  return await axios.delete(`${API_URL}/jobs/${jobId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
