
export default function Hero() {
    return (
        <section id="hero" className="border-b">
            <div className="max-w-4xl mx-auto px-4 py-16">
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-2">
                    Software Engineer · Brisbane
                </p>
                <h1 className="text-4xl md:text-5xl font-semibold mb-4">
                    Hi, I’m Henry. I build interactive tools and mobile apps that make complex systems intuitive.
                </h1>
                <p className="text-gray-600 max-w-2xl mb-8">
                    Final-year Software Engineering (Hons) student at UQ. I’ve built a causal loop diagram GUI,
                    fitness tracking apps, and real-world social tools.
                </p>
                <div className="flex gap-3">
                    <a
                        href="#projects"
                        className="px-4 py-2 rounded-md border bg-black text-white text-sm"
                    >
                        View projects
                    </a>
                    <a href="#contact" className="px-4 py-2 rounded-md border text-sm">
                        Contact me
                    </a>
                </div>
            </div>
        </section>
    );
}
