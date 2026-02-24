"use client";

import { useEffect, useState } from "react";

interface ProgressBarProps {
  value: number; // 0–100
  label?: string;
}

export default function ProgressBar({
  value,
  label = "Nose Match Confidence",
}: ProgressBarProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(value), 400);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-[16px] font-bold text-[#905d3c]">{label}</span>
        <span className="text-[16px] font-bold text-[#905d3c]">{value}%</span>
      </div>
      <div className="h-2 bg-[#f0e8e9] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#905d3c] to-[#c07a52] rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
