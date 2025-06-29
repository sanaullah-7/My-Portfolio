import Home from "./Pages/Home"
import './App.css'
import { useEffect, useState } from 'react';
import { Settings } from 'lucide-react'; // Gear icon from lucide (Tailwind friendly)
function App() {

  const [showLoader, setShowLoader] = useState(true);
  setTimeout(() => {
    setShowLoader();
  }, 3500); // 3 seconds for fast professional loading
  if (showLoader) {
    return (
      <>
        <div className="h-screen gap-2   bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center ">
          <span className="text-white text-2xl font-medium animate-pulse tracking-widest ">L O A D I N G . . .</span>
          {/* Rotating gear icon */}
          <Settings className="w-6 h-6 text-white animate-spin  mt-1" />
        </div>
      </>
    )
  }

  return (
    <>
      <div className="bg-gradient-to-r from-blue-300  via-blue-400 to-blue-500">
        <Home />
      </div>
    </>
  )
}

export default App
