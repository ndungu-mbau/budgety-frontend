import { useState } from "react"
import { get, post } from "./requests"

const DataProvider = ({ children }) => {
  const [ user, setUser ] = useState({})
  const [ incomes, setIncomes ] = useState([])
  const [ expenses, setExpenses ] = useState([])
  const [ err, setErr ] = useState({})
  const [ token, setToken ] = useState(localStorage.getItem('token'))

  if(token){
    get('/auth/me').then(usr => setUser(usr))
  }

  const props = {
    user,
    incomes,
    expenses,
    err,
    addIncome: async incomeInput => {
      const res = await post('/entries', incomeInput)
      console.log(res)
      if(!res.data.ok){
        setErr(res.data)
      } else {
        setIncomes([ ...incomes, res.data ])
      }
    },
    addExpense: async expenseInput => {
      const res = await post('/entries', expenseInput)
      console.log(res)
      if(!res.data.ok){
        setErr(res.data)
      } else {
        setExpenses([ ...expenses, res.data ])
      }
    },
    login: async user => {
      const res = await post('/auth/login', user)
      console.log(res)
      if(!res.data.ok){
        setErr(res.data)
      } else {
        localStorage.setItem('token', res.data.token)
        setToken(res.data.token)
      }
    },
    logout: () => {
      localStorage.removeItem('token')
      setToken('')
      setUser({})
    }
  }

  return children(props)
}

export default DataProvider