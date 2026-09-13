import { useState } from "react";
import {DefaultLayout} from "../layout/DefaultLayout.tsx";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider.tsx";
export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = useAuth();
    if(auth.isAuthenticated){
        return <Navigate to="/dashboard"/>
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            const response = await fetch(`$(API_URL)/signup`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    username,
                    password,
                })
            })
        }
        catch(error){
            console.error('Error during signup:', error);
        }
    }
    
  return (
    <DefaultLayout>
        <form className="form" onSubmit={handleSubmit}>
            <h1>Signup</h1>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" value="Signup" >Create user</button>
        </form>
    </DefaultLayout>
  )
}