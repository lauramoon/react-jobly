import "./JobCard.css";

function JobCard({ job }) {
  return (
    <div className="JobCard">
      <h2>{job.title}</h2>
      {job.companyName && <h3>{job.companyName}</h3>}
      <p>Salary: {job.salary}</p>
      <p>Equity: {job.equity}</p>
    </div>
  );
}

export default JobCard;
