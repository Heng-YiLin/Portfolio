"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import { Grape_Nuts } from "next/font/google";

//  Porject data array
const projectData = [
  {
    id: 1,
    img: "https://assets.codepen.io/16327/portrait-number-01.png",
    title: "Project 1",
  },
  {
    id: 2,
    img: "https://assets.codepen.io/16327/portrait-number-02.png",
    title: "Project 2",
  },
  {
    id: 3,
    img: "https://assets.codepen.io/16327/portrait-number-03.png",
    title: "Project 3",
  },
  // ... add as many as you want here
];

if (typeof window !== "undefined") {
  gsap.registerPlugin(Draggable);
}
export default function Projects() {
  const container = useRef(null); // Ref for the whole section
  const cardWrapperRef = useRef<HTMLUListElement>(null);
  const proxyRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (!cardWrapperRef.current || !proxyRef.current) return;

      const cards = cardWrapperRef.current;

      // Calculate width including the gap between items
      // We grab the first item to see its width + the gap
      const firstItem = cards.children[0] as HTMLElement;
      const gap = 16; // This matches your 'gap-4' (4 * 4px)
      const totalWidth = (firstItem.offsetWidth + gap) * projectData.length;

      Draggable.create(proxyRef.current, {
        type: "x",
        trigger: cards, // Dragging the cards moves the proxy
        onDrag: function () {
          // The Modulo operator (%) is the magic here.
          // It keeps the cards looping within the first set's width.
          const xPos = this.x % totalWidth;
          gsap.set(cards, { x: xPos });
        },
        // Adding inertia (optional but makes it feel like the CodePen)
        inertia: true,
        onThrowUpdate: function () {
          const xPos = this.x % totalWidth;
          gsap.set(cards, { x: xPos });
        },
      });
    },
    { scope: container, dependencies: [projectData] }
  );

  return (
    <section ref={container} id="projects" className="border-b min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      </div>

      {/* 1. Empty Proxy */}
      <div ref={proxyRef} className="invisible absolute"></div>

      {/* 2. Your Gallery */}
      <div className="gallery overflow-hidden w-full py-10">
        <ul
          ref={cardWrapperRef}
          className="cards flex flex-nowrap gap-4 cursor-grab active:cursor-grabbing bg-red-500"
        >
          {[...projectData, ...projectData].map((project, index) => (
            <li
              key={index}
              className="flex-shrink-0 w-[300px] h-[450px] rounded-xl bg-cover bg-center shadow-lg"
              style={{ backgroundImage: `url(${project.img})` }}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
