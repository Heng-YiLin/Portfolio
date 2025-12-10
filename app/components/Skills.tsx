export default function Skills() {
    return (
        <section id="skills" className="border-b">
            <div className="max-w-4xl mx-auto px-4 py-12">
                <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                <div className="grid gap-4 md:grid-cols-2 text-sm text-gray-700">
                    <div>
                        <h3 className="font-medium mb-1">Languages</h3>
                        <p>TypeScript, JavaScript, Python, (Go if relevant)</p>
                    </div>
                    <div>
                        <h3 className="font-medium mb-1">Frameworks & Tools</h3>
                        <p>React, React Native, Expo, React Flow, Firebase, Postgres, Git</p>
                    </div>
                    <div>
                        <h3 className="font-medium mb-1">Focus Areas</h3>
                        <p>Interactive UIs, system modelling tools, mobile UX, data visualisation</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
