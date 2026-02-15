# SkillProbe 🚀

A collaborative coding interview platform that enables real-time peer-to-peer coding sessions with video calls, live code execution, and instant messaging.

## Features ✨

- **Live Coding Sessions** - Create and join real-time collaborative coding sessions
- **Video Conferencing** - Built-in video and audio calls using Stream.io
- **Real-time Chat** - Communicate with your coding partner during sessions
- **Code Execution** - Execute code snippets in multiple languages (Python, JavaScript, Java, C++)
- **Code Editor** - Monaco editor integrated with syntax highlighting
- **Problem Bank** - Pre-loaded coding problems with multiple difficulty levels
- **Session Management** - Track active and completed sessions
- **Authentication** - Secure authentication with Clerk
- **Statistics Dashboard** - View progress and session history

## Tech Stack 🛠️

### Frontend
- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS + DaisyUI** - Styling
- **React Router v7** - Client-side routing
- **React Query** - Data fetching and caching
- **Monaco Editor** - Advanced code editor
- **Stream.io SDK** - Video calls and messaging
- **Axios** - HTTP client

### Backend
- **Node.js + Express** - Server framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Clerk** - Authentication
- **Stream.io Node SDK** - Video and chat services
- **Inngest** - Job queue and workflows
- **Piston API** - Code execution engine

## Prerequisites 📋

Before running the project, ensure you have:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** - [Download here](https://www.mongodb.com/try/download/community) or use MongoDB Atlas (cloud)
- **npm** or **yarn** - Package manager
- **Git** - Version control

### API Keys Required

1. **Clerk** - Authentication service
   - Sign up at [clerk.com](https://clerk.com)
   - Create a new application
   - Get your API keys from the dashboard

2. **Stream.io** - Video & Chat
   - Sign up at [getstream.io](https://getstream.io)
   - Create an application
   - Get your API key and secret

3. **MongoDB** - Database
   - Local instance or MongoDB Atlas connection string

## Installation & Setup 🔧

### 1. Clone the Repository

```bash
git clone https://github.com/Tanish018/SkillProbe.git
cd SkillProbe
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:

```env
# Server
PORT=3000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/skillprobe
# Or use MongoDB Atlas: MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/skillprobe

# Clerk Authentication
CLERK_API_KEY=your_clerk_api_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Stream.io
STREAM_KEY=your_stream_key
STREAM_SECRET=your_stream_secret

# Inngest (optional for background jobs)
INNGEST_KEY=your_inngest_key
```

### 3. Setup Frontend

```bash
cd frontend
npm install
```

Create a `.env.local` file in the `frontend` folder:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_STREAM_API_KEY=your_stream_api_key
```

## Running Locally 🏃

### Terminal 1: Start Backend Server

```bash
cd backend
npm run dev
```

The backend will run on `http://localhost:3000`

### Terminal 2: Start Frontend Dev Server

```bash
cd frontend
npm run dev
```

The frontend will typically run on `http://localhost:5173`

### 3. Access the Application

Open your browser and navigate to:

```
http://localhost:5173
```

## Project Structure 📁

```
SkillProbe/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── pages/           # Page components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── api/             # API client functions
│   │   ├── lib/             # Utility functions
│   │   └── data/            # Static data (problems, etc.)
│   ├── public/              # Static assets
│   └── index.html           # Entry HTML
│
├── backend/                 # Node.js backend
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   ├── models/          # MongoDB schemas
│   │   ├── routes/          # API routes
│   │   ├── middleware/      # Express middleware
│   │   ├── lib/             # Utility functions & services
│   │   └── server.js        # Entry point
│   └── package.json
│
└── README.md               # This file
```

## API Endpoints 🔌

### Authentication (via Clerk)
- All routes protected with Clerk authentication

### Sessions
- `GET /api/sessions/active` - Get all active sessions
- `GET /api/sessions/my-recent` - Get user's recent sessions
- `GET /api/sessions/:id` - Get session details
- `POST /api/sessions` - Create a new session
- `POST /api/sessions/:id/join` - Join a session
- `POST /api/sessions/:id/end` - End a session (host only)

### Chat & Video
- Powered by Stream.io SDK

## How to Use 💡

1. **Sign in** with Clerk authentication
2. **Create a Session** or **Join an Active Session**
3. **Share the session ID** with your coding partner
4. **Start coding** - Use the editor and run your code
5. **Video call** - Click to enable video/audio
6. **Chat** - Communicate in the real-time chat
7. **End Session** - Host can end the session when done

## Development 👨‍💻

### Frontend Commands
```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

### Backend Commands
```bash
npm run dev      # Start with nodemon (auto-reload)
npm start        # Start production server
```

## Troubleshooting 🔧

### Logo not visible?
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Check browser cache and DevTools Network tab

### Session end returns 404?
- Ensure backend routes use POST method for `/sessions/:id/end`
- Frontend should make POST requests (not GET)

### MongoDB connection error?
- Verify `MONGODB_URI` in `.env` is correct
- Ensure MongoDB service is running (if local)
- Check connection string for MongoDB Atlas

### Code execution not working?
- Verify Piston API is accessible
- Check network connectivity
- Ensure code syntax is correct for selected language

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request.

## License 📄

This project is open source and available under the ISC License.

## Support 💬

For issues, questions, or suggestions, please open a GitHub issue or contact the maintainers.

---

**Made with ❤️ by the SkillProbe team**
