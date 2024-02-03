import { Link } from "react-router-dom"

export const Layout = () => {
  return (
    <div>
      <p>This is our layout</p>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
      </ul>
    </div>
  )
}
