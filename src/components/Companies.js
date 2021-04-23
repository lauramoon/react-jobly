import { useState, useEffect } from "react";

import JoblyApi from "../helpers/api";

import CompanyList from "./CompanyList";
import SearchBox from "./SearchBox";

function Companies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const res = await JoblyApi.getCompanies();
      setCompanies(res);
    };
    getList();
  }, []);

  const searchCompanies = (searchTerm) => {
    console.log("in searchCompanies");
    const search = async () => {
      console.log("IN SEARCH");
      const response = await JoblyApi.searchCompanies(searchTerm);
      console.log(response);
      setCompanies(response);
    };
    search(searchTerm);
  };

  return (
    <div>
      <h1>Companies</h1>
      <SearchBox doSearch={searchCompanies} />
      <CompanyList companies={companies} />
    </div>
  );
}

export default Companies;
