import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton, useUser } from '@clerk/clerk-react'
import { Route, Routes, Navigate } from "react-router"
import HomePage from './pages/HomePage'
import ProblemsPage from './pages/ProblemsPage'
import { Toaster } from 'react-hot-toast';
import DashboardPage from './pages/DashboardPage';
import ProblemPage from './pages/ProblemPage';

function App() {

  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return <div className="flex items-center justify-center h-screen bg-base-300">
      <div className="loading loading-spinner text-primary loading-lg"></div>
    </div>
  }

  return (
    <>
      <Routes>
        <Route path="/" element={!isSignedIn ? <HomePage /> : <Navigate to={"/dashboard"} />} />
        <Route path="/dashboard" element={isSignedIn ? <DashboardPage /> : <Navigate to={"/"} />} />
        <Route path="/problems" element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"} />} />
        <Route path="/problem/:id" element={isSignedIn ? <ProblemPage /> : <Navigate to={"/"} />} />
      </Routes>

      <Toaster
        position="top-right"
        reverseOrder={true}
        toastOptions={{ duration: 3000 }}
      />
    </>
  )
}

export default App