import { SignInButton } from '@clerk/clerk-react'
import { Link } from 'react-router';
import { ArrowRightIcon, CheckIcon, Code2Icon, SparklesIcon, UsersIcon, VideoIcon, ZapIcon } from 'lucide-react';


const HomePage = () => {
  return (
    <div className='bg-linear-to-br from-base-100 via-base-200 to-base-300'>

      {/* Navbar */}
      <nav className='bg-base-100/80 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50 shadow-lg'>
        <div className='max-w-7xl mx-auto p-4 flex items-center justify-between'>
          {/* Logo */}
          <Link to={"/"} className='flex items-center gap-3 hover:scale-105 transition-transform duration-200'>
            <div className='size-10 rounded-xl bg-linear-to-br from primary via-secondary to-accent flex items-center justify-center shadow-lg '>
              <SparklesIcon className='size-6 text-white' />
            </div>
            <div className='flex flex-col'>
              <span className='font-black text-lg bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono tracking-wider'>SkillProbe</span>
              <span className='text-sm text-base-content/60 font-medium -mt-1'>Code Together</span>
            </div>
          </Link>

          {/* Auth Bin */}
          <SignInButton mode='modal'>
            <button className='group px-6 py-2 bg-linear-to-r from-primary to-secondary rounded-xl text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 cursor-pointer flex items-center gap-2'>
              <span>Get Started</span>
              <ArrowRightIcon className='w-5 h-4 group-hover:translate-x-0.5 transition-transform' />
            </button>
          </SignInButton>
        </div>
      </nav>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 py-20 '>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <div className='space-y-8'>
            <div className='badge badge-primary badge-lg font-medium'>
              <ZapIcon className='size-4' />
              Real-Time Collaboration
            </div>
            <h1 className='text-5xl lg:text-7xl font-black leading-tight '>
              <span className='bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent'>Code Together,</span>
              <br />
              <span className='text-base-content'>Learn Together</span>
            </h1>
            <p className="text-xl text-base-content/70 leading-relaxed max-w-xl">
              The ultimate platform for collaborative coding interviews and pair programming.
              Connect face-to-face, code in real-time, and ace your technical interviews.
            </p>

            {/* Feature Pills */}
            <div className='flex flex-wrap gap-4'>
              <div className='badge badge-lg badge-outline cursor-pointer'>
                <CheckIcon className='size-4 text-success' />
                Live Video Chat
              </div>
              <div className='badge badge-lg badge-outline cursor-pointer'>
                <CheckIcon className='size-4 text-success' />
                Code Editor
              </div>
              <div className='badge badge-lg badge-outline cursor-pointer'>
                <CheckIcon className='size-4 text-success' />
                Multi Language
              </div>
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-wrap gap-4'>
              <SignInButton mode='modal' className='btn btn-primary btn-lg hover:shadow-lg'>
                <button>
                  Start Coding Now
                  <ArrowRightIcon className='w-5 h-5' />
                </button>
              </SignInButton>
              <button className='btn btn-outline btn-lg hover:shadow-lg hover:btn-secondary'>
                <VideoIcon className='w-5 h-5' />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className='stats stats-vertical lg:stats-horizontal bg-base-100 shadow-lg'>
              <div className='stat'>
                <div className='stat-value text-primary'>100K+</div>
                <div className='stat-title'>Active Users</div>
              </div>
              <div className='stat'>
                <div className='stat-value text-secondary'>500k+</div>
                <div className='stat-title'>Sessions</div>
              </div>
              <div className='stat'>
                <div className='stat-value text-accent'>99.99%</div>
                <div className='stat-title'>Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <img
            src="/hero.png"
            alt="CodeCollab Platform"
            className="w-full h-auto rounded-3xl shadow-2xl border-4 border-base-100 hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className='max-w-7xl mx-auto px-4 py-20'>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Everything You Need to <span className="text-primary font-mono">Succeed</span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Powerful features designed to make your coding interviews seamless and productive
          </p>
        </div>

        {/* Grid */}
        <div className='grid md:grid-cols-3 gap-8'>
          <div className='card bg-base-100 shadow-xl hover:scale-105 transition-all duration-150 cursor-pointer'>
            <div className='card-body items-center text-center'>
              <div className='size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4'>
                <VideoIcon className='size-8 text-primary' />
              </div>
              <h3 className="text-lg font-semibold card-title">HD Video Calls</h3>
              <p className='text-base-content/70'>Crystal clear video calls for seamless collaboration during interviews</p>
            </div>
          </div>
          <div className='card bg-base-100 shadow-xl hover:scale-105 transition-all duration-150 cursor-pointer'>
            <div className='card-body items-center text-center'>
              <div className='size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4'>
                <Code2Icon className='size-8 text-primary' />
              </div>
              <h3 className="text-lg font-semibold card-title">Live Code Editor</h3>
              <p className='text-base-content/70'>Real-time collaborative coding with syntax highlighting and multiple language support</p>
            </div>
          </div>
          <div className='card bg-base-100 shadow-xl hover:scale-105 transition-all duration-150 cursor-pointer'>
            <div className='card-body items-center text-center'>
              <div className='size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4'>
                <UsersIcon className='size-8 text-primary' />
              </div>
              <h3 className="text-lg font-semibold card-title">Easy Collaboration</h3>
              <p className='text-base-content/70'>Share your screen, discuss solutions, and learn from each other in real-time</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HomePage
