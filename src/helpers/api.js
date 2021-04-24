import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get list of all companies */

  static async getCompanies() {
    let res = await this.request(`companies/`);
    return res.companies;
  }

  /** Search all companies for given term */

  static async searchCompanies(term) {
    const url = term.length > 0 ? `companies/?name=${term}` : `companies/`;
    let res = await this.request(url);
    return res.companies;
  }

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get list of all jobs */

  static async getJobs() {
    let res = await this.request(`jobs/`);
    return res.jobs;
  }

  /** Search all jobs for given term */

  static async searchJobs(term) {
    const url = term.length > 0 ? `jobs/?title=${term}` : `jobs/`;
    let res = await this.request(url);
    return res.jobs;
  }

  /** Register new user */

  static async registerNewUser(newUserData) {
    let res = await this.request(`auth/register/`, newUserData, "post");
    this.token = res.token;
    return res.token;
  }

  /** Login user */

  static async loginUser(userData) {
    let res = await this.request(`auth/token/`, userData, "post");
    this.token = res.token;
    return res.token;
  }

  /** Get user data */

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }
}

// for now, put token ("testuser" / "password" on class)
// JoblyApi.token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//   "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//   "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi;
