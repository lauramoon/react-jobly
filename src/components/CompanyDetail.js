import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../helpers/api";
import JobCard from "./JobCard";

import "./CompanyDetail.css";

function CompanyDetail() {
  const { handle } = useParams();

  const [company, setCompany] = useState("");

  useEffect(() => {
    JoblyApi.getCompany(handle)
      .then((res) => {
        setCompany(res);
      })
      .catch((err) => console.log(err));
    //eslint-disable-next-line
  }, []);

  console.log(company.jobs);

  if (company.jobs) {
    return (
      <div className="CompanyDetail">
        <h2>{company.name}</h2>
        <p>{company.description}</p>
        {company.jobs.map((j) => (
          <JobCard key={j.id} job={j} />
        ))}
      </div>
    );
  } else {
    return <h2>Loading...</h2>;
  }
}

export default CompanyDetail;
