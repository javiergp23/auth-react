import { useState } from "react";
import {DefaultLayout} from "../layout/DefaultLayout.tsx";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider.tsx";
import { API_URL } from "../auth/constants.ts";

export default function Signup() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorResponse, setErrorResponse] = useState('');

    const auth = useAuth();
    if(auth.isAuthenticated){
        return <Navigate to="/dashboard"/>
    }
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        try{
            const response = await fetch(`${API_URL}/signup`, {
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
            if(response.ok){
                console.log("User created successfully");
            }else{
                console.log("Something went wrong")
                const json = await response.json();
            }
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
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" value="Signup" >Create user</button>
        </form>
    </DefaultLayout>
  )
}