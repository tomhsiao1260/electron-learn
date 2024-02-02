import React from "react"
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
      <p>This is our layout</p>

      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/work">Work</a>
        </li>
      </ul>

      <Outlet />
    </div>
  )
}
