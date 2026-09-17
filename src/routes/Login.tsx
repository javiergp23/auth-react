import { useState } from "react";
import {DefaultLayout} from "../layout/DefaultLayout.tsx";
import { useAuth } from "../auth/AuthProvider.tsx";
import { Navigate, useNavigate } from "react-router-dom";
import { API_URL } from "../auth/constants.ts";
import type { AuthResponseError } from "../types/types.ts";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorResponse, setErrorResponse] = useState("");
    const auth = useAuth();
    const goTo = useNavigate();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
          const response = await fetch(`${API_URL}/signup`, {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              username,
              password,
            }),
          });
          if (response.ok) {
            console.log("User created successfully");
            setErrorResponse("");
            goTo("/");
          } else {
            console.log("Something went wrong");
            const json = (await response.json()) as AuthResponseError;
            setErrorResponse(json.body.error);
          }
        } catch (error) {
          console.error("Error during signup:", error);
        }
      }

    if(auth.isAuthenticated){
        return <Navigate to="/dashboard"/>
    }
  return (
    <DefaultLayout>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        {!!errorResponse && <div className="errorMessage">{errorResponse}</div>}
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
