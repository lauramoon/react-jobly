import { useEffect, useState } from "react";
import JoblyApi from "../helpers/api";
import JobCard from "./JobCard";
import "./Jobs.css";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    JoblyApi.getJobs()
      .then((res) => {
        setJobs(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="Jobs">
      <h1>Jobs</h1>
      {jobs.map((j) => (
        <JobCard id={j.id} job={j} />
      ))}
    </div>
  );
}

export default Jobs;
