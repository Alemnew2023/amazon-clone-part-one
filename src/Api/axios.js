import axios from "axios";

const axiosInstance = axios.create({

  // local instance of firebase function
  // baseUrl: "http://127.0.0.1:5001/clone-f1500/us-central1/api",

// deployed version of firebase function
  baseUrl: "https://api-tabdeac5uq-uc.a.run.app",
  // deployed version of amazon server on render.com
  // baseUrl: "https://amazon-api-deploy-invf.onrender.com/",
});

export { axiosInstance };
