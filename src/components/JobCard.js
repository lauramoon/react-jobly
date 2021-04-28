import { useState, useContext } from "react";
import "./JobCard.css";
import UserContext from "../helpers/userContext";

function JobCard({ job, apply }) {
  const currentUser = useContext(UserContext);
  const [appList, setAppList] = useState(currentUser.applications);
  const [applied, setApplied] = useState(appList.includes(job.id));

  const handleClick = () => {
    apply(job.id);
    setApplied(true);
    setAppList(currentUser.applications);
  };

  return (
    <div className="JobCard">
      <h2>
        {job.title} {job.companyName && <small>- {job.companyName}</small>}
      </h2>
      <div className="JobCard-lower">
        <div className="JobCard-details">
          <p>Salary: {job.salary}</p>
          <p>Equity: {job.equity}</p>
        </div>
        <div className="JobCard-apply">
          <button onClick={handleClick} disabled={applied}>
            {applied ? "Applied" : "Apply"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
