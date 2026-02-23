const imgLogo = "https://www.figma.com/api/mcp/asset/6377af90-75ca-4202-9c84-f63edd10359a";
const imgSearch = "https://www.figma.com/api/mcp/asset/5698d6ec-ec91-4be5-8d24-e3fc03ffe591";
const imgDog = "https://www.figma.com/api/mcp/asset/c155bcab-5034-4103-80d8-4c160ad2aff7";
const imgScan = "https://www.figma.com/api/mcp/asset/c16208de-ca95-487c-ac12-70d0a4595eed";

export default function Home() {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-[#f7f3f0] to-[#f0e8e9] flex items-center justify-center">
      {/* Card — full screen on mobile, constrained card on tablet+ */}
      <div className="relative w-full min-h-dvh overflow-hidden bg-gradient-to-b from-[#f7f3f0] to-[#f0e8e9] flex flex-col sm:min-h-0 sm:max-w-sm sm:rounded-3xl sm:shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] sm:my-8">

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
        <header className="relative flex items-center justify-between px-5 pt-5 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#44532e] rounded-lg flex items-center justify-center shadow-[0px_4px_6px_rgba(68,83,46,0.3),0px_10px_15px_rgba(68,83,46,0.3)] shrink-0">
              <img src={imgLogo} alt="" className="w-[18px] h-[18px]" />
            </div>
            <span className="text-[17px] font-bold text-[#2c3520] leading-none">
              NosePrint
            </span>
          </div>
          <button
            aria-label="Search"
            className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors"
          >
            <img src={imgSearch} alt="" className="w-5 h-5" />
          </button>
        </header>

        {/* Main content */}
        <main className="relative flex flex-col items-center flex-1 px-9 pt-10 pb-4">
          {/* Dog illustration */}
          <div className="relative mb-8 shrink-0">
            <div
              aria-hidden
              className="absolute inset-[-8px] rounded-full bg-[rgba(68,83,46,0.1)] blur-[20px]"
            />
            <img
              src={imgDog}
              alt="Dog illustration"
              className="relative w-40 h-40 object-cover rounded-full"
            />
          </div>

          {/* Heading */}
          <h1 className="text-[clamp(22px,6vw,26px)] font-bold text-[#2c3520] text-center leading-tight mb-4">
            Know Your Dog,
            <br />
            Always.
          </h1>

          {/* Subtext */}
          <p className="text-[clamp(12px,3.5vw,14px)] font-medium text-[rgba(68,83,46,0.7)] text-center leading-6 mb-10 max-w-[280px]">
            Identify any dog instantly with advanced nose biometric scanning.
          </p>

          {/* CTA Button */}
          <button className="relative w-full max-w-[320px] h-[60px] bg-[#44532e] rounded-full flex items-center justify-center gap-3 shadow-[0px_8px_10px_-6px_rgba(68,83,46,0.3),0px_20px_25px_-5px_rgba(68,83,46,0.3)] overflow-hidden mb-6 hover:brightness-105 active:scale-[0.98] transition-all">
            {/* Shimmer overlay */}
            <div
              aria-hidden
              className="absolute left-0 top-0 h-full w-[55%] bg-[rgba(255,255,255,0.15)] skew-x-[-12deg] -translate-x-4"
            />
            <span className="relative text-[15px] font-bold text-white tracking-wide">
              Scan My Dog
            </span>
            <img src={imgScan} alt="" className="relative w-6 h-6" />
          </button>

          {/* Trust badge */}
          <p className="text-[12px] font-semibold text-[rgba(68,83,46,0.5)] text-center">
            Trusted by 10,000+ pet owners
          </p>
        </main>

        {/* Footer */}
        <footer className="relative flex justify-center pb-8 pt-3">
          <button className="text-[12px] font-bold text-[#44532e] hover:opacity-80 transition-opacity">
            Already registered? Log in
          </button>
        </footer>
      </div>
    </div>
  );
}
