import './App.css'
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'

function App() {
  return (
    <>
      <div>
        <h1>Welcome to the App</h1>
        
        <SignedOut>
          <SignInButton mode='modal'>
            <button className=''>
              Sign In
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <p>You are signed in!</p>
          <SignOutButton />
        </SignedIn>

        <UserButton />
      </div>
    </>
  )
}

export default App
