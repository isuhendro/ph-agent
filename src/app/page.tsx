import { ChatBot } from "@/components/ChatBot";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      {/* Header Section */}
      <header className="border-b border-slate-200/30 bg-white/50 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/hp-2025.svg"
              alt="PriceHub Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <h1 className="text-2xl font-bold text-slate-900">PriceHub</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex items-center min-h-[calc(100vh-80px)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-md">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Welcome to PriceHub
            </h2>
            <p className="text-lg sm:text-xl text-slate-800 leading-relaxed">
              HP&apos;s pricing and deal management platform. Search for deals, create quotes,
              manage pricing authorizations, and handle EUV processes with AI-powered assistance.
              Get instant help navigating the platform and streamlining your sales workflows.
            </p>
          </div>
        </div>

        {/* ChatBot Section */}
        <ChatBot />
      </section>
    </div>
  );
}
