// components/Loader.tsx
"use client";

import { Loader2 } from "lucide-react";
import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 h-screen bg-[#FAF8F4]">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap');
        .loader-mono { font-family: 'IBM Plex Mono', monospace; }
      `}</style>
      <Loader2 className="animate-spin h-8 w-8 text-[#12151B]" strokeWidth={1.75} />
      <span className="loader-mono text-xs tracking-wide uppercase text-[#8A8F9C]">
        Loading
      </span>
    </div>
  );
};

export default Loader;