import { useState } from "react"
import { get, post } from "./requests"

const DataProvider = async ({ children }) => {
  const [ user, setUser ] = useState({})
  const [ incomes, setIncomes ] = useState([])
  const [ expenses, setExpenses ] = useState([])
  const [ token, setToken ] = useState(localStorage.getItem('token'))

  if(token){
    const usr = await get('/auth/me')
    setUser(usr)

    const entries = await get('/entries')
    const inc = entries.filter(entry => entry.type === "income")
    const exp = entries.filter(entry => entry.type === "expense")

    setIncomes(inc)
    setExpenses(exp)
  }

  const props = {
    user,
    incomes,
    expenses,
    addIncome: async incomeInput => {
      const res = await post('/entries', incomeInput)
      console.log(res)
      setIncomes([ ...incomes, res ])

    },
    addExpense: async expenseInput => {
      const res = await post('/entries', expenseInput)
      console.log(res)
      setExpenses([ ...expenses, res ])
    },
    login: async user => {
      const res = await post('/auth/login', user)
      console.log(res)
      localStorage.setItem('token', res.token)
      setToken(res.token)
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