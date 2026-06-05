import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const topPanelRef = useRef(null);
  const bottomPanelRef = useRef(null);
  const nameRef = useRef(null);
  const percentRef = useRef(null);

  const [percent, setPercent] = useState(0);

    useEffect(() => {
    window.scrollTo(0, 0);

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);


  useEffect(() => {
    const counter = { value: 0 };

    gsap.to(counter, {
      value: 100,
      duration: 2.4,
      ease: "power2.out",
      onUpdate: () => {
        setPercent(Math.floor(counter.value));
      },
    });

    const tl = gsap.timeline({
      delay: 0.2,
      onComplete: () => {
        onComplete?.();
      },
    });

    tl.from(nameRef.current, {
      y: 120,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    })
      .from(
        percentRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
        },
        "-=0.5"
      )
      .to({}, { duration: 2 })
      .to(topPanelRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: "power4.inOut",
      })
      .to(
        bottomPanelRef.current,
        {
          yPercent: 100,
          duration: 1.2,
          ease: "power4.inOut",
        },
        "<"
      )
      .to(
        loaderRef.current,
        {
          opacity: 0,
          duration: 0.3,
        },
        "-=0.3"
      );
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-99999 overflow-hidden"
    >
      {/* Top Curtain */}
      <div
        ref={topPanelRef}
        className="absolute top-0 left-0 h-1/2 w-full bg-[#FCF3DE]"
      />

      {/* Bottom Curtain */}
      <div
        ref={bottomPanelRef}
        className="absolute bottom-0 left-0 h-1/2 w-full bg-[#FCF3DE]"
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#FCF3DE]">
        <h1
          ref={nameRef}
          className="
            font-black
            tracking-tight
            text-black
            leading-none
            text-[3rem]
            sm:text-[5rem]
            md:text-[7rem]
            lg:text-[9rem]
          "
        >
          RAU
          <span className="text-amber-500">FUR</span>
        </h1>

        <div
          ref={percentRef}
          className="
            mt-4
            text-black/70
            font-medium
            tracking-[0.25em]
            text-sm
            md:text-base
          "
        >
          LOADING {percent}%
        </div>

        <div className="mt-8 w-45 sm:w-60">
          <div className="h-0.5 bg-black/10 overflow-hidden rounded-full">
            <div
              className="h-full bg-black transition-all duration-100"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>

        <p
          className="
            absolute
            bottom-10
            text-[10px]
            sm:text-xs
            tracking-[0.35em]
            uppercase
            text-black/40
          "
        >
          Creative Developer • Designer • Problem Solver
        </p>
      </div>
    </div>
  );
};

export default Loader;