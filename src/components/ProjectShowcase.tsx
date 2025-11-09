"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useRef } from "react";
import clsx from "clsx";
import { WobbleCard } from "./ui/wobble-card";

// ------ Types ------
export type Project = {
  name: string;
  description: string;
  details: string;
  technologies: string[];
  deployment: string;
  url: string;
  image?: string; // /public images e.g. /images/projects/movielyzer.jpg
  accent?: string; // tailwind color token e.g. "emerald", "violet"
  background?: string;
};

// ------ Utilities ------
function useMouseSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
  };
  return { ref, onMouseMove };
}

const spring = { type: "spring", stiffness: 260, damping: 20 };

// ------ Card ------
function ProjectCard({ p, index }: { p: Project; index: number }) {
  const { ref, onMouseMove } = useMouseSpotlight();

  const accent = p.accent ?? "emerald";
  const ring = `ring-${accent}-300/40 dark:ring-${accent}-400/30`;
  const gradFrom = `from-${accent}-500/10`;
  const gradTo = `to-${accent}-500/0`;
  const background = p.background;
  return (
    <WobbleCard
      className={`bg-slate-300 overflow-hidden ring-1 flex flex-col justify-center h-full group relative rounded-2xl`}
    >
      {/* Image */}
      {p.image && (
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={p.image}
            alt={p.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            priority={index < 2}
          />
          {/* subtle gradient top */}
        </div>
      )}

      {/* Content */}
      <div className="p-5 md:p-6 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {p.description}
            </p>
          </div>
          {p.url && (
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                "inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15",
                "bg-white/60 dark:bg-zinc-800/60 backdrop-blur hover:scale-105 transition",
              )}
              aria-label={`${p.name} link`}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>

        <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          {p.details}
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <span
            className={clsx(
              "inline-flex items-center rounded-full border px-2 py-0.5 text-xs",
              "border-white/20 bg-white/70 dark:bg-zinc-800/60",
            )}
          >
            Deployed on:{" "}
            <span className="ml-1 font-medium">{p.deployment}</span>
          </span>
          {p.technologies.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-full border border-white/20 bg-black/5 dark:bg-white/5 px-2 py-0.5 text-xs text-zinc-700 dark:text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </WobbleCard>
  );
}

// ------ Section ------
export default function ProjectsShowcase({
  projects,
}: {
  projects: Project[];
}) {
  /**
   * Layout:
   * - md+: Bento grid (2 rows) with varying spans
   * - sm: Horizontal scroll (snap) for nice mobile feel
   */
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 md:mb-10">
          Our Projects
        </h2>

        {/* mobile: scrollable row */}
        <div className="md:hidden mx-4 px-4">
          <div className="grid grid-cols-1 gap-4">
            {projects.map((p, i) => (
              <div key={p.name} className="min-w-[85%]">
                <ProjectCard p={p} index={i} />
              </div>
            ))}
          </div>
        </div>

        {/* desktop: bento */}
        <div className="hidden md:grid grid-cols-12 auto-rows-[2fr] gap-5">
          {projects.map((p, i) => {
            // simple “bento” sizing: make first two bigger
            const classes =
              i === 0
                ? "col-span-6 row-span-2"
                : i === 1
                  ? "col-span-6 row-span-2"
                  : "col-span-4 row-span-1";

            return (
              <div key={p.name} className={classes}>
                <ProjectCard p={p} index={i} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
