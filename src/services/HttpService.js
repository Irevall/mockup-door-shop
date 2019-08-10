import axios from 'axios'

export class ApiError extends Error {
  constructor (name, message, payload = {}) {
    super();

    this.name = name;
    this.message = message || name;
    this.payload = payload;

    Object.setPrototypeOf(this, ApiError.prototype)
  }
}

const http = axios.create({
  baseURL: 'https://bench-api.applover.pl/api/v1',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

async function interceptResponse(response) {
  if (response.data.timeout) {
    await new Promise(resolve => setTimeout(resolve, Math.floor(response.data.timeout * 1000)));
    const newRequest = await axios.request(response.config);
    return newRequest.data;
  }

  return response.data
}

async function interceptError(err) {
  if (err.response && err.response.data && err.response.data.error) {
    if (err.response.data.error.errors) throw new ApiError('ValidationError', 'invalid-form-fields', err.response.data.error.errors.map(error => error.property))

    const { name, message, payload } = err.response.data.error
    throw new ApiError(name, message, payload)
  }

  throw err
}

http.interceptors.response.use(interceptResponse, interceptError)

export function get (endpoint, params = {}, headers = {}) {
  return http.get(endpoint, { params, headers })
}

export function post (endpoint, data = {}, headers = {}) {
  return http.post(endpoint, data, { headers })
}
