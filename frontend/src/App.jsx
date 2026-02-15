import { useUser } from '@clerk/clerk-react';
import { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes } from "react-router";
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';
import ProblemPage from './pages/ProblemPage';
import ProblemsPage from './pages/ProblemsPage';
import SessionPage from './pages/SessionPage';

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
        <Route path="/session/:id" element={isSignedIn ? <SessionPage /> : <Navigate to={"/"} />} />
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