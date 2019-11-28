const { NODE_ENV } = process.env
let API

if(NODE_ENV === "development"){
  API = "http://localhost:4000"
} else {
  API = "https://budgety-api.herokuapp.com"
}

const get = async path => fetch(`${API}${path}`, { credentials: "include" }).then(res => res.json())

const post = async ({ path, data }) => {
  return fetch(`${API}${path}`,{
    method:'post',
    credentials:"include",
    body: JSON.stringify(data)
  })
}

export {
  get,
  post
}