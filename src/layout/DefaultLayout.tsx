
import {Link, Outlet} from "react-router-dom";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout = ({children}) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
    </header>
  )
}