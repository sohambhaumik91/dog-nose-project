const imgLogo = "https://www.figma.com/api/mcp/asset/6377af90-75ca-4202-9c84-f63edd10359a";
const imgSearch = "https://www.figma.com/api/mcp/asset/5698d6ec-ec91-4be5-8d24-e3fc03ffe591";
const imgDog = "/dog.png";
const imgScan = "https://www.figma.com/api/mcp/asset/c16208de-ca95-487c-ac12-70d0a4595eed";

export default function Home() {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-[#f7f3f0] to-[#f0e8e9] flex items-center justify-center">
      {/* Card — full screen on mobile, constrained card on tablet+ */}
      <div className="animate-scale-in relative w-full min-h-dvh overflow-hidden bg-gradient-to-b from-[#f7f3f0] to-[#f0e8e9] flex flex-col sm:min-h-0 sm:max-w-sm sm:rounded-3xl sm:shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] sm:my-8">

        {/* Decorative blurs */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-[-64px] right-12 w-48 h-48 rounded-full bg-[rgba(229,214,215,0.2)] blur-[32px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-[-40px] w-64 h-64 rounded-full bg-[rgba(229,214,215,0.2)] blur-[32px]"
        />

        {/* Header */}
        <header className="animate-fade-in-up [animation-delay:100ms] relative flex items-center justify-between px-5 pt-5 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#905d3c] rounded-lg flex items-center justify-center shadow-[0px_4px_6px_rgba(144,93,60,0.3),0px_10px_15px_rgba(144,93,60,0.3)] shrink-0">
              <img src={imgLogo} alt="" className="w-[18px] h-[18px]" />
            </div>
            <span className="text-[24px] font-bold text-[#905d3c] leading-none">
              Sarama
            </span>
          </div>
          <button
            aria-label="Search"
            className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-black/5 hover:rotate-12 transition-all duration-300"
          >
            <img src={imgSearch} alt="" className="w-5 h-5" />
          </button>
        </header>

        {/* Main content */}
        <main className="relative flex flex-col items-center flex-1 px-9 pt-10 pb-4">

          {/* Dog illustration — entrance wrapper */}
          <div className="animate-fade-in-up [animation-delay:200ms] mb-8 shrink-0">
            {/* Float + glow wrapper — both move together */}
            <div className="relative">
              <div
                aria-hidden
                className="absolute inset-[-8px] rounded-full bg-[rgba(144,93,60,0.1)] blur-[20px] animate-pulse-glow"
              />
              <img
                src={imgDog}
                alt="Dog illustration"
                className="relative w-60 h-60 object-contain"
              />
            </div>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-in-up [animation-delay:350ms] text-[clamp(22px,6vw,26px)] font-bold text-[#905d3c] text-center leading-tight mb-4">
            Know Your Dog,
            <br />
            Always.
          </h1>

          {/* Subtext */}
          <p className="animate-fade-in-up [animation-delay:450ms] text-[clamp(12px,3.5vw,14px)] font-medium text-[rgba(144,93,60,0.7)] text-center leading-6 mb-10 max-w-[280px]">
            Identify any dog instantly with advanced nose biometric scanning.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up [animation-delay:550ms] w-full max-w-[320px] mb-6">
            <button className="group relative w-full h-[60px] bg-[#905d3c] rounded-full flex items-center justify-center gap-3 shadow-[0px_8px_10px_-6px_rgba(144,93,60,0.3),0px_20px_25px_-5px_rgba(144,93,60,0.3)] overflow-hidden hover:-translate-y-0.5 hover:shadow-[0px_12px_16px_-6px_rgba(144,93,60,0.4),0px_24px_30px_-5px_rgba(144,93,60,0.35)] active:scale-[0.98] active:translate-y-0 transition-all duration-300">
              {/* Shimmer — sweeps across on hover */}
              <div
                aria-hidden
                className="absolute top-0 h-full w-[45%] bg-[rgba(255,255,255,0.18)] skew-x-[-15deg] -translate-x-[150%] group-hover:translate-x-[420%] transition-transform duration-700 ease-in-out"
              />
              <span className="relative text-[15px] font-bold text-white tracking-wide">
                Scan My Dog
              </span>
              <img src={imgScan} alt="" className="relative w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            </button>
          </div>

          {/* Trust badge */}
          <p className="animate-fade-in-up [animation-delay:650ms] text-[12px] font-semibold text-[rgba(144,93,60,0.5)] text-center">
            Trusted by 10,000+ pet owners
          </p>
        </main>

        {/* Footer */}
        <footer className="animate-fade-in-up [animation-delay:700ms] relative flex justify-center pb-8 pt-3">
          <button className="text-[12px] font-bold text-[#905d3c] relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#905d3c] hover:after:w-full after:transition-all after:duration-300">
            Already registered? Log in
          </button>
        </footer>
      </div>
    </div>
  );
}
