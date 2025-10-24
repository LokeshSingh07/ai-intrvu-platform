// components/Loader.tsx
"use client";

import { Loader2 } from "lucide-react";
import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-sreen">
      <Loader2 className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600"></Loader2>
    </div>
  );
};

export default Loader;
