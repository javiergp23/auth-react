import { useState } from "react";
import {DefaultLayout} from "../layout/DefaultLayout.tsx";
import { useAuth } from "../auth/AuthProvider.tsx";
import { Navigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const auth = useAuth();

    if(auth.isAuthenticated){
        return <Navigate to="/dashboard"/>
    }
  return (
    <DefaultLayout>
      <form className="form">
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" value="Login" onClick={(e) => {
          e.preventDefault();
          console.log(username, password);
        }}>
          Login
        </button>
      </form>
    </DefaultLayout>
  );
}
