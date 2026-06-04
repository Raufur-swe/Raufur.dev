import React from "react";
import video3 from "../assets/video3.mp4"

const projects = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Projects = () => {
  return (
    <section className="w-full px-3 py-4">
      <div className="mx-auto max-w-7xl rounded-2xl bg-[#F4E2BA] p-3">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold md:text-2xl">Projects</h2>

          <button className="rounded-xl border border-black/20 px-4 py-2 text-sm font-medium transition hover:bg-black hover:text-white">
            Home
          </button>
        </div>

        {/* Background */}
        <div
          className="relative overflow-hidden rounded-4xl  p-3 md:p-8"
          style={{
            
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <video src={video3} loop muted autoPlay className="absolute inset-0 h-full w-full object-cover" />

          <div className="relative z-10 flex flex-col gap-5">
            {projects.map((project) => (
              <div
                key={project.id}
                className="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl bg-[#F4E2BA] shadow-lg"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-[40%]">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-52 w-full object-cover md:h-full"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-center p-4 md:p-6">
                    <h3 className="text-lg font-bold md:text-3xl">
                      {project.title}
                    </h3>

                    {/* Hide description on mobile */}
                    <p className="mt-3 hidden text-sm text-black/80 md:block">
                      {project.description}
                    </p>

                    <div className="mt-4 flex gap-3">
                      <button className="rounded-lg border border-black/20 px-4 py-2 text-sm font-medium transition hover:bg-black hover:text-white">
                        View Live
                      </button>

                      <button className="rounded-lg border border-black/20 px-4 py-2 text-sm font-medium transition hover:bg-black hover:text-white">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;