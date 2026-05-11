"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

type Phase = "weak" | "analysis" | "transforming" | "perfect";

const experienceBullets = [
  {
    weak: "Worked on projects using HTML and CSS.",
    strong:
      "Developed responsive web applications with React and Tailwind CSS, improving user engagement by 30%.",
  },
  {
    weak: "I did web development work.",
    strong:
      "Refactored reusable interface components, reducing repeated layout fixes across client projects.",
  },
  {
    weak: "Worked on projects using JavaScript.",
    strong:
      "Integrated REST APIs and optimized loading states to make dashboard workflows faster and clearer.",
  },
  {
    weak: "I am a hardworking person.",
    strong:
      "Collaborated with designers and backend engineers to deliver accessible, production-ready features.",
  },
];

const projectBullets = [
  {
    weak: "",
    strong: "Created a portfolio builder with dynamic sections, preview mode, and mobile-first editing.",
  },
  {
    weak: "",
    strong: "Improved Core Web Vitals by compressing assets and simplifying client-side rendering paths.",
  },
];

const skills = {
  weak: ["HTML", "CSS", "JavaScript"],
  strong: ["React", "TypeScript", "Next.js", "Tailwind CSS", "REST APIs", "Accessibility"],
};

export function ResumeTransformationHero() {
  const [phase, setPhase] = useState<Phase>("weak");
  const refining = phase === "transforming" || phase === "perfect";
  const analyzing = phase === "analysis";

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    const play = () => {
      setPhase("weak");
      timers.push(setTimeout(() => setPhase("analysis"), 3400));
      timers.push(setTimeout(() => setPhase("transforming"), 5400));
      timers.push(setTimeout(() => setPhase("perfect"), 7600));
      timers.push(setTimeout(play, 11200));
    };

    play();

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(135deg,#FAFAFA_0%,#F7F8FF_48%,#EEF2FF_100%)] py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(99,102,241,0.10),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.08),transparent_32%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="flex max-w-xl flex-col items-center text-center lg:col-span-6 lg:items-start lg:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-[11px] font-bold text-primary shadow-sm md:mb-8 md:text-[13px]">
            <Sparkles className="h-3.5 w-3.5" />
            Resume intelligence
          </div>
          <h1 className="max-w-2xl text-3xl font-black uppercase leading-[1.08] tracking-normal text-[#0f172a] sm:text-5xl md:text-6xl lg:text-[4.2rem]">
            Make weak resume content read like professional proof.
          </h1>
          <p className="mt-6 max-w-xl text-sm font-normal leading-relaxed text-gray-500 md:mt-8 md:text-xl">
            The same resume improves in wording, depth, hierarchy, spacing, and ATS-ready structure.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-[16px] font-black text-white shadow-xl transition hover:scale-105 active:scale-95 md:mt-10 md:px-12"
          >
            Build Your Resume
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

          <div className="relative mx-auto w-full max-w-[640px] lg:col-span-6 lg:w-[640px]">
          <AnimatePresence>
            {analyzing && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.5, ease }}
                className="absolute -top-12 left-1/2 z-20 -translate-x-1/2 rounded-full border border-indigo-100 bg-white/85 px-4 py-2 text-xs font-semibold text-indigo-600 shadow-lg shadow-indigo-950/5 backdrop-blur"
              >
                Analyzing content...
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            animate={{
              boxShadow:
                phase === "perfect"
                  ? "0 36px 96px rgba(79,70,229,0.17), 0 14px 34px rgba(17,24,39,0.09)"
                  : analyzing
                    ? "0 28px 80px rgba(99,102,241,0.16), 0 12px 28px rgba(17,24,39,0.07)"
                    : "0 18px 50px rgba(17,24,39,0.07)",
            }}
            transition={{ duration: 1.2, ease }}
            className="relative h-[700px] overflow-hidden rounded-3xl border border-white/80 bg-white p-5 shadow-2xl shadow-indigo-950/5 sm:p-6"
          >
            <motion.div
              animate={{
                opacity: analyzing ? [0.48, 0.78, 0.48] : 0,
                scale: analyzing ? [1, 1.025, 1] : 1,
              }}
              transition={{ duration: 1.8, repeat: analyzing ? Infinity : 0, ease }}
              className="pointer-events-none absolute inset-3 rounded-[1.7rem] border border-indigo-200 bg-indigo-300/10 blur-xl"
            />

            <div className="relative z-10 flex h-full flex-col gap-3 rounded-2xl bg-white px-8 py-7 sm:px-9">
              <header className="relative overflow-hidden">
                <Shimmer active={analyzing} />
                <motion.div
                  animate={{
                    x: refining ? 0 : -8,
                    color: refining ? "#111827" : "#9CA3AF",
                    fontSize: refining ? 34 : 25,
                    lineHeight: refining ? "38px" : "30px",
                    fontWeight: refining ? 800 : 500,
                  }}
                  transition={{ duration: 1.45, ease }}
                  className="font-sans tracking-normal"
                >
                  Maya Patel
                </motion.div>
                <motion.div
                  animate={{
                    x: refining ? 0 : 13,
                    marginTop: refining ? 6 : 2,
                    color: refining ? "#4F46E5" : "#9CA3AF",
                    fontSize: refining ? 16 : 14,
                    fontWeight: refining ? 700 : 500,
                  }}
                  transition={{ duration: 1.45, ease }}
                  className="font-sans"
                >
                  <MorphText weak="Web Developer" strong="Frontend Developer" refined={refining} />
                </motion.div>
                <motion.div
                  animate={{
                    x: refining ? 0 : -10,
                    marginTop: refining ? 10 : 6,
                    color: refining ? "#4B5563" : "#9CA3AF",
                    fontSize: refining ? 12 : 11,
                  }}
                  transition={{ duration: 1.45, ease }}
                  className="font-sans"
                >
                  maya.patel@email.com | Ahmedabad, India | linkedin.com/in/mayapatel
                </motion.div>
              </header>

              <ResumeSection refined={refining} analyzing={analyzing} poorOffset={-9} title="Summary">
                <motion.p
                  animate={{
                    x: refining ? 0 : 10,
                    color: refining ? "#374151" : "#9CA3AF",
                    fontSize: refining ? 13 : 12,
                    lineHeight: refining ? "18px" : "16px",
                  }}
                  transition={{ duration: 1.45, ease }}
                  className="relative overflow-hidden font-sans"
                >
                  <Shimmer active={analyzing} />
                  <MorphText
                    weak="I am a hardworking person and I did web development work."
                    strong="Frontend developer focused on building responsive, accessible web applications with measurable product impact."
                    refined={refining}
                  />
                </motion.p>
              </ResumeSection>

              <ResumeSection refined={refining} analyzing={analyzing} poorOffset={12} title="Experience">
                <motion.div
                  animate={{
                    x: refining ? 0 : 8,
                    color: refining ? "#111827" : "#9CA3AF",
                    fontSize: refining ? 15 : 13,
                    fontWeight: refining ? 700 : 500,
                  }}
                  transition={{ duration: 1.4, ease }}
                  className="font-sans"
                >
                  Frontend Developer, BrightLayer Studio
                </motion.div>
                <motion.div
                  animate={{
                    x: refining ? 0 : -6,
                    marginTop: refining ? 4 : 1,
                    color: refining ? "#6B7280" : "#9CA3AF",
                    fontSize: refining ? 12 : 11,
                  }}
                  transition={{ duration: 1.4, ease }}
                  className="font-sans"
                >
                  Jan 2023 - Present
                </motion.div>
                <motion.ul
                  animate={{ marginTop: refining ? 9 : 5, gap: refining ? 5 : 4 }}
                  transition={{ duration: 1.4, ease }}
                  className="flex flex-col"
                >
                  {experienceBullets.map((item, index) => (
                    <ResumeBullet
                      key={item.strong}
                      weak={item.weak}
                      strong={item.strong}
                      refined={refining}
                      analyzing={analyzing}
                      index={index}
                    />
                  ))}
                </motion.ul>
              </ResumeSection>

              <ResumeSection refined={refining} analyzing={analyzing} poorOffset={-5} title="Projects">
                <motion.ul
                  animate={{ gap: refining ? 5 : 2 }}
                  transition={{ duration: 1.4, ease }}
                  className="flex flex-col"
                >
                  {projectBullets.map((item, index) => (
                    <ResumeBullet
                      key={item.strong}
                      weak={item.weak}
                      strong={item.strong}
                      refined={refining}
                      analyzing={analyzing}
                      index={index + 4}
                    />
                  ))}
                </motion.ul>
              </ResumeSection>

              <ResumeSection refined={refining} analyzing={analyzing} poorOffset={11} title="Education">
                <motion.div
                  animate={{
                    x: refining ? 0 : -10,
                    color: refining ? "#111827" : "#9CA3AF",
                    fontSize: refining ? 14 : 12,
                    lineHeight: refining ? "21px" : "17px",
                    fontWeight: refining ? 700 : 500,
                  }}
                  transition={{ duration: 1.4, ease }}
                  className="font-sans"
                >
                  B.Tech in Computer Engineering
                </motion.div>
                <motion.div
                  animate={{
                    x: refining ? 0 : 9,
                    marginTop: refining ? 3 : 0,
                    color: refining ? "#4B5563" : "#9CA3AF",
                    fontSize: refining ? 13 : 12,
                  }}
                  transition={{ duration: 1.4, ease }}
                  className="font-sans"
                >
                  Gujarat Technological University, 2022
                </motion.div>
              </ResumeSection>

              <ResumeSection refined={refining} analyzing={analyzing} poorOffset={-6} title="Skills">
                <motion.div
                  animate={{
                    x: refining ? 0 : 12,
                    gap: refining ? 8 : 4,
                    marginTop: refining ? 2 : 0,
                  }}
                  transition={{ duration: 1.4, ease }}
                  className="flex flex-wrap font-sans"
                >
                  {(refining ? skills.strong : skills.weak).map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={refining && index > 2 ? { opacity: 0, y: 6 } : false}
                      animate={{
                        opacity: 1,
                        y: refining ? 0 : index % 2 === 0 ? 3 : -2,
                        borderColor: refining ? "#C7D2FE" : "#E5E7EB",
                        backgroundColor: refining ? "#EEF2FF" : "#F9FAFB",
                        color: refining ? "#3730A3" : "#9CA3AF",
                        fontSize: refining ? 12 : 11,
                        fontWeight: refining ? 700 : 500,
                        padding: refining ? "6px 10px" : "4px 7px",
                      }}
                      transition={{ duration: 1.25, ease, delay: refining ? index * 0.04 : 0 }}
                      className="rounded-full border"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </ResumeSection>
            </div>

            <AnimatePresence>
              {phase === "perfect" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.96 }}
                  transition={{ duration: 0.55, ease }}
                  className="absolute right-7 top-7 z-30 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/95 px-3 py-2 text-xs font-bold text-emerald-700 shadow-xl shadow-emerald-950/5 backdrop-blur"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Optimized for ATS
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResumeSection({
  refined,
  analyzing,
  poorOffset,
  title,
  children,
}: {
  refined: boolean;
  analyzing: boolean;
  poorOffset: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      animate={{
        x: refined ? 0 : poorOffset,
        paddingTop: refined ? 14 : 9,
        borderColor: refined ? "#E5E7EB" : "#F3F4F6",
      }}
      transition={{ duration: 1.45, ease }}
      className="border-t font-sans"
    >
      <motion.div
        animate={{
          color: refined ? "#6366F1" : "#9CA3AF",
          fontSize: refined ? 13 : 12,
          lineHeight: refined ? "16px" : "15px",
          fontWeight: refined ? 800 : 500,
          marginBottom: refined ? 8 : 5,
        }}
        transition={{ duration: 1.45, ease }}
        className="relative overflow-hidden font-sans uppercase tracking-normal"
      >
        <Shimmer active={analyzing} />
        {title}
      </motion.div>
      {children}
    </motion.section>
  );
}

function ResumeBullet({
  weak,
  strong,
  refined,
  analyzing,
  index,
}: {
  weak: string;
  strong: string;
  refined: boolean;
  analyzing: boolean;
  index: number;
}) {
  const emptyWeak = weak.length === 0;

  return (
    <motion.li
      animate={{
        opacity: refined || !emptyWeak ? 1 : 0,
        height: refined || !emptyWeak ? "auto" : 0,
        x: refined ? 0 : index % 2 === 0 ? -8 : 12,
        color: refined ? "#374151" : "#9CA3AF",
        fontSize: refined ? 13 : 12,
        lineHeight: refined ? "18px" : "16px",
        paddingLeft: refined ? 18 : 8,
      }}
      transition={{ duration: 1.45, ease, delay: refined ? index * 0.035 : 0 }}
      className="relative overflow-hidden font-sans"
    >
      <Shimmer active={analyzing && !emptyWeak} />
      <motion.span
        animate={{
          width: refined ? 5 : 3,
          height: refined ? 5 : 3,
          left: refined ? 2 : 0,
          top: refined ? 8 : 6,
          backgroundColor: refined ? "#6366F1" : "#9CA3AF",
        }}
        transition={{ duration: 1.45, ease }}
        className="absolute rounded-full"
      />
      <MorphText weak={weak} strong={strong} refined={refined} />
    </motion.li>
  );
}

function MorphText({
  weak,
  strong,
  refined,
}: {
  weak: string;
  strong: string;
  refined: boolean;
}) {
  return (
    <span className="relative inline-grid align-top">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={refined ? strong : weak}
          initial={{ opacity: 0, y: 7, filter: "blur(3px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -6, filter: "blur(3px)" }}
          transition={{ duration: 0.7, ease }}
          className="col-start-1 row-start-1"
        >
          {refined ? strong : weak}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function Shimmer({ active }: { active: boolean }) {
  if (!active) return null;

  return (
    <motion.span
      initial={{ x: "-120%" }}
      animate={{ x: "140%" }}
      transition={{ duration: 1.9, repeat: Infinity, ease }}
      className="pointer-events-none absolute inset-y-0 left-0 z-20 w-1/2 bg-[linear-gradient(90deg,transparent,rgba(99,102,241,0.10),transparent)] blur-sm"
    />
  );
}
