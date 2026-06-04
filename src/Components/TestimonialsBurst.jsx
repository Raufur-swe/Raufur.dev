import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Sarah",
    role: "Startup Founder",
    text: "Outstanding attention to detail and execution.",
  },
  {
    name: "Michael",
    role: "CEO",
    text: "Exceeded expectations in every way.",
  },
  {
    name: "Emma",
    role: "Marketing Director",
    text: "Fast, reliable and highly professional.",
  },
  {
    name: "James",
    role: "Agency Owner",
    text: "One of the best collaborations we've had.",
  },
  {
    name: "Daniel",
    role: "Product Manager",
    text: "Delivered quality that truly stands out.",
  },
  {
    name: "Olivia",
    role: "Brand Strategist",
    text: "Creative, thoughtful and result-driven.",
  },
  {
    name: "Sophia",
    role: "Founder",
    text: "Amazing communication throughout.",
  },
  {
    name: "Noah",
    role: "Entrepreneur",
    text: "Would absolutely hire again.",
  },
];

const positions = [
  { x: -420, y: -260, r: -10 },
  { x: 0, y: -320, r: 4 },
  { x: 420, y: -240, r: 10 },

  { x: -620, y: 40, r: -6 },
  { x: 620, y: 60, r: 6 },

  { x: -380, y: 300, r: -10 },
  { x: 0, y: 380, r: 0 },
  { x: 380, y: 300, r: 8 },
];

const TestimonialsBurst = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    const cards = cardsRef.current;

    gsap.set(cards, {
      opacity: 0,
      scale: 0.6,
      y: 80,
      filter: "blur(8px)",
    });

    gsap.set(".headline-word", {
      opacity: 0,
      y: 80,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=180%",
        scrub: 1.2,
        pin: true,
        pinSpacing: true,
      },
    });

    tl.to(".headline-word", {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      ease: "power3.out",
      duration: 1,
    });

    cards.forEach((card, index) => {
      tl.to(
        card,
        {
          x: positions[index].x,
          y: positions[index].y,
          rotation: positions[index].r,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          ease: "power3.out",
          duration: 1.2,
        },
        index * 0.08
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
      relative
      
      w-full
      min-h-screen
      flex
      items-center
      justify-center
      px-4
      z-0
    "
    >
      {/* Soft Glow */}
      <div className="absolute w-175 h-175 rounded-full bg-orange-200/20 blur-[180px]" />

      {/* Decorative Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[22%] left-[18%] text-orange-300 text-4xl">
          ✦
        </div>

        <div className="absolute top-[35%] right-[20%] text-pink-300 text-3xl">
          ✦
        </div>

        <div className="absolute bottom-[22%] left-[28%] text-orange-300 text-2xl">
          ✦
        </div>

        <div className="absolute bottom-[20%] right-[25%] text-yellow-300 text-4xl">
          ✦
        </div>
      </div>

      {/* Heading */}
      <div className="relative z-20 max-w-6xl text-center px-4">
        <h2 className="font-black tracking-tight leading-[0.95]">
          <span className="headline-word block text-[#111111] text-4xl sm:text-5xl md:text-6xl lg:text-[7rem]">
            Chosen by clients who
          </span>

          <span className="headline-word block text-[#111111] text-4xl sm:text-5xl md:text-6xl lg:text-[7rem]">
            value{" "}
            <span className="bg-linear-to-r from-amber-500 to-orange-400 bg-clip-text text-transparent">
              quality
            </span>{" "}
            and{" "}
            <span className="bg-linear-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
              results
            </span>
          </span>
        </h2>

        {/* Decorative Line */}
        <svg
          className="mx-auto mt-5 w-24 md:w-32"
          viewBox="0 0 120 30"
          fill="none"
        >
          <path
            d="M20 15C35 5 85 5 100 15"
            stroke="#F4B347"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M50 15C60 25 70 25 80 15"
            stroke="#F4B347"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Testimonial Cards */}
      {testimonials.map((item, index) => (
        <div
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-42.5
            sm:w-52.5
            md:w-57.5
            lg:w-62.5

            rounded-[28px]
            bg-white
            border
            border-[#EFE7D8]

            p-4
            md:p-5

            shadow-[0_10px_40px_rgba(0,0,0,0.06)]

            z-10
          "
        >
          <div className="text-orange-400 text-2xl leading-none">
            ❝
          </div>

          <p className="mt-2 text-[#222222] text-xs sm:text-sm md:text-base leading-relaxed">
            "{item.text}"
          </p>

          <div className="mt-5">
            <h4 className="font-semibold text-[#111111] text-sm md:text-base">
              {item.name}
            </h4>

            <p className="text-[#8A8A8A] text-xs">
              {item.role}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TestimonialsBurst;