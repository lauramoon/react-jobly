import { useEffect, useState } from "react";
import JoblyApi from "../../../helpers/api";
import JobCard from "../JobCard/JobCard";
import SearchBox from "../../forms/SearchBox/SearchBox";
import "./Jobs.css";

function Jobs({ applyToJob }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const res = await JoblyApi.getJobs();
      setJobs(res);
    };
    getList();
  }, []);

  const searchJobs = (searchTerm) => {
    const search = async () => {
      const res = await JoblyApi.searchJobs(searchTerm);
      setJobs(res);
    };
    search(searchTerm);
  };

  return (
    <div className="Jobs">
      <h1>Jobs</h1>
      <SearchBox doSearch={searchJobs} />
      {jobs.map((j) => (
        <JobCard key={j.id} job={j} apply={applyToJob} />
      ))}
    </div>
  );
}

export default Jobs;
