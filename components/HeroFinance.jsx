"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Get section center for cards to move to
      const section = sectionRef.current;
      const centerX = section.offsetWidth / 2;
      const centerY = section.offsetHeight / 2;

      // Get card positions and calculate deltas to center
      const cardDeltas = cardsRef.current.map((card) => {
        if (!card) return { x: 0, y: 0 };
        const rect = card.getBoundingClientRect();
        const sectionRect = section.getBoundingClientRect();
        const cardCenterX = rect.left - sectionRect.left + rect.width / 2;
        const cardCenterY = rect.top - sectionRect.top + rect.height / 2;
        return {
          x: centerX - cardCenterX,
          y: centerY - cardCenterY,
        };
      });

      // Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });

      // 1. Heading: starts huge, shrinks and fades
      tl.fromTo(
        headingRef.current,
        { scale: 1.6, opacity: 1 },
        { scale: 0.6, opacity: 0.2, duration: 1, ease: "power2.out" },
        0
      );

      // 2. Cards: fade/slide in
      tl.to(
        cardsRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.08,
          duration: 0.6,
          ease: "power2.out",
        },
        0.2
      );

      // 3. Cards: move to center and scale up, above heading
      cardsRef.current.forEach((card, i) => {
        tl.to(
          card,
          {
            x: cardDeltas[i].x,
            y: cardDeltas[i].y,
            scale: 1.15,
            zIndex: 20,
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
            duration: 0.8,
            ease: "power2.inOut",
          },
          0.5
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Helper to assign refs to cards
  const setCardRef = (el, idx) => (cardsRef.current[idx] = el);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-white overflow-hidden"
    >
      {/* Floating Cards */}
      <Image
        src="/assets/card1.png"
        alt="Card1"
        className="absolute top-10 left-10 w-36 h-36 rounded-xl object-cover shadow-lg opacity-0 scale-90"
        width={144}
        height={144}
        ref={(el) => setCardRef(el, 0)}
        style={{ opacity: 0, transform: "scale(0.9)" }}
      />

      <div
        className="absolute top-8 right-20 w-60 p-4 rounded-xl bg-[#E2F1FF] border-4 border-[#52A9EB] shadow-md opacity-0 scale-90"
        ref={(el) => setCardRef(el, 1)}
        style={{ opacity: 0, transform: "scale(0.9)" }}
      >
        <div className="text-sm text-gray-500 mb-1">EUR</div>
        <div className="text-2xl font-bold text-black">€100</div>
        <div className="text-xs text-gray-500 mt-1">
          Balance: <span className="font-semibold">€4,921.22</span>
        </div>
        <button className="mt-3 w-full text-sm font-medium bg-white rounded-full py-1 shadow">
          Send
        </button>
      </div>

      <div
        className="absolute top-56 left-10 w-60 p-4 rounded-xl bg-[#38D964] text-white shadow-md opacity-0 scale-90"
        ref={(el) => setCardRef(el, 2)}
        style={{ opacity: 0, transform: "scale(0.9)" }}
      >
        <p className="text-sm">Exchange</p>
        <p className="text-xl font-bold">– €500.00</p>
        <p className="text-xl font-bold">+ zł2,179.92</p>
        <span className="mt-3 inline-block bg-white/30 px-3 py-1 rounded-full text-sm font-medium">
          Approved
        </span>
      </div>

      <div
        className="absolute bottom-10 left-36 w-60 p-4 rounded-xl bg-[#FEEAFA] text-[#CC2E91] shadow-md opacity-0 scale-90"
        ref={(el) => setCardRef(el, 3)}
        style={{ opacity: 0, transform: "scale(0.9)" }}
      >
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

      <div
        className="absolute bottom-16 right-16 rounded-xl overflow-hidden shadow-lg opacity-0 scale-90"
        ref={(el) => setCardRef(el, 4)}
        style={{ opacity: 0, transform: "scale(0.9)" }}
      >
        <Image
          src="/assets/card2.png"
          alt="Card2"
          className="w-48 h-48 object-cover"
          width={192}
          height={192}
        />
      </div>

      {/* Main Heading */}
      <div
        ref={headingRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 pointer-events-none"
        style={{
          fontSize: "12vw",
          transition: "font-size 0.3s",
        }}
      >
        <h1 className="text-7xl font-bold text-[#FF3B30] leading-[1.1]">
          Unify your
          <br />
          finances
        </h1>
      </div>

      {/* Bottom Navigation (Example) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center bg-[#FF3B30] rounded-full px-6 py-2 text-white text-sm gap-6 shadow-xl z-30">
        <span>🏠</span>
        <span className="cursor-pointer">Personal ⌄</span>
        <span className="cursor-pointer">Business ↗</span>
        <span className="cursor-pointer">Company ⌄</span>
      </div>
    </section>
  );
}
