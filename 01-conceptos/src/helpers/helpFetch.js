export const helpFetch = () => {
  const URL = "http://localhost:3004/"

  const customFetch = (endpoint, options = {}) => {
    options.method = options.method || "GET"
    options.headers = {
      "content-type": "application/json"
    }

    if (options.body) {
      options.body = JSON.stringify(options.body)
    }

    console.log(options);

    return fetch(`${URL}${endpoint}`, options).then( response => {
      return response.ok
      ? response.json()
      : Promise.reject({
        error: true,
        status: response.status,
        statusText: response.statusText
      })
    }).catch( error => {
      return {
        error: true,
        statusText: "Error: No se ha logrado la petición."
      }
    } )
  }

  const get = (endpoint) => customFetch(endpoint)

  const post = (endpoint, options) => {
    options.method = "POST"
    return customFetch(endpoint, options)
  }

  const put = (endpoint, options, id) => {
    options.method = "PUT"
    return customFetch(`${endpoint}/${id}`, options)
  }

  const del = (endpoint, id) => {
    const options = {
      method: "DELETE"
    }
    return customFetch(`${endpoint}/${id}`, options)
  }

  return { get, post, put, del }
}