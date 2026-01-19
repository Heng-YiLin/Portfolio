"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Draggable } from "gsap/Draggable";
import { Grape_Nuts } from 'next/font/google';
if (typeof window !== "undefined") {
	gsap.registerPlugin(Draggable);
  }
export default function Projects() {
	const container = useRef(null); // Ref for the whole section
	const cardWrapperRef = useRef<HTMLUListElement>(null);
	const proxyRef = useRef<HTMLDivElement>(null);
	useGSAP(() => {
		if (!cardWrapperRef.current || !proxyRef.current) return;
		Draggable.create(proxyRef.current,{
			type: "x",
			trigger: cardWrapperRef.current,
			onDrag: function() {
				gsap.set(cardWrapperRef.current,{x: this.x});
			}
		})
	}, { scope: container }); // Scoping helps GSAP find '.cards' inside this section

	return (
		<section id="projects" className="border-b min-h-screen ">
			<div className="max-w-4xl mx-auto px-4 py-12">
				<h2 className="text-2xl font-semibold mb-6">Projects</h2>
				
			</div>
			<div className="drag-proxy " ref={proxyRef}>

			<div className="gallery overflow-hidden w-full py-10">
					<ul className="cards flex flex-nowrap gap-4 cursor-grab active:cursor-grabbing bg-red-500" ref={cardWrapperRef}>
						<li
							className="flex-shrink-0 w-[300px] h-[450px] rounded-xl bg-cover bg-center shadow-lg"
							style={{ backgroundImage: "url(https://assets.codepen.io/16327/portrait-number-01.png)" }}
						></li>
						<li
							className="flex-shrink-0 w-[300px] h-[450px] rounded-xl bg-cover bg-center shadow-lg"
							style={{ backgroundImage: "url(https://assets.codepen.io/16327/portrait-number-02.png)" }}
						></li>
					<li
							className="flex-shrink-0 w-[300px] h-[450px] rounded-xl bg-cover bg-center shadow-lg"
							style={{ backgroundImage: "url(https://assets.codepen.io/16327/portrait-number-03.png)" }}
						></li>
					</ul>

					<div className="actions">
						<button className="prev">Prev</button>
						<button className="next">Next</button>
					</div>
				</div>
				</div>
		
		</section>
	);
}
