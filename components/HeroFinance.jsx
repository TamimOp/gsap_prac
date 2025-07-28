import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full bg-white overflow-hidden">
      {/* Floating Cards */}
      {/* Top Left Image */}
      <Image
        src="/assets/card1.png"
        alt="Card1"
        className="absolute top-10 left-10 w-36 h-36 rounded-xl object-cover shadow-lg"
        width={144}
        height={144}
      />

      {/* Top Right Blue Card */}
      <div className="absolute top-8 right-20 w-60 p-4 rounded-xl bg-[#E2F1FF] border-4 border-[#52A9EB] shadow-md">
        <div className="text-sm text-gray-500 mb-1">EUR</div>
        <div className="text-2xl font-bold text-black">€100</div>
        <div className="text-xs text-gray-500 mt-1">
          Balance: <span className="font-semibold">€4,921.22</span>
        </div>
        <button className="mt-3 w-full text-sm font-medium bg-white rounded-full py-1 shadow">
          Send
        </button>
      </div>

      {/* Middle Left Green Card */}
      <div className="absolute top-56 left-10 w-60 p-4 rounded-xl bg-[#38D964] text-white shadow-md">
        <p className="text-sm">Exchange</p>
        <p className="text-xl font-bold">– €500.00</p>
        <p className="text-xl font-bold">+ zł2,179.92</p>
        <span className="mt-3 inline-block bg-white/30 px-3 py-1 rounded-full text-sm font-medium">
          Approved
        </span>
      </div>

      {/* Bottom Left Pink Card */}
      <div className="absolute bottom-10 left-36 w-60 p-4 rounded-xl bg-[#FEEAFA] text-[#CC2E91] shadow-md">
        <div className="flex items-center gap-2 mb-1">
          <Image
            src="/assets/dp.png"
            alt="dp"
            className="w-6 h-6 rounded-full"
            width={24}
            height={24}
          />
          <p className="text-sm font-semibold">Jane Thomas</p>
        </div>
        <p className="text-sm">🔒 Secure payment</p>
        <button className="mt-2 w-full text-sm font-medium bg-white rounded-full py-1 shadow">
          Send
        </button>
      </div>

      {/* Bottom Right Image with Tag */}
      <div className="absolute bottom-16 right-16 rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/assets/card2.png"
          alt="Card2"
          className="w-48 h-48 object-cover"
          width={192}
          height={192}
        />
        <span className="absolute top-2 left-2 bg-white rounded-full px-3 py-1 text-xs font-medium shadow">
          📅 Enjoy the coffee!
        </span>
      </div>

      {/* Main Heading */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <h1 className="text-6xl font-bold text-[#FF3B30] leading-[1.1]">
          Unify your
          <br />
          finances
        </h1>
      </div>

      {/* Bottom Navigation (Example) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center bg-[#FF3B30] rounded-full px-6 py-2 text-white text-sm gap-6 shadow-xl">
        <span>🏠</span>
        <span className="cursor-pointer">Personal ⌄</span>
        <span className="cursor-pointer">Business ↗</span>
        <span className="cursor-pointer">Company ⌄</span>
      </div>
    </section>
  );
}
