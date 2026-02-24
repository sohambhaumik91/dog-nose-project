import ProgressBar from "./ProgressBar";

const imgDog = "/dog.png";

export default function ResultsPage() {
  return (
    <div className="min-h-dvh bg-[#f7f3f0] flex items-center justify-center">
      {/* Card — full screen on mobile, constrained card on tablet+ */}
      <div className="animate-scale-in relative w-full min-h-dvh bg-[#f7f3f0] flex flex-col sm:min-h-0 sm:max-w-sm sm:rounded-3xl sm:shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] sm:my-8 overflow-hidden">

        {/* Header */}
        <header className="animate-fade-in-up [animation-delay:100ms] flex items-center justify-between px-4 pt-5 pb-3">
          <button
            aria-label="Go back"
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2c3520" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M5 12l7 7M5 12l7-7" />
            </svg>
          </button>

          {/* Tab switcher */}
          <div className="bg-[#f0e8e9] rounded-lg p-1 flex gap-1">
            <button className="bg-white rounded-md px-3 py-1 text-[10px] font-bold text-[#44532e] shadow-sm transition-all">
              Found Demo
            </button>
            <button className="px-3 py-1 text-[10px] font-bold text-[rgba(68,83,46,0.5)] hover:text-[rgba(68,83,46,0.8)] transition-colors">
              New Demo
            </button>
          </div>
        </header>

        {/* Scrollable content */}
        <main className="flex-1 flex flex-col px-4 pb-6 overflow-y-auto">

          {/* Hero */}
          <div className="animate-fade-in-up [animation-delay:200ms] flex flex-col items-center pt-4 pb-6 gap-2">
            <div className="w-16 h-16 bg-[#f0e8e9] rounded-full flex items-center justify-center shadow-sm text-[28px] select-none">
              🎉
            </div>
            <h1 className="text-[clamp(22px,6vw,26px)] font-bold text-[#2c3520] text-center leading-tight">
              Match Found!
            </h1>
            <p className="text-[16px] font-medium text-[rgba(68,83,46,0.7)] text-center">
              We found a match in our database.
            </p>
          </div>

          {/* Dog card */}
          <div className="animate-fade-in-up [animation-delay:300ms] bg-white rounded-3xl overflow-hidden shadow-[0px_8px_10px_-6px_rgba(68,83,46,0.1),0px_20px_25px_-5px_rgba(68,83,46,0.1)]">

            {/* Banner + overlapping photo */}
            <div className="relative h-32 bg-gradient-to-r from-[#e5d6d7] to-[#f0e8e9]">
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-[#f0e8e9] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
                  <img
                    src={imgDog}
                    alt="Buddy"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Card body */}
            <div className="pt-14 pb-6 px-6">

              {/* Name + verified badge */}
              <div className="flex items-center justify-center gap-2 mb-3">
                <h2 className="text-xl font-bold text-[#2c3520]">Buddy</h2>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L12.5 4.5H16V8L18.5 10L16 12V15.5H12.5L10 18L7.5 15.5H4V12L1.5 10L4 8V4.5H7.5L10 2Z" fill="#44532e" />
                  <path d="M7 10l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Breed pill */}
              <div className="flex justify-center mb-5">
                <span className="bg-[#f0e8e9] text-[#44532e] text-[10px] font-bold px-4 py-1 rounded-full">
                  Golden Retriever
                </span>
              </div>

              {/* Owner row */}
              <div className="bg-[#f7f3f0] rounded-2xl px-3 py-3 flex items-center justify-between mb-4">
                <div>
                  <p className="text-[18px] font-semibold text-[rgba(68,83,46,0.6)] mb-0.5">Owner</p>
                  <p className="text-[16px] font-bold text-[#2c3520]">Sarah Johnson</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#e5d6d7] flex items-center justify-center">
                  <span className="text-[13px] font-bold text-[#44532e]">S</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="animate-fade-in-up [animation-delay:600ms] mb-6">
                <ProgressBar value={98.7} />
              </div>

              {/* Action buttons */}
              <div className="animate-fade-in-up [animation-delay:700ms] flex gap-3">
                <button className="flex-1 h-12 bg-[#905d3c] rounded-xl text-white text-[13px] font-bold shadow-[0px_4px_6px_rgba(144,93,60,0.3),0px_10px_15px_rgba(144,93,60,0.3)] hover:-translate-y-0.5 hover:shadow-[0px_6px_10px_rgba(144,93,60,0.35),0px_14px_20px_rgba(144,93,60,0.3)] active:scale-[0.98] transition-all duration-200">
                  View Profile
                </button>
                <button
                  aria-label="Share"
                  className="w-12 h-12 rounded-xl border border-[#e5d6d7] flex items-center justify-center hover:bg-[#f0e8e9] transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#44532e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="15" cy="4" r="1.8" />
                    <circle cx="15" cy="16" r="1.8" />
                    <circle cx="5" cy="10" r="1.8" />
                    <line x1="5" y1="10" x2="15" y2="4" />
                    <line x1="5" y1="10" x2="15" y2="16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Scan another dog */}
          <button className="animate-fade-in-up [animation-delay:800ms] mt-4 w-full h-[60px] rounded-xl border border-[#e5d6d7] flex items-center justify-center gap-2.5 text-[#44532e] text-[13px] font-bold hover:bg-[#f0e8e9] transition-colors">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#44532e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 9a8 8 0 1 0 1.5-4.7" />
              <polyline points="1 3 1 9 7 9" />
            </svg>
            Scan Another Dog
          </button>
        </main>
      </div>
    </div>
  );
}
