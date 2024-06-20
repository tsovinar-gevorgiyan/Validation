import { useState } from "react"

export const Signup = ({onAdd, users})=>{
    const [user, setUser] = useState({name: "", surname: "", login:"", password:""})
    const [error, setError] =useState()

    const handleSubmit =e=>{
        e.preventDefault()

        if(!user.name.trim() || !user.surname.trim() || !user.login.trim() || !user.password.trim()){
            return setError("Please fill all the fields")
        }
   
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(user.login)) {
            return setError("Login must be a valid email");
        }

    
        const isLoginTaken = users.some(existingUser => existingUser.login === user.login);
        if (isLoginTaken) {
            return setError("This login is already taken");
        }

      
        if (user.password.length < 6) {
            return setError("Password must be at least 6 characters long");
        }

        onAdd(user)
        setUser({name: "", salary: "", login:"", password:""})
        setError("")
    }


    return <div>
        <form onSubmit= {handleSubmit}>
        {error && <p style = {{color: "red"}}> {error}</p>}
            <label> First name</label>
            <input 
                value = {user.name}
                onChange={e=>setUser({...user, name: e.target.value})}
            />
            <label> Surname</label>
            <input 
                value = {user.surname}
                onChange={e=>setUser({...user, surname: e.target.value})}
            />
            <label> Login</label>
            <input 
                value = {user.login}
                onChange={e=>setUser({...user, login: e.target.value})}
            />
            <label> Password</label>
            <input 
                value = {user.password}
                onChange={e=>setUser({...user, password: e.target.value})}
            />
            <button>Submit</button>
        </form>
    </div>
}