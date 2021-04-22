import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../helpers/api";

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

  console.log(company);

  return (
    <div className="CompanyDetail">
      <h2>{company.name}</h2>
      <p>{company.description}</p>
    </div>
  );
}

export default CompanyDetail;
