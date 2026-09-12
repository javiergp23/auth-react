import { Outlet, Navigate } from 'react-router-dom'
import { useState } from 'react'

export default function ProtectedRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />
}