"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import ChatInterface from "./components/ChatInterface";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";

export default function Home() {
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(true);

  return (
    <div className="flex relative h-screen overflow-hidden bg-black text-green-500 font-mono">
      {/* Scanline Overlay */}
      <div className="scanline" />

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsRightPanelOpen(!isRightPanelOpen)}
        className="absolute top-4 right-4 z-50 p-2 bg-black text-green-500 border border-green-500 hover:bg-green-500 hover:text-black transition-all duration-200 shadow-[0_0_10px_rgba(0,255,0,0.2)] hover:shadow-[0_0_20px_rgba(0,255,0,0.5)]"
        aria-label={isRightPanelOpen ? "Close chat panel" : "Open chat panel"}
      >
        {isRightPanelOpen ? <X size={20} /> : <MessageCircle size={20} />}
      </button>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel - Login Form (Main Section) */}
        <div
          className={`flex items-center justify-center bg-black relative z-10 transition-all duration-300 ease-in-out ${isRightPanelOpen ? 'w-[60%] border-r border-green-900' : 'w-full'
            }`}
        >
          <LoginForm />
        </div>

        {/* Right Panel - Chat Interface */}
        <div
          className={`bg-black z-20 flex flex-col transition-all duration-300 ease-in-out ${isRightPanelOpen ? 'w-[40%] translate-x-0' : 'w-0 translate-x-full overflow-hidden'
            }`}
        >
          <div className="w-[40vw] h-full flex flex-col border-l border-green-900"> {/* Inner container */}
            <Navbar />
            <ChatInterface />
          </div>
        </div>
      </div>
    </div>
  );
}
