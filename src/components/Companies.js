import { useState, useEffect } from "react";

import JoblyApi from "../helpers/api";

import CompanyList from "./CompanyList";

function Companies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    JoblyApi.getCompanies()
      .then((res) => {
        setCompanies(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>List of Companies</h1>
      <CompanyList companies={companies} />
    </div>
  );
}

export default Companies;
