import { useState } from 'react'
import './App.css'
import { Signup } from './Signup'

function App() {
  
const [users, setUsers] = useState([
  {id:101, name:"Anna", surname:"Smith", login:"anna101@gmail.com", password:"Smith#123"},
  {id:102, name:"John", surname:"Doe", login:"john89@gmail.com", password:"BarevDzez"},
  {id:103, name:"Jack", surname:"Carter", login:"carters9@gmail.com", password:"123Jack"},

])

const addUser = obj =>{
  setUsers([...users, {...obj, id:Date.now()}])
}

  return (
    <>
     <Signup onAdd={addUser} users={users} />
    </>
  )
}

export default App
