import Cookies from "js-cookie"

const BASE_URL = "http://localhost:3000"

const fetchWithConfig = async (endpoint, options = {}) => {
    const url = `${BASE_URL}${endpoint}`;
    const token = Cookies.get("ACCESS_TOKEN")

    const headers = {
        "Content-Type": "application/json",
        ...options.headers
    };

    if (token) {
        headers["Authorization"] = `Bearer ${token}`
    }
    return fetch(url, {
        ...options, headers
    });
}

export const api = {
    get: (endpoint) => fetchWithConfig(endpoint, { method: "GET" }),
    post: (endpoint, body) => fetchWithConfig(endpoint, {
        method: "POST", body: body ? JSON.stringify(body) : undefined
    }),
    delete : (endpoint) => fetchWithConfig(endpoint,{method:"DELETE"}),
};