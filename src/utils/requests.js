import axios from "axios"

const { NODE_ENV } = process.env
let API

if(NODE_ENV === "development"){
  API = "http://localhost:4000"
} else {
  API = "https://budgety-api.herokuapp.com"
}

const get = path => axios.get(`${API}${path}`, {
  headers : {
    authorization: localStorage.getItem('token')
  }
})

const post = (path, data) => {
  return axios.post(`${API}${path}`, data, {
    headers: {
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('token')
    }
  })
}

export {
  get,
  post
}