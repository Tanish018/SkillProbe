import React from 'react'
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton, useUser } from '@clerk/clerk-react'
import { toast } from 'react-hot-toast';

const HomePage = () => {
  return (
    <div>
      <button className='btn btn-primary' onClick={()=> toast.success('Successfully toasted!')}>Click Me</button>

      <SignedOut>
        <SignInButton mode="modal">
          <button className='btn btn-primary'>Log in</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton></SignOutButton>
      </SignedIn>

      <UserButton />
    </div>
  )
}

export default HomePage
