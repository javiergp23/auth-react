import {DefaultLayout} from "../layout/DefaultLayout.tsx";

export default function Login() {
  return (
    <DefaultLayout>
      <form className="form">
        <h1>Login</h1>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <button type="submit" value="Login">
          Login
        </button>
      </form>
    </DefaultLayout>
  );
}
