import axios from "axios";

// creating the axios instance
const ApiClient = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json"
    },
})

//retrieve the auth token from local storage
function getAuthToken(){
    return localStorage.getItem("token")
}

// a request interceptor to include the auth token in every request
ApiClient.interceptors.request.use(config => {
    const token = getAuthToken();
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => console.log(error));

export default ApiClient;