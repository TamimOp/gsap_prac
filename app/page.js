import HeroSection from "@/components/HeroFinance";

export default function Home() {
  return (
    <main>
      <div
        style={{ height: "100vh" }}
        className="flex items-center justify-center text-9xl font-bold text-[#34C771]"
      >
        Scroll Down
      </div>
      <HeroSection />
      <div
        style={{ height: "100vh" }}
        className="flex items-center justify-center text-9xl font-bold text-[#477EE9]"
      >
        {" "}
        Finish{" "}
      </div>
    </main>
  );
}
